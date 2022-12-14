import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-password-form',
  templateUrl: './recover-password-form.component.html',
  styleUrls: ['./recover-password-form.component.scss']
})
export class RecoverPasswordFormComponent {

  public loginForm: FormGroup;
  match: boolean

  constructor(private formBuilder: FormBuilder, private userService: UserService, private storage: StorageService) {
    this.loginForm = this.createForm();
    this.match = false;
  }

  get name() { return this.loginForm.get('name'); }
  get password() { return this.loginForm.get('password'); }
  get newPassword() { return this.loginForm.get('newPassword') }

  ngOnInit(): void {
  }

  createForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      newPassword: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.loginForm.valid && (this.newPassword?.value == this.password?.value)) {
      var userData: User = { id: 0, email: '', username: '', password: '', dateBirth: new Date('') };;
      let data = this.userService.getAllUser();
      let formUser: User = { email: '', username: '', dateBirth: new Date(), password: '' }
      data.forEach(info => {
        for (let x = 0; x < info.length; x++) {
          if (info[x].username.toUpperCase() === this.name?.value.toUpperCase()) {
            userData = info[x];
            formUser = { username: btoa(this.name?.value), password: btoa(this.password?.value), dateBirth: userData.dateBirth, email: userData.email };
          }
        }
      })
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
          this.userService.putUser(formUser, userData.id!)
          Swal.fire(
            'Done!',
            'Your recover has been done correctly.',
            'success'
          ).then(function () {
            window.location.href = 'login';
          })
        }
      })
    } else {
      this.match = true;
      window.location.reload();
    }
  }
}