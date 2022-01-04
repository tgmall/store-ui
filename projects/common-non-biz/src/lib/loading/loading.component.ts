import { Component, HostBinding, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'ui-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  constructor(private loading: LoadingService) {
  }

  ngOnInit(): void {
  }

  @HostBinding('hidden')
  get hidden(): boolean {
    return !this.loading.isLoading;
  }
}
