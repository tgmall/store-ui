import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityItemComponent } from './commodity-item.component';

describe('CommodityItemComponent', () => {
  let component: CommodityItemComponent;
  let fixture: ComponentFixture<CommodityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommodityItemComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
