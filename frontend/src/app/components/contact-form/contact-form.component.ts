import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public contactForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  private usernamePattern: any = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createForm();
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  ngOnInit(): void {
  }

  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.usernamePattern)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(150)])
    });
  }

  submit() {
    if (this.contactForm.valid) {
      Swal.fire({ title: 'Thank you for contacting us.', icon: 'success' }).then(() => {
        window.location.reload();
      });
    }
  }
}