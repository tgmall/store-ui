import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalLayoutComponent } from './layout/global-layout/global-layout.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'commodities',
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(it => it.AuthModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(it => it.CartModule),
      },
      {
        path: 'commodities',
        loadChildren: () => import('./commodity/commodity.module').then(it => it.CommodityModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./order/order.module').then(it => it.OrderModule),
      },
      {
        path: 'user-center',
        loadChildren: () => import('./user-center/user-center.module').then(it => it.UserCenterModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
