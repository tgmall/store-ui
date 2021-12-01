import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonNonBizModule } from 'common-non-biz';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalLayoutComponent } from './layout/global-layout/global-layout.component';
import { LayoutSharedModule } from './layout/layout-shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GlobalLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutSharedModule,
    CommonNonBizModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
