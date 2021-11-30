import { NgModule } from '@angular/core';
import { ResizeObserverDirective } from './resize-observer/resize-observer.directive';


@NgModule({
  declarations: [
    ResizeObserverDirective,
  ],
  imports: [],
  exports: [
    ResizeObserverDirective,
  ],
})
export class CommonNonBizModule {
}
