import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '.dropdown',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

  hidden = true;

  toggle(): void {
    this.hidden = !this.hidden;
  }

  @HostListener('document:click', ['$event'])
  documentClick($event: Event): void {
    if ($event.target instanceof Element) {
      if (!this.isDescentElement($event.target)) {
        this.hidden = true;
      }
    }
  }

  @HostListener('mouseenter')
  mouseEnter(): void {
    this.hidden = false;
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.hidden = true;
  }

  private isDescentElement(target: Element | null): Boolean {
    return target !== null && (target === this.elementRef.nativeElement || this.isDescentElement(target.parentElement));
  }
}
