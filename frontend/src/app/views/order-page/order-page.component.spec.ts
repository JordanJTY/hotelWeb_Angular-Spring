import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';

import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { OrderPageComponent } from './order-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AppComponent } from 'src/app/app.component';

describe('OrderPageComponent', () => {
  let component: OrderPageComponent;
  let fixture: ComponentFixture<OrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule,AppRoutingModule, BrowserModule, MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ OrderPageComponent, HeaderComponent, ReservationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
