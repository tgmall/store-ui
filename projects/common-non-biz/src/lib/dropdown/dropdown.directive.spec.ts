import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownMenuDirective } from './dropdown-menu/dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle/dropdown-toggle.directive';
import { DropdownDirective } from './dropdown.directive';

@Component({
  template: `
    <div class="dropdown">
      <div class="dropdown-toggle">Toggle</div>
      <div class="dropdown-menu">Menu</div>
    </div>`,
})
class TestComponent {

}

describe('DropdownDirective', () => {
  function createFixture(): ComponentFixture<TestComponent> {
    return TestBed.configureTestingModule({
      declarations: [TestComponent, DropdownDirective, DropdownToggleDirective, DropdownMenuDirective],
    }).createComponent(TestComponent);
  }

  it('should create an instance', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const dropdown = fixture.debugElement;
    const toggle = dropdown.query(By.css('.dropdown-toggle'));
    const menu = dropdown.query(By.css('.dropdown-menu'));
    expect(dropdown).toBeTruthy();
    expect(toggle).toBeTruthy();
    expect(menu).toBeTruthy();
  });

  it('should toggle by click', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const dropdown = fixture.debugElement.query(By.css('.dropdown'));
    const toggle = dropdown.query(By.css('.dropdown-toggle'));
    const menu = dropdown.query(By.css('.dropdown-menu'));
    expect(getComputedStyle(menu.nativeElement).display).toEqual('block');
    expect(menu.properties['hidden']).toBeTruthy();
    toggle.triggerEventHandler('click', new MouseEvent('click'));
    fixture.detectChanges();
    expect(menu.properties['hidden']).toBeFalsy();
  });
});
