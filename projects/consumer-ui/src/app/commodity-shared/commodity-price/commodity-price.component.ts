import { Component, Input, OnInit } from '@angular/core';
import { CommoditiesQuery } from 'common-biz';

@Component({
  selector: 'app-commodity-price',
  templateUrl: './commodity-price.component.html',
  styleUrls: ['./commodity-price.component.scss'],
})
export class CommodityPriceComponent implements OnInit {
  constructor() {
  }

  minPrice!: number;
  maxPrice!: number;

  @Input()
  item!: CommoditiesQuery['commodities'][0];

  ngOnInit(): void {
    const prices = this.item?.skus.filter(it => !!it.price && it.price > 0).map(it => it.price!);
    this.minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    this.maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
  }
}
