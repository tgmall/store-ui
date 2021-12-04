import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormModel } from 'common-non-biz';
import { map } from 'rxjs';
import { MobileExistsGQL, MutationRegisterArgs } from '../../generated/graphql';

function complexityOf(value: string): number {
  let result = 0;
  if (/[A-Z]/.test(value)) {
    ++result;
  }
  if (/[a-z]/.test(value)) {
    ++result;
  }
  if (/[0-9]/.test(value)) {
    ++result;
  }
  if (/([^\w]|_)/.test(value)) {
    ++result;
  }
  return result;
}

function complexityValidator(control: AbstractControl): ValidationErrors | null {
  const actualComplexity = complexityOf(control.value);
  const expectedComplexity = 2;
  return actualComplexity < expectedComplexity ? { complexity: { actualComplexity, expectedComplexity } } : null;
}

function sameAsFactory(origin: FormControl): ValidatorFn {
  return control => {
    origin.valueChanges.subscribe(() => {
      control.updateValueAndValidity();
    });

    return origin.value === control.value ? null : { sameAs: control.value };
  };
}

export class RegisterFormModel implements FormModel<MutationRegisterArgs> {
  constructor(private mobileExistsGQL: MobileExistsGQL) {
  }

  mobile = new FormControl('', [Validators.required, mobileValidator], [mobileExistsValidatorFactory(this.mobileExistsGQL)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), complexityValidator]);
  retypedPassword = new FormControl('', [Validators.required, sameAsFactory(this.password)]);
  smsCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]);
}

function isMobile(value: string): boolean {
  return !!value.match(/^1(\d){10}$/);
}

function mobileValidator(control: AbstractControl): ValidationErrors | null {
  return !isMobile(control.value) ? { mobile: control } : null;
}

function mobileExistsValidatorFactory(gql: MobileExistsGQL): AsyncValidatorFn {
  return control =>
    gql.fetch({ mobile: control.value }).pipe(
      map(result => result.data.mobileExists ? { mobileExists: control.value } : null),
    );
}
