import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  function createService(): AuthService {
    TestBed.configureTestingModule({});
    return TestBed.inject(AuthService);
  }

  it('should be created', () => {
    expect(createService).toBeTruthy();
  });
});
