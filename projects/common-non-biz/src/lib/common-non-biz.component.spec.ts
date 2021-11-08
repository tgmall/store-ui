import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNonBizComponent } from './common-non-biz.component';

describe('CommonNonBizComponent', () => {
  let component: CommonNonBizComponent;
  let fixture: ComponentFixture<CommonNonBizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonNonBizComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNonBizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
