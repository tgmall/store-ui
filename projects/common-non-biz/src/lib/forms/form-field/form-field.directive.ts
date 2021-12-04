import { ContentChild, Directive, HostBinding } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Directive({
  selector: '[uiFormField]',
  exportAs: 'uiFormField',
})
export class FormFieldDirective {

  constructor() {
  }

  @ContentChild(NgControl, { static: true })
  control?: NgControl;

  @HostBinding('class.ng-empty')
  get empty(): boolean {
    return this.value === null || this.value === undefined || this.value === '';
  }

  @HostBinding('class.ng-required')
  get required(): boolean {
    const validators = (this.control?.control as any)?._rawValidators || [];
    return validators === Validators.required || validators.indexOf(Validators.required) !== -1;
  }

  get value(): any {
    return this.control?.value;
  }

}
