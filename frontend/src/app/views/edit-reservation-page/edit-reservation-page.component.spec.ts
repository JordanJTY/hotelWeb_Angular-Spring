import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReservationPageComponent } from './edit-reservation-page.component';

describe('EditReservationPageComponent', () => {
  let component: EditReservationPageComponent;
  let fixture: ComponentFixture<EditReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReservationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
