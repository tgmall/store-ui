import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBizComponent } from './common-biz.component';

describe('CommonBizComponent', () => {
  let component: CommonBizComponent;
  let fixture: ComponentFixture<CommonBizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonBizComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
