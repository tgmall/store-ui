import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonBizModule } from '../../../../common-biz/src/lib/common-biz.module';
import { UserStatusComponent } from './user-status/user-status.component';


@NgModule({
  declarations: [
    UserStatusComponent,
  ],
  imports: [
    CommonModule,
    CommonBizModule,
    RouterModule,
  ],
  exports: [
    UserStatusComponent,
  ],
})
export class AuthSharedModule {
}
