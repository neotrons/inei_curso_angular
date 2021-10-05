import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactPage } from './pages/contact/contact.page';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactPage,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
  ]
})
export class ContactsModule { }
