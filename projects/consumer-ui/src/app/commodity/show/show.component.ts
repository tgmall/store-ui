import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookGQL, BookQuery, CommodityGQL, CommodityQuery } from 'common-biz';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private commodityGql: CommodityGQL, private bookGql: BookGQL) {
  }

  commodity?: CommodityQuery['commodity'];
  book?: BookQuery['book'];

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(it => it.get('commodityId')!),
      switchMap(id => this.commodityGql.fetch({ id })),
      map(resp => resp.data.commodity),
    ).subscribe((item) => this.commodity = item);
    this.route.paramMap.pipe(
      map(it => it.get('commodityId')!),
      switchMap(id => this.bookGql.fetch({ id })),
      map(resp => resp.data.book),
    ).subscribe((item) => this.book = item);
  }

}
