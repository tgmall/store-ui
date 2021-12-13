import { Component, OnInit } from '@angular/core';
import { CommoditiesGQL, CommoditiesQuery } from 'common-biz';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(private gql: CommoditiesGQL) {
  }

  items: CommoditiesQuery['commodities'] = [];

  ngOnInit(): void {
    this.reload();
  }

  private reload(): void {
    this.gql.fetch({ tags: 'Python' }).subscribe(resp => {
      return this.items = resp.data.commodities;
    });
  }
}
