import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminAddApartmentPageComponent } from './admin-add-apartment-page.component';
import { AddApartmentFormComponent } from '../../components/add-apartment-form/add-apartment-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('AdminAddApartmentPageComponent', () => {
  let component: AdminAddApartmentPageComponent;
  let fixture: ComponentFixture<AdminAddApartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule,  MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ AdminAddApartmentPageComponent, AddApartmentFormComponent, HeaderComponent]
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
