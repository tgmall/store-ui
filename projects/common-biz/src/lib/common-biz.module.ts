import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfAnonymousDirective } from './auth/if-anonymous/if-anonymous.directive';
import { IfAuthenticatedDirective } from './auth/if-authenticated/if-authenticated.directive';


@NgModule({
  declarations: [
    IfAuthenticatedDirective,
    IfAnonymousDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IfAuthenticatedDirective,
    IfAnonymousDirective,
  ],
})
export class CommonBizModule {
}
