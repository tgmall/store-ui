import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CreateCaptchaGQL } from 'common-biz';

@Directive({
  selector: '[appCaptcha]',
  exportAs: 'appCaptcha',
})
export class CaptchaDirective implements OnInit {
  constructor(private createCaptchaGQL: CreateCaptchaGQL, private sanitizer: DomSanitizer) {
  }

  @HostBinding('src')
  captchaUrl?: SafeResourceUrl;

  id?: string;

  @HostBinding('style.cursor')
  cursor = 'pointer';

  @HostListener('click')
  click(): void {
    this.refresh();
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.createCaptchaGQL.mutate().subscribe((resp) => {
      this.captchaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(resp.data!!.createCaptcha.imageUrl);
      this.id = resp.data!!.createCaptcha.id;
    });
  }
}
