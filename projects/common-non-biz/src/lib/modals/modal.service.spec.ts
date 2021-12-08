import { CommonModule } from '@angular/common';
import { TestBed, TestBedStatic } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalMessageBoxComponent } from './modal-message-box/modal-message-box.component';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  function createTestBed(): TestBedStatic {
    return TestBed.configureTestingModule({
      declarations: [
        ModalContainerComponent,
      ],
      imports: [
        CommonModule,
      ],
      providers: [
        ModalService,
      ],
    });
  }

  function createService(): ModalService {
    return TestBed.inject(ModalService);
  }

  it('should be created', () => {
    createTestBed();
    expect(TestBed.inject(ModalService)).toBeTruthy();
  });

  it('info', (done) => {
    const testBed = createTestBed();
    const service = createService();
    const modal = service.message('message', 'title');
    modal.init$.subscribe((it) => {
      expect(it.title).toEqual('title');
      expect(it.message).toEqual('message');
      done();
    });
    const fixture = testBed.createComponent(ModalContainerComponent);
    fixture.detectChanges();
    const info = fixture.debugElement.query(By.directive(ModalMessageBoxComponent));
    expect(info).toBeTruthy();
  });
});
