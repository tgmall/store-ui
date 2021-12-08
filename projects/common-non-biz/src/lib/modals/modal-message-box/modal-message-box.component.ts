import { Component, Input, OnInit } from '@angular/core';
import { ModalInstance } from '../modal.service';

@Component({
  selector: 'ui-modal-message-box',
  templateUrl: './modal-message-box.component.html',
  styleUrls: ['./modal-message-box.component.scss'],
})
export class ModalMessageBoxComponent implements OnInit {
  constructor(private modal: ModalInstance<ModalMessageBoxComponent>) {
  }

  @Input()
  message?: string;

  @Input()
  title?: string;

  get modalCss(): string | undefined {
    return this.contextual ? `modal-${this.contextual}` : undefined;
  }

  get contextual(): string | undefined {
    return this.modal.config.contextual;
  }

  ngOnInit(): void {
    this.modal.init(this);
  }

  close(): void {
    this.modal.close(this);
  }
}
