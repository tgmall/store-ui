import { Injectable } from '@angular/core';
import { CommoditiesGQL } from 'common-biz';
import { LoadingService } from 'common-non-biz';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class CommodityListApi {
  constructor(private gql: CommoditiesGQL, private loading: LoadingService) {
  }

  query(): Observable<any> {
    this.loading.begin();
    return this.gql.fetch({ tags: 'Python' }).pipe(
      map(resp => resp.data.commodities),
      tap({
        next: () => this.loading.end(),
        error: () => this.loading.end(),
      }),
    );
  }
}
