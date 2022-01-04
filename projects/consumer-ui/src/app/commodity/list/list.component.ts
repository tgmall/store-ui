import { Component, OnInit } from '@angular/core';
import { CommoditiesQuery } from 'common-biz';
import { LoadingService } from 'common-non-biz';
import { CommodityListApi } from './commodity-list-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [CommodityListApi, LoadingService],
})
export class ListComponent implements OnInit {

  constructor(private api: CommodityListApi, public loading: LoadingService) {
  }

  items: CommoditiesQuery['commodities'] = [];

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.api.query().subscribe(data => {
      return this.items = data;
    });
  }
}
