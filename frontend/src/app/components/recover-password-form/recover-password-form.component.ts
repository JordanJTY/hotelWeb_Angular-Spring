import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password-form',
  templateUrl: './recover-password-form.component.html',
  styleUrls: ['./recover-password-form.component.scss']
})
export class RecoverPasswordFormComponent {

  public loginForm: FormGroup;
  match: boolean

  constructor(private formBuilder: FormBuilder) {
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
    if (this.loginForm.valid && this.newPassword?.value == this.password?.value) {
      // Swal.fire('Proceso terminado. Gracias por contactar con nosotros.').then(respuesta => {
      window.location.href = 'login';
      // });
    } else {
      // Swal.fire('Debe rellenar todos los campos.').then(respuesta => {
      // });
      this.match = true;
    }
  }
}