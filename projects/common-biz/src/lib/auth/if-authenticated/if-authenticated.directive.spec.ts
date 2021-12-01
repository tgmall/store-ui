import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { IfAuthenticatedDirective } from './if-authenticated.directive';

@Component({
  template: '<div *bizIfAuthenticated class="content">Authenticated</div>',
})
class TestComponent {
}

describe('IfAuthenticatedDirective', () => {
  function createFixture(): ComponentFixture<TestComponent> {
    return TestBed.configureTestingModule({
      declarations: [TestComponent, IfAuthenticatedDirective],
      providers: [AuthService],
    }).createComponent(TestComponent);
  }

  it('should create an instance', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const directive = fixture.debugElement.query(By.css('.content'));
    expect(fixture).toBeTruthy();
    expect(directive).toBeNull();
  });

  it('should visible when authenticated', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const anonymousContent = fixture.debugElement.query(By.css('.content'));
    expect(anonymousContent).toBeNull();
    const auth = TestBed.inject(AuthService);
    auth.me = {} as any;
    fixture.detectChanges();
    const authenticatedContent = fixture.debugElement.query(By.css('.content'));
    expect(authenticatedContent).toBeTruthy();
  });
});
