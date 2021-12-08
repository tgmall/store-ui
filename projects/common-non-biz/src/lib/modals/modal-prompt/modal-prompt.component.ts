import { Component, Input, OnInit } from '@angular/core';
import { ModalInstance } from '../modal.service';

@Component({
  selector: 'ui-modal-prompt',
  templateUrl: './modal-prompt.component.html',
  styleUrls: ['./modal-prompt.component.scss'],
})
export class ModalPromptComponent implements OnInit {
  constructor(private modal: ModalInstance<ModalPromptComponent>) {
  }

  @Input()
  message?: string;

  @Input()
  title?: string;

  @Input()
  value?: string;

  get modalCss(): string | undefined {
    return this.contextual ? `modal-${this.contextual}` : undefined;
  }

  get contextual(): string | undefined {
    return this.modal.config.contextual;
  }

  ngOnInit(): void {
    this.modal.init(this);
  }

  ok(value: string): void {
    this.modal.close(value);
  }

  cancel(): void {
    this.modal.close();
  }
}
