import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ResizeObserverDirective } from './resize-observer.directive';

@Component({
  template: '<div uiResizeObserver #content="uiResizeObserver" attr.real-height="{{content.size.height}}px">content</div>',
})
class TestComponent {

}

describe('ResizeObserverDirective', () => {
  function createFixture(): ComponentFixture<TestComponent> {
    return TestBed.configureTestingModule({
      declarations: [TestComponent, ResizeObserverDirective],
    }).createComponent(TestComponent);
  }

  it('should create an instance', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const observer = fixture.debugElement.query(By.directive(ResizeObserverDirective));
    expect(observer).toBeTruthy();
  });

  it('should get size', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    return fixture.whenRenderingDone().then(() => {
      fixture.detectChanges();
      const observer = fixture.debugElement.query(By.directive(ResizeObserverDirective));
      expect(observer.attributes['real-height']).toEqual('18px');
    });
  });
});
