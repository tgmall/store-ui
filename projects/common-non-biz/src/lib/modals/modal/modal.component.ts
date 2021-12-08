import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  css?: string;

  @Output()
  clickOutside = new EventEmitter<void>();
}
