import { TestBed } from '@angular/core/testing';

import { CommonNonBizService } from './common-non-biz.service';

describe('CommonNonBizService', () => {
  let service: CommonNonBizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonNonBizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
