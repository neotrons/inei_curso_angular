import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactPage } from './pages/contact/contact.page';


@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
