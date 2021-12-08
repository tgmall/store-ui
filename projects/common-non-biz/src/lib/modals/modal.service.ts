import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalMessageBoxComponent } from './modal-message-box/modal-message-box.component';
import { ModalPromptComponent } from './modal-prompt/modal-prompt.component';
import { ModalTemplateComponent } from './modal-template/modal-template.component';

interface ModalConfig {
  injector?: Injector;
  hasBackdrop?: boolean;
  contextual?: 'info' | 'success' | 'warning' | 'danger' | string;
}

export class ModalInstance<T, R = any> {
  constructor(
    public component: Type<T>,
    public config: ModalConfig = {},
  ) {
  }

  instance?: T;
  private init$$ = new ReplaySubject<T>(1);

  get init$(): Observable<T> {
    return this.init$$;
  }

  init(instance: T): void {
    this.instance = instance;
    this.init$$.next(instance);
  }

  get open$(): Observable<T> {
    return this.init$;
  }

  private result$$ = new ReplaySubject<R>(1);

  get result$(): Observable<R> {
    return this.result$$;
  }

  private close$$ = new Subject<this>();

  get close$(): Observable<this> {
    return this.close$$;
  }

  close(result?: R): void {
    this.close$$.next(this);
    if (result !== undefined) {
      this.result$$.next(result);
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private injector: Injector, @Inject(DOCUMENT) private document: Document) {
  }

  private _items: ReadonlyArray<ModalInstance<any>> = [];

  get items(): ReadonlyArray<ModalInstance<any>> {
    return this._items;
  }

  set items(value: ReadonlyArray<ModalInstance<any>>) {
    if (this._items !== value) {
      this._items = value;
      this.update();
    }
  }

  hasBackdrop = false;

  backdropClick(): void {
    this.items = [];
  }

  open<T>(componentType: Type<T>, config: ModalConfig = {}): ModalInstance<T> {
    const modal = new ModalInstance(
      componentType,
      Object.assign(config, {
        injector: Injector.create({
          providers: [
            { provide: ModalInstance, useFactory: () => modal },
          ],
          parent: config?.injector ?? this.injector,
        }),
      }),
    );
    this.items = this.items.concat(modal);
    modal.close$.subscribe(thisModal => {
      this.items = this.items.filter(it => it !== thisModal);
    });
    return modal;
  }

  popup<T>(componentType: Type<T>, config: ModalConfig = {}): ModalInstance<T> {
    return this.open(componentType, config);
  }

  message(message: string, title?: string, config: ModalConfig = {}): ModalInstance<ModalMessageBoxComponent> {
    const modal = this.open(ModalMessageBoxComponent, config);
    modal.init$.subscribe(it => {
      it.message = message;
      it.title = title;
    });
    return modal;
  }

  success(message: string, title: string = '成功', config: ModalConfig = {}): ModalInstance<ModalMessageBoxComponent> {
    return this.message(message, title, { contextual: 'success', ...config });
  }

  info(message: string, title: string = '信息', config: ModalConfig = {}): ModalInstance<ModalMessageBoxComponent> {
    return this.message(message, title, { contextual: 'info', ...config });
  }

  warning(message: string, title: string = '警告', config: ModalConfig = {}): ModalInstance<ModalMessageBoxComponent> {
    return this.message(message, title, { contextual: 'warning', ...config });
  }

  error(message: string, title: string = '错误', config: ModalConfig = {}): ModalInstance<ModalMessageBoxComponent> {
    return this.message(message, title, { contextual: 'danger', ...config });
  }

  confirm(message: string, title: string = '确认', config: ModalConfig = {}): ModalInstance<ModalConfirmComponent, boolean> {
    const modal = this.open(ModalConfirmComponent, { contextual: 'confirm', ...config });
    modal.init$.subscribe(it => {
      it.message = message;
      it.title = title;
    });
    return modal;
  }

  prompt(message: string, defaultValue?: string, title: string = '请输入', config: ModalConfig = {}): ModalInstance<ModalPromptComponent, string> {
    const modal = this.open(ModalPromptComponent, { contextual: 'confirm', ...config });
    modal.init$.subscribe(it => {
      it.message = message;
      it.title = title;
    });
    return modal;
  }

  template<T>(templateRef: TemplateRef<T>, config: ModalConfig = {}): ModalInstance<ModalTemplateComponent> {
    const modal = this.open(ModalTemplateComponent, config);
    modal.init$.subscribe(it => it.templateRef = templateRef);
    return modal;
  }

  private update(): void {
    if (this.items.length > 0) {
      this.document.body.classList.add('modal-open');
    } else {
      this.document.body.classList.remove('modal-open');
    }
    this.hasBackdrop = this.items.some(it => it.config?.hasBackdrop ?? true);
  }
}
