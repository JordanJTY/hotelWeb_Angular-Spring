import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [ ContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return form invalid', () => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.contactForm;
    const name = component.contactForm.controls['name']
    const email = component.contactForm.controls['email']
    const message = component.contactForm.controls['message']
    name.setValue('Sergio');
    email.setValue('sergiojordan');
    message.setValue('Un buen mensaje');

    expect(form.invalid).toBeTruthy();
  });

  it('should return form valid', () => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.contactForm;
    const name = component.contactForm.controls['name']
    const email = component.contactForm.controls['email']
    const message = component.contactForm.controls['message']
    name.setValue('Sergio Tejera');
    email.setValue('sergiojordan@gmail.com');
    message.setValue('Un buen mensaje');
    expect(form.valid).toBeTruthy();
  });
});
