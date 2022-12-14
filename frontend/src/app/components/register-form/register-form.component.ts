import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  public registerForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  checker: boolean = false
  checkboxChecker: boolean = false;
  boxChecker: boolean = false;
  constructor(private auth: AuthService) {
    this.registerForm = this.createForm();
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get dateBirth() { return this.registerForm.get('dateBirth'); }


  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      dateBirth: new FormControl('', [Validators.required])
    });
  }

  checkbox() {
    if (this.checkboxChecker) {
      this.checkboxChecker = false;
    } else {
      this.checkboxChecker = true;
    }
  }

  compareDate(date: Date) {
    var dateOfBirth = new Date(date);
    // calculate difference between now and the dateOfBirth (in milliseconds)
    var differenceMs = Date.now() - dateOfBirth.getTime();
    // convert the calculated difference in date format
    var dateFromEpoch = new Date(differenceMs);
    // extract year from dateFromEpoch
    var yearFromEpoch = dateFromEpoch.getUTCFullYear();
    // calculate the age of the user
    var age = Math.abs(yearFromEpoch - 1970);
    if (age < 18 || age > 120) {
      this.checker = true;
    } else {
      this.checker = false;
    }

  };

  submit() {
    if (this.registerForm.valid && !this.checker && this.boxChecker) {
      this.boxChecker = false;
      const formUser: User = { username: btoa(this.name?.value), password: btoa(this.password?.value), dateBirth: this.dateBirth?.value, email: this.email?.value };
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DAD2BC',
        cancelButtonColor: '#69747C',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.auth.register(formUser);
          Swal.fire(
            'Done!',
            'Your register has been done correctly.',
            'success'
          ).then(function () {
            window.location.href = 'login';
          })
        }
      })
    } else {
      this.boxChecker = true;
    }
  }
}