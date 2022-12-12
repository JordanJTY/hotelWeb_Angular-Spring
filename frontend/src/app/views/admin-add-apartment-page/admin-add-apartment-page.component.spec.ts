import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddApartmentPageComponent } from './admin-add-apartment-page.component';

describe('AdminAddApartmentPageComponent', () => {
  let component: AdminAddApartmentPageComponent;
  let fixture: ComponentFixture<AdminAddApartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddApartmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddApartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
