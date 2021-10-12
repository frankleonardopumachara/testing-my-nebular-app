import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ContactsComponent } from './contacts.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
