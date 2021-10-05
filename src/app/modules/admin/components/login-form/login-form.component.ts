import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form!: FormGroup;
  error = "";

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]]
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const login: Login = this.form.value;
    }else {
      this.error = "usuario y password incorrectos"
    }
  }
}
