import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCenterDropdownMenuComponent } from './user-center-dropdown-menu.component';

describe('UserCenterDropdownComponent', () => {
  let component: UserCenterDropdownMenuComponent;
  let fixture: ComponentFixture<UserCenterDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCenterDropdownMenuComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCenterDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
