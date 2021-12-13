import { Component, Input, OnInit } from '@angular/core';
import { CommoditiesQuery } from 'common-biz';

@Component({
  selector: 'app-commodity-list',
  templateUrl: './commodity-list.component.html',
  styleUrls: ['./commodity-list.component.scss'],
})
export class CommodityListComponent implements OnInit {

  constructor() {
  }

  @Input()
  items: CommoditiesQuery['commodities'] = [];

  ngOnInit(): void {
  }

}
