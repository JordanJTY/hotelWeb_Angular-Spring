import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReservationCardComponent } from 'src/app/components/reservation-card/reservation-card.component';

import { ReservationsPageComponent } from './reservations-page.component';

describe('ReservationsPageComponent', () => {
  let component: ReservationsPageComponent;
  let fixture: ComponentFixture<ReservationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, AppRoutingModule, MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ ReservationsPageComponent, HeaderComponent, ReservationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
