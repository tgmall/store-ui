import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { GraphQLErrors } from '@apollo/client/errors';
import { Observable, of, retryWhen, switchMap, tap } from 'rxjs';
import { AuthService } from './auth.service';

class UnauthorizedError {
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 打破 AuthService 和 AuthInterceptor 之间的循环依赖
    const auth = this.injector.get(AuthService);
    return of(true).pipe(
      switchMap(() => {
        return next.handle(auth.withAuthorization(req));
      }),
      tap({
        next: resp => {
          if (resp instanceof HttpResponse) {
            const errors = resp.body.errors as GraphQLErrors;
            if (errors?.some(it => isUnauthorized(it.extensions as GraphQLErrorExtension))) {
              throw new UnauthorizedError();
            }
          }
        },
        error: resp => {
          if (resp instanceof HttpErrorResponse) {
            if (resp.status === 401) {
              throw new UnauthorizedError();
            }
          }
        },
      }),
      retryWhen((errors => errors.pipe(
        switchMap((error) => {
          if (error instanceof UnauthorizedError) {
            return auth.login();
          } else {
            throw error;
          }
        }),
      ))),
    );
  }
}

enum GraphQLErrorType {
  InvalidSyntax = 'InvalidSyntax',
  ValidationError = 'ValidationError',
  DataFetchingException = 'DataFetchingException',
  NullValueInNonNullableField = 'NullValueInNonNullableField',
  OperationNotSupported = 'OperationNotSupported',
  ExecutionAborted = 'ExecutionAborted',
}

interface GraphQLErrorException {
  code: string;
  detail?: string;
  cause?: GraphQLErrorException;
}

interface GraphQLErrorExtension {
  type: GraphQLErrorType;
  exception?: GraphQLErrorException;
}

function isUnauthorized(extensions: GraphQLErrorExtension) {
  return extensions.type === GraphQLErrorType.DataFetchingException && extensions.exception?.code === 'CredentialNotFound';
}
