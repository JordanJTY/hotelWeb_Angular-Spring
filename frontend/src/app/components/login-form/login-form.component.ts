import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxPermissionsService } from 'ngx-permissions';
import { LoginUser } from 'src/app/shared/models/login-user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm: FormGroup;
  private login: LoginUser;
  isLogin = false;
  roleAs: string = "";

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private storage: StorageService, private permissionsService: NgxPermissionsService) {
    this.loginForm = this.createForm();
    this.login = { username: '', password: '' }
  }

  get name() { return this.loginForm.get('name'); }
  get password() { return this.loginForm.get('password'); }

  createForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }
  ngOnInit(): void {
    // this.updateAuthInfo();
    if (this.storage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  goRegister() {
    window.location.href = 'register';
  }

  updateAuthInfo() {
    this.isLogin = this.auth.isLoggedIn();
    this.roleAs = this.auth.getRole();
  }

  submit() {
    if (this.loginForm.valid) {
      this.login = { username: btoa(this.name?.value), password: btoa(this.password?.value) }
      this.auth.login(this.login).subscribe(
        data => {
          this.storage.saveToken(data.accessToken);
          this.storage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storage.getUser().roles;
          const perm: any[] = [this.roles];
          this.permissionsService.loadPermissions(perm);
          switch (this.roles.toString()) {
            case 'ROLE_ADMIN': {
              window.location.href = 'admin-home';
              break;
            }
            case 'ROLE_USER': {
              window.location.href = 'home';
              break;
            }
          }
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
  }
}

