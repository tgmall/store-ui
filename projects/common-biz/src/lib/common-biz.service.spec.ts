import { TestBed } from '@angular/core/testing';

import { CommonBizService } from './common-biz.service';

describe('CommonBizService', () => {
  let service: CommonBizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonBizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
