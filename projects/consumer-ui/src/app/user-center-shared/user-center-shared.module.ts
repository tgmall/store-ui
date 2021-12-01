import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonNonBizModule } from 'common-non-biz';
import { UserCenterDropdownMenuComponent } from './user-center-dropdown/user-center-dropdown-menu.component';

@NgModule({
  declarations: [
    UserCenterDropdownMenuComponent,
  ],
  imports: [
    CommonModule,
    CommonNonBizModule,
  ],
  exports: [
    UserCenterDropdownMenuComponent,
  ],
})
export class UserCenterSharedModule {
}
