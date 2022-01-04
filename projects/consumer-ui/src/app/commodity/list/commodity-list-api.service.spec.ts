import { TestBed } from '@angular/core/testing';

import { CommodityListApi } from './commodity-list-api.service';

describe('CommodityListApiService', () => {
  let service: CommodityListApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommodityListApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
