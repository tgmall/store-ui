import { Component } from '@angular/core';
import { LoadingService } from 'common-non-biz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoadingService],
})
export class AppComponent {
}
