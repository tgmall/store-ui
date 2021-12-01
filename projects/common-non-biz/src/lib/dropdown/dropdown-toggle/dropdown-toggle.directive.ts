import { Directive, HostListener } from '@angular/core';
import { DropdownDirective } from '../dropdown.directive';

@Directive({
  selector: '.dropdown-toggle',
})
export class DropdownToggleDirective {

  constructor(private dropdown: DropdownDirective) {
  }

  @HostListener('click', ['$event'])
  toggle($event: Event): void {
    this.dropdown.toggle();
    $event.preventDefault();
  }
}
