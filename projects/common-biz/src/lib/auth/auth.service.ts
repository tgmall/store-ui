import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, of, ReplaySubject, tap } from 'rxjs';
import { CurrentUserGQL, CurrentUserQuery } from '../generated/graphql';

type CurrentUser = CurrentUserQuery['currentUser'] | undefined;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private currentUserGQL: CurrentUserGQL) {
    this.change$$.next(undefined);
  }

  private _me: CurrentUser;

  private change$$ = new ReplaySubject<CurrentUser>(1);

  get me(): CurrentUser {
    return this._me;
  }

  set me(value: CurrentUser) {
    if (value !== this._me) {
      this._me = value;
      this.change$$.next(this._me);
    }
  }

  get change$(): Observable<CurrentUser> {
    return this.change$$;
  }

  get jwt(): string | null {
    return localStorage.getItem(storeJwtKey);
  }

  set jwt(value: string | null) {
    if (value) {
      localStorage.setItem(storeJwtKey, value);
    } else {
      this.removeJwt();
    }
  }

  removeJwt(): void {
    localStorage.removeItem(storeJwtKey);
  }

  fetchCurrentUser(): Observable<CurrentUser> {
    return this.currentUserGQL.fetch().pipe(
      map(resp => resp.data.currentUser),
      tap((currentUser) => this.me = currentUser),
    );
  }

  fetchCurrentUserIfLoggedIn(): Observable<CurrentUser> {
    // 如果尚未登录过，则什么也不做
    if (!this.jwt) {
      return EMPTY;
    }

    return this.fetchCurrentUser();
  }

  withAuthorization(req: HttpRequest<any>): HttpRequest<any> {
    return this.jwt ? req.clone({
      setHeaders: { Authorization: `Bearer ${this.jwt}` },
    }) : req;
  }

  login(): Observable<void> {
    this.jwt = prompt('请输入 jwt 值');
    // 如果用户输入了 jwt 值，则发出一条任意数据，这会导致 retryWhen 重试，否则返回 EMPTY 流，这不会触发 retryWhen
    return this.jwt ? of(void 0) : EMPTY;
  }

  logout(): void {
    this.removeJwt();
    this.me = undefined;
  }
}

const storeJwtKey = 'store-jwt';
