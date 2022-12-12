import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditApartmentPageComponent } from './admin-edit-apartment-page.component';

describe('AdminEditApartmentPageComponent', () => {
  let component: AdminEditApartmentPageComponent;
  let fixture: ComponentFixture<AdminEditApartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditApartmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditApartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
