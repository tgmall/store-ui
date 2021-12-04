import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileExistsGQL, RegisterGQL, SendCodeViaSmsGQL } from 'common-biz';
import { RegisterFormModel } from '../../../../../common-biz/src/lib/auth/forms/register.form-model';
import { CaptchaDirective } from './captcha.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private mobileExistsGQL: MobileExistsGQL,
    private registerGQL: RegisterGQL,
    private sendCodeViaSmsGQL: SendCodeViaSmsGQL,
    private router: Router,
  ) {
  }

  model = new RegisterFormModel(this.mobileExistsGQL);
  form = this.fb.group(this.model);
  captchaControl = new FormControl('', [Validators.minLength(4), Validators.maxLength(4)]);

  ngOnInit(): void {
  }

  submit(captcha: CaptchaDirective): void {
    this.form.markAsDirty();
    this.registerGQL.mutate({
      mobile: this.model.mobile.value,
      smsCode: this.model.smsCode.value,
      password: this.model.password.value,
    }).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: () => {
        captcha.refresh();
      },
    });
  }

  sendCodeViaSms(mobile: string, captchaId: string, captchaValue: string): void {
    this.sendCodeViaSmsGQL.mutate({
      mobile,
      captchaId,
      captchaValue,
    }).subscribe();
  }
}
