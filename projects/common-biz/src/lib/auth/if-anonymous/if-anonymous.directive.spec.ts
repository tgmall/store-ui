import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { IfAnonymousDirective } from './if-anonymous.directive';

@Component({
  template: '<div *bizIfAnonymous class="content">Anonymous</div>',
})
class TestComponent {
}

describe('IfAnonymousDirective', () => {
  function createFixture(): ComponentFixture<TestComponent> {
    return TestBed.configureTestingModule({
      declarations: [TestComponent, IfAnonymousDirective],
      providers: [AuthService],
    }).createComponent(TestComponent);
  }

  it('should create an instance', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const directive = fixture.debugElement.query(By.css('.content'));
    expect(fixture).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should visible when anonymous', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const anonymousContent = fixture.debugElement.query(By.css('.content'));
    expect(anonymousContent).toBeTruthy();
    const auth = TestBed.inject(AuthService);
    auth.me = {} as any;
    fixture.detectChanges();
    const authenticatedContent = fixture.debugElement.query(By.css('.content'));
    expect(authenticatedContent).toBeNull();
  });
});
