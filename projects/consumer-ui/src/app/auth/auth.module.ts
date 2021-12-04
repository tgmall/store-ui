import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonNonBizModule } from 'common-non-biz';
import { CommonBizModule } from '../../../../common-biz/src/lib/common-biz.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { AuthRoutingModule } from './auth-routing.module';
import { CaptchaDirective } from './register/captcha.directive';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    AuthLayoutComponent,
    CaptchaDirective,
  ],
  imports: [
    CommonModule,
    CommonNonBizModule,
    CommonBizModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {
}
