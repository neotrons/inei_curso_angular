import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactPage } from './pages/contact/contact.page';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SuggestionFormComponent } from './components/suggestion-form/suggestion-form.component';


@NgModule({
  declarations: [
    ContactPage,
    ContactFormComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContactsModule { }
