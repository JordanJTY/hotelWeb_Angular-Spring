import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminReservationDataComponent } from './admin-reservation-data.component';
import { ReservationDetailsComponent } from '../../components/reservation-details/reservation-details.component';

describe('AdminReservationDataComponent', () => {
  let component: AdminReservationDataComponent;
  let fixture: ComponentFixture<AdminReservationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, AppRoutingModule, MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ AdminReservationDataComponent, HeaderComponent, ReservationDetailsComponent ]
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
