import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { UserDto } from '../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _me?: UserDto;

  private change$$ = new ReplaySubject<UserDto | undefined>(1);

  get me(): UserDto | undefined {
    return this._me;
  }

  set me(value: UserDto | undefined) {
    if (value !== this._me) {
      this._me = value;
      this.change$$.next(this._me);
    }
  }

  get change$(): Observable<UserDto | undefined> {
    return this.change$$;
  }

  constructor() {
    this.change$$.next(undefined);
  }
}
