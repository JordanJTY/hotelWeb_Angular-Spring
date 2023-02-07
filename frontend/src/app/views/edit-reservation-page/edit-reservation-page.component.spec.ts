import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditOrderFormComponent } from 'src/app/components/edit-order-form/edit-order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { EditReservationPageComponent } from './edit-reservation-page.component';

describe('EditReservationPageComponent', () => {
  let component: EditReservationPageComponent;
  let fixture: ComponentFixture<EditReservationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, AppRoutingModule, MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ HeaderComponent, EditReservationPageComponent, EditOrderFormComponent ]
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
