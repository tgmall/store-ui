import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonNonBizModule } from 'common-non-biz';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CommodityDetailComponent } from './commodity-detail/commodity-detail.component';
import { CommodityLargeImagePipe } from './commodity-image/commodity-large-image.pipe';
import { CommoditySmallImagePipe } from './commodity-image/commodity-small-image.pipe';
import { CommodityItemComponent } from './commodity-item/commodity-item.component';
import { CommodityListComponent } from './commodity-list/commodity-list.component';
import { CommodityPriceComponent } from './commodity-price/commodity-price.component';


@NgModule({
  declarations: [
    CommodityListComponent,
    CommodityItemComponent,
    CommodityPriceComponent,
    CommoditySmallImagePipe,
    CommodityLargeImagePipe,
    BookDetailComponent,
    CommodityDetailComponent,
  ],
  imports: [
    CommonModule,
    CommonNonBizModule,
    RouterModule,
  ],
  exports: [
    CommodityListComponent,
    CommodityItemComponent,
    CommodityLargeImagePipe,
    CommodityPriceComponent,
    BookDetailComponent,
    CommodityDetailComponent,
  ],
})
export class CommoditySharedModule {
}
