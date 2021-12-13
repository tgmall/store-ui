import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityLayoutComponent } from './commodity-layout.component';

describe('CommodityLayoutComponent', () => {
  let component: CommodityLayoutComponent;
  let fixture: ComponentFixture<CommodityLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommodityLayoutComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
