import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxPermissionsModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule
      ],

      declarations: [ RegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should return form invalid', () => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.registerForm;
    const name = component.registerForm.controls['name']
    name.setValue('Jordancio');

    expect(form.invalid).toBeTruthy();
  });

  it('should return form valid', () => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.registerForm;
    const name = component.registerForm.controls['name']
    const email = component.registerForm.controls['email']
    const password = component.registerForm.controls['password']
    const dateBirth = component.registerForm.controls['dateBirth']
    name.setValue('Jordan Jared');
    email.setValue('xdwdawd@gmail.com')
    password.setValue('1234567');
    dateBirth.setValue(new Date('2003-03-02'));
    expect(form.valid).toBeTruthy();
  });
});
