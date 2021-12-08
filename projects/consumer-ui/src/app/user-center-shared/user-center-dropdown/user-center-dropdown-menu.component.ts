import { Component, OnInit } from '@angular/core';
import { AuthService } from 'common-biz';

@Component({
  selector: 'app-user-center-dropdown-menu',
  templateUrl: './user-center-dropdown-menu.component.html',
  styleUrls: ['./user-center-dropdown-menu.component.scss'],
})
export class UserCenterDropdownMenuComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }

}
