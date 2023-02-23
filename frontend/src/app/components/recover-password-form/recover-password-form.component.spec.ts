import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RecoverPasswordFormComponent } from './recover-password-form.component';

describe('RecoverPasswordFormComponent', () => {
  let component: RecoverPasswordFormComponent;
  let fixture: ComponentFixture<RecoverPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule, MatCardModule, MatSlideToggleModule, NgxPermissionsModule.forRoot()],
      declarations: [ RecoverPasswordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
