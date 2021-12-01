import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownMenuDirective } from './dropdown/dropdown-menu/dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown/dropdown-toggle/dropdown-toggle.directive';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { ResizeObserverDirective } from './resize-observer/resize-observer.directive';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [
    ResizeObserverDirective,
    SearchBoxComponent,
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    ResizeObserverDirective,
    SearchBoxComponent,
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
  ],
})
export class CommonNonBizModule {
}
