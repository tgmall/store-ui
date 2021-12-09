import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { DropdownMenuDirective } from './dropdown/dropdown-menu/dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown/dropdown-toggle/dropdown-toggle.directive';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { ErrorsToArrayPipe } from './errors-to-array/object-to-array.pipe';
import { FieldErrorComponent } from './forms/field-error/field-error.component';
import { FieldErrorPipe } from './forms/field-error/field-error.pipe';
import { FormFieldDirective } from './forms/form-field/form-field.directive';
import { ResizeObserverDirective } from './resize-observer/resize-observer.directive';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';
import { SearchBoxComponent } from './search-box/search-box.component';

export * from './forms/form-model';
export * from './forms/field-error/field-error-mapper.service';

@NgModule({
  declarations: [
    ResizeObserverDirective,
    SearchBoxComponent,
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    SafeHtmlPipe,
    ErrorsToArrayPipe,
    FieldErrorPipe,
    FieldErrorComponent,
    FormFieldDirective,
    AutoFocusDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ResizeObserverDirective,
    SearchBoxComponent,
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    ErrorsToArrayPipe,
    SafeHtmlPipe,
    FieldErrorPipe,
    FieldErrorComponent,
    FormFieldDirective,
    AutoFocusDirective,
  ],
})
export class CommonNonBizModule {
}
