import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../common-biz/src/lib/auth/auth.service';

@Component({
  selector: 'biz-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss'],
})
export class UserStatusComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }

}
