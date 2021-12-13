import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommoditySharedModule } from '../commodity-shared/commodity-shared.module';
import { CommodityLayoutComponent } from './commodity-layout/commodity-layout.component';

import { CommodityRoutingModule } from './commodity-routing.module';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    ListComponent,
    CommodityLayoutComponent,
    ShowComponent,
  ],
  imports: [
    CommonModule,
    CommodityRoutingModule,
    CommoditySharedModule,
  ],
})
export class CommodityModule {
}
