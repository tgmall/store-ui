import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../auth.service';

@Directive({
  selector: '[bizIfAnonymous]',
})
export class IfAnonymousDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private auth: AuthService) {
  }

  private hasView = false;

  ngOnInit(): void {
    this.auth.change$.subscribe(user => {
      if (!user && !this.hasView) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else {
        this.viewContainerRef.clear();
        this.hasView = false;
      }
    });
  }
}
