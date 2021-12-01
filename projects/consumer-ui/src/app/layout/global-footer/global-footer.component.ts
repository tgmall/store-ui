import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.scss'],
})
export class GlobalFooterComponent implements OnInit {
  height: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
