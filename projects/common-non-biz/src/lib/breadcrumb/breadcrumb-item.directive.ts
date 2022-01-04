import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';

@Directive({
  selector: '[uiBreadcrumbItem]',
})
export class BreadcrumbItemDirective implements OnInit, AfterViewInit, OnDestroy {
  constructor(private service: BreadcrumbService, private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const title = element.textContent!;
    const url = element.getAttribute('href');
    const item = { title, url };
    this.service.push(item);
  }

  ngOnDestroy(): void {
    this.service.pop();
  }
}
