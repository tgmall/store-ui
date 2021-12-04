import { AbstractControl } from '@angular/forms';

export type FormModel<T> = {
  [K in keyof T]: AbstractControl;
};
