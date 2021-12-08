import { Component, Input, OnInit } from '@angular/core';
import { ModalInstance } from '../modal.service';

@Component({
  selector: 'ui-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent implements OnInit {
  constructor(private modal: ModalInstance<ModalConfirmComponent>) {
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

  ok(): void {
    this.modal.close(true);
  }

  cancel(): void {
    this.modal.close(false);
  }
}
