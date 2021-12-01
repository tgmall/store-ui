import { EventEmitter, HostBinding, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  @HostBinding('placeholder')
  placeholder = '';

  search$ = new EventEmitter<string>();
  term = '';
  title = '搜索';

  constructor() {
  }

  search(): void {
    this.search$.emit(this.term);
  }
}
