import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonBizModule } from 'common-biz';
import { CommonNonBizModule } from 'common-non-biz';
import { AuthSharedModule } from '../auth-shared/auth-shared.module';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { FavoriteSharedModule } from '../favorite-shared/favorite-shared.module';
import { IconModule } from '../icon/icon.module';
import { UserCenterSharedModule } from '../user-center-shared/user-center-shared.module';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';

@NgModule({
  declarations: [
    GlobalHeaderComponent,
    GlobalFooterComponent,
  ],
  imports: [
    CommonModule,
    CommonNonBizModule,
    CommonBizModule,
    RouterModule,
    CartSharedModule,
    FavoriteSharedModule,
    UserCenterSharedModule,
    AuthSharedModule,
    IconModule,
  ],
  exports: [
    GlobalHeaderComponent,
    GlobalFooterComponent,
  ],
})
export class LayoutSharedModule {
}
