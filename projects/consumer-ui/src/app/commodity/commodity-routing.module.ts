import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommodityLayoutComponent } from './commodity-layout/commodity-layout.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: '',
    component: CommodityLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: ':commodityId',
        component: ShowComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommodityRoutingModule {
}
