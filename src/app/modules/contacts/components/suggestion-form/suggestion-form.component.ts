import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.scss']
})
export class SuggestionFormComponent implements OnInit {

  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required])
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.valid);
    console.log(this.form.value);
    console.log(this.form);
  }

}
