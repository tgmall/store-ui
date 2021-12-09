import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMessageBoxComponent } from './modal-message-box.component';

describe('ModalMessageBoxComponent', () => {
  let component: ModalMessageBoxComponent;
  let fixture: ComponentFixture<ModalMessageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalMessageBoxComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
