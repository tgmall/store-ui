import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CaptchaDirective } from './captcha.directive';

@Component({
  template: `<img appCaptcha/>`,
})
class TestComponent {

}

describe('CaptchaDirective', () => {
  function createFixture(): ComponentFixture<TestComponent> {
    return TestBed.configureTestingModule({
      declarations: [TestComponent, CaptchaDirective],
    }).createComponent(TestComponent);
  }

  it('should create an instance', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const captcha = fixture.debugElement.query(By.directive(CaptchaDirective));
    expect(captcha).toBeTruthy();
  });
});
