import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminEditApartmentPageComponent } from './admin-edit-apartment-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditApartmentFormComponent } from '../../components/edit-apartment-form/edit-apartment-form.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

describe('AdminEditApartmentPageComponent', () => {
  let component: AdminEditApartmentPageComponent;
  let fixture: ComponentFixture<AdminEditApartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule,MatCardModule, MatFormFieldModule, MatIconModule, MatDialogModule, AppRoutingModule, MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ EditApartmentFormComponent, AdminEditApartmentPageComponent, HeaderComponent]
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
