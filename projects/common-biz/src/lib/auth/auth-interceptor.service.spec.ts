import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor.service';
import { AuthService } from './auth.service';

describe('AuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        AuthService,
      ],
    });
  });

  it('should be created', () => {
    expect(TestBed.inject(HTTP_INTERCEPTORS)).toBeTruthy();
  });

  it('should intercept http request', () => {
    const auth = TestBed.inject(AuthService);
    auth.jwt = '123';
    const client = TestBed.inject(HttpClient);
    client.get<string>('/user').subscribe((result) => expect(result).toEqual(''));

    const controller = TestBed.inject(HttpTestingController);
    const req = controller.expectOne('/user');
    expect(req.request.headers.get('Authorization')).toEqual('Bearer 123');
    req.flush('');
  });
});
