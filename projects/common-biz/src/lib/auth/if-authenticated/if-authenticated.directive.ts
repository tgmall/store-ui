import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AuthService } from '../auth.service';

@UntilDestroy()
@Directive({
  selector: '[bizIfAuthenticated]',
})
export class IfAuthenticatedDirective implements OnInit {
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private auth: AuthService) {
  }

  private hasView = false;

  ngOnInit(): void {
    this.auth.change$.subscribe(user => {
      if (user && !this.hasView) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, { me: user });
        this.hasView = true;
      } else {
        this.viewContainerRef.clear();
        this.hasView = false;
      }
    });
  }

  static ngTemplateContextGuard(dir: IfAuthenticatedDirective, ctx: unknown): ctx is AuthService {
    return true;
  };
}
