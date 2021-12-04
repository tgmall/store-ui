import { Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormFieldDirective } from '../form-field/form-field.directive';

@Component({
  selector: 'ui-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent implements OnInit {

  constructor(@Optional() field?: FormFieldDirective) {
    this.field = field;
  }

  @Input()
  field?: FormFieldDirective;

  @Input()
  customMessages?: Record<string, string>;

  get control(): AbstractControl | null | undefined {
    return this.field?.control?.control;
  }

  ngOnInit(): void {
  }

}
