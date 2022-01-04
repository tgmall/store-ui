import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  constructor() {
  }

  private _ref = 0;

  get ref(): number {
    return this._ref;
  }

  get isLoading(): boolean {
    return this._ref > 0;
  }

  begin(): void {
    ++this._ref;
  }

  end(): void {
    --this._ref;
  }
}
