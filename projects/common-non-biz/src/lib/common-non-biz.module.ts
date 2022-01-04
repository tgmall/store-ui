import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { BreadcrumbItemDirective } from './breadcrumb/breadcrumb-item.directive';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DropdownMenuDirective } from './dropdown/dropdown-menu/dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown/dropdown-toggle/dropdown-toggle.directive';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { ErrorsToArrayPipe } from './errors-to-array/object-to-array.pipe';
import { FieldErrorComponent } from './forms/field-error/field-error.component';
import { FieldErrorPipe } from './forms/field-error/field-error.pipe';
import { FormFieldDirective } from './forms/form-field/form-field.directive';
import { IconLoadingComponent } from './loading/icon-loading/icon-loading.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';
import { ModalContainerComponent } from './modals/modal-container/modal-container.component';
import { ModalMessageBoxComponent } from './modals/modal-message-box/modal-message-box.component';
import { ModalPromptComponent } from './modals/modal-prompt/modal-prompt.component';
import { ModalTemplateComponent } from './modals/modal-template/modal-template.component';
import { ModalComponent } from './modals/modal/modal.component';
import { ResizeObserverDirective } from './resize-observer/resize-observer.directive';
import { SafeHtmlPipe } from './safe-html/safe-html.pipe';
import { SafeResourceUrlPipe } from './safe-resource-url/safe-resource-url.pipe';
import { SearchBoxComponent } from './search-box/search-box.component';

export * from './forms/form-model';
export * from './forms/field-error/field-error-mapper.service';
export * from './modals/modal.service';
export * from './loading/loading.service';
export * from './loading/loading.interceptor';
export * from './breadcrumb/breadcrumb.item';

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
    ModalComponent,
    ModalContainerComponent,
    ModalMessageBoxComponent,
    ModalTemplateComponent,
    ModalConfirmComponent,
    ModalPromptComponent,
    SafeResourceUrlPipe,
    LoadingComponent,
    IconLoadingComponent,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
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
    ModalComponent,
    ModalContainerComponent,
    SafeResourceUrlPipe,
    LoadingComponent,
    IconLoadingComponent,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
  ],
})
export class CommonNonBizModule {
}
