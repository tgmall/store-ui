import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BreadcrumbItem } from './breadcrumb.item';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  constructor() {
  }

  private _changes = new Subject<ReadonlyArray<BreadcrumbItem>>();
  get changes(): Observable<ReadonlyArray<BreadcrumbItem>> {
    return this._changes;
  }

  push(item: BreadcrumbItem) {
    this._items.push(item);
    this._changes.next(this._items);
  }

  pop() {
    this._items.slice(-1, 1);
    this._changes.next(this._items);
  }

  get items(): ReadonlyArray<BreadcrumbItem> {
    return this._items;
  }

  private _items: BreadcrumbItem[] = [];
}
