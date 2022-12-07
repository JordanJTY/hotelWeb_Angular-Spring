import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';

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
      let data = this.userService.getAllUser()
      data.forEach(info => {
        for (let x = 0; x < info.length; x++) {
          if (info[x].username.toUpperCase() === this.name?.value.toUpperCase()) {
            console.log('he llegado')
            userData = info[x];
            const formUser: User = { username: btoa(this.name?.value), password: btoa(this.password?.value), dateBirth: userData.dateBirth, email: userData.email };
            this.userService.putUser(formUser, userData.id!)
            window.location.href = 'login';
          }
        }
      })
    } else {
      this.match = true;
      window.location.reload();
    }
  }
}