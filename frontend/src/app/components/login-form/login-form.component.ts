import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.createForm();
  }

  get name() { return this.loginForm.get('name'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
  }

  createForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  submit() {
    if (this.loginForm.valid) {
      // Swal.fire('Proceso terminado. Gracias por contactar con nosotros.').then(respuesta => {
      window.location.reload();
      // });
    } else {
      // Swal.fire('Debe rellenar todos los campos.').then(respuesta => {
      // });
    }
  }
}

