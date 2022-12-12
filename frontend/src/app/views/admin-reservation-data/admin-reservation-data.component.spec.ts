import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReservationDataComponent } from './admin-reservation-data.component';

describe('AdminReservationDataComponent', () => {
  let component: AdminReservationDataComponent;
  let fixture: ComponentFixture<AdminReservationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReservationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReservationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
