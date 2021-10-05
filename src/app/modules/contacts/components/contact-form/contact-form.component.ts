import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  model: Contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contacForm: NgForm): void {
    console.log(contacForm);
    console.log(this.model);
  }

}
