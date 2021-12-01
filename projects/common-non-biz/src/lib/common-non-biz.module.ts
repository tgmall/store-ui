import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResizeObserverDirective } from './resize-observer/resize-observer.directive';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [
    ResizeObserverDirective,
    SearchBoxComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    ResizeObserverDirective,
    SearchBoxComponent,
  ],
})
export class CommonNonBizModule {
}
