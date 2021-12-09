import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutoFocusDirective } from './auto-focus.directive';

@Component({
  template: '<input type="text" autofocus>',
})
class TestComponent {

}

describe('AutoFocusDirective', () => {
  function createFixture(): ComponentFixture<TestComponent> {
    return TestBed.configureTestingModule({
      declarations: [TestComponent, AutoFocusDirective],
    }).createComponent(TestComponent);
  }

  it('should create an instance', () => {
    const fixture = createFixture();
    const directive = fixture.debugElement.query(By.directive(AutoFocusDirective));
    expect(directive).toBeTruthy();
  });

  it('should auto set focus', () => {
    const fixture = createFixture();
    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    fixture.detectChanges();
    expect(document.activeElement).toEqual(input);
  });
});
