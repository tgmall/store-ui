import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonNonBizModule } from 'common-non-biz';
import { FavoriteDropdownComponent } from './favorite-dropdown/favorite-dropdown.component';


@NgModule({
  declarations: [
    FavoriteDropdownComponent,
  ],
  imports: [
    CommonModule,
    CommonNonBizModule,
  ],
  exports: [
    FavoriteDropdownComponent,
  ],
})
export class FavoriteSharedModule {
}
