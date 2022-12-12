import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReservationsComponent } from './admin-reservations.component';

describe('AdminReservationsComponent', () => {
  let component: AdminReservationsComponent;
  let fixture: ComponentFixture<AdminReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
