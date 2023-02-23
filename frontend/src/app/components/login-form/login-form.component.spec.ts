import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPermissionsModule } from 'ngx-permissions';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule, MatCardModule, MatSlideToggleModule, NgxPermissionsModule.forRoot()],
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return form invalid', () => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.loginForm;
    const name = component.loginForm.controls['name']
    name.setValue('Jordancio');

    expect(form.invalid).toBeTruthy();
  });

  it('should return form valid', () => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.loginForm;
    const name = component.loginForm.controls['name']
    const password = component.loginForm.controls['password']
    name.setValue('Jordan Jared');
    password.setValue('1234567');
    expect(form.valid).toBeTruthy();
  });
});
