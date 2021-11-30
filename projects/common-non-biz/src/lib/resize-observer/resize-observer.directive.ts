import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[uiResizeObserver]',
  exportAs: 'uiResizeObserver',
})
export class ResizeObserverDirective implements OnInit, OnDestroy {
  private observer: ResizeObserver;

  @Output('uiResizeObserver')
  change$ = new EventEmitter<{ height: number, width: number }>();
  size: { width: number, height: number } = { width: 0, height: 0 };

  constructor(private elementRef: ElementRef<Element>) {
    const element = this.elementRef.nativeElement;
    this.observer = new ResizeObserver(() => {
      this.update(element);
    });
    this.observer.observe(element);
  }

  private update(element: Element): void {
    const contentRect = element.getBoundingClientRect();
    const computedStyle = getComputedStyle(element);
    this.size = {
      width: contentRect.width + toLength(computedStyle.marginLeft) + toLength(computedStyle.marginRight),
      height: contentRect.height + toLength(computedStyle.marginTop) + toLength(computedStyle.marginBottom),
    };
    this.change$.emit(this.size);
  }

  ngOnInit(): void {
    Promise.resolve().then(() => {
      this.update(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}

function toLength(lengthWithUnit: string = '0px'): number {
  return +lengthWithUnit.replace(/px$/, '');
}

