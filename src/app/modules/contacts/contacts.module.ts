import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ContactsComponent } from './contacts.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbTabsetModule, NbTooltipModule} from '@nebular/theme'
import { TableComponent } from './components/table/table.component'


@NgModule({
  declarations: [
    CompaniesComponent,
    ContactsComponent,
    TableComponent
  ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        NbCardModule,
        NbTabsetModule,
        NbTooltipModule,
        NbButtonModule,
        NbIconModule
    ]
})
export class ContactsModule { }
