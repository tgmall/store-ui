import { Component, Input, OnInit } from '@angular/core';
import { CommoditiesQuery } from 'common-biz';

@Component({
  selector: 'app-commodity-item',
  templateUrl: './commodity-item.component.html',
  styleUrls: ['./commodity-item.component.scss'],
})
export class CommodityItemComponent implements OnInit {

  constructor() {
  }

  @Input()
  item?: CommoditiesQuery['commodities'][0];

  ngOnInit(): void {
  }

}
