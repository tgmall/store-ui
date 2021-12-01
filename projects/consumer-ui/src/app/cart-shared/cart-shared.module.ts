import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonNonBizModule } from 'common-non-biz';
import { CartDropdownMenuComponent } from './cart-dropdown-menu/cart-dropdown-menu.component';


@NgModule({
  declarations: [
    CartDropdownMenuComponent,
  ],
  imports: [
    CommonModule,
    CommonNonBizModule,
  ],
  exports: [
    CartDropdownMenuComponent,
  ],
})
export class CartSharedModule {
}
