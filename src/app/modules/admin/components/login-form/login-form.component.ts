import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../interfaces/login';
import { LoginApiService } from '../../services/login-api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form!: FormGroup;
  error = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginApiService
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
    this.error = "";
    if (this.form.valid) {
      const login: Login = this.form.value;
      this.loginService.auth(login).subscribe(
        res => {
          this.router.navigate(['/admin'])
        },
        err => {
          console.log(err);
          this.error = "usuario y password incorrectos";
        }
      )
    }else {
      this.error = "usuario y password incorrectos";
    }
  }
}
