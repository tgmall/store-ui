import { Component, Input, OnInit } from '@angular/core';
import { CommodityQuery } from 'common-biz';

@Component({
  selector: 'app-commodity-detail',
  templateUrl: './commodity-detail.component.html',
  styleUrls: ['./commodity-detail.component.scss'],
})
export class CommodityDetailComponent implements OnInit {

  constructor() {
  }

  @Input()
  commodity!: CommodityQuery['commodity'];

  ngOnInit(): void {
  }

}
