import { Directive, HostBinding } from '@angular/core';
import { DropdownDirective } from '../dropdown.directive';

@Directive({
  selector: '.dropdown-menu',
})
export class DropdownMenuDirective {
  constructor(private dropdown: DropdownDirective) {
  }

  @HostBinding('hidden')
  get hidden(): boolean {
    return this.dropdown.hidden;
  }

  @HostBinding('style.display')
  display = 'block';
}
