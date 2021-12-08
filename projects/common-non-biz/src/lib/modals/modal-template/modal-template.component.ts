import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalInstance } from '../modal.service';

@Component({
  selector: 'ui-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss'],
})
export class ModalTemplateComponent implements OnInit {

  constructor(public modal: ModalInstance<ModalTemplateComponent>) {
  }

  templateRef?: TemplateRef<any>;

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
