import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ContactsRoutingModule} from './contacts-routing.module'
import {CompaniesComponent} from './pages/companies/companies.component'
import {ContactsComponent} from './contacts.component'
import {
    NbButtonModule,
    NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule,
    NbIconModule,
    NbInputModule, NbSelectModule, NbSpinnerModule,
    NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme'
import {TableComponent} from './components/table/table.component'
import {NaturalContactsComponent} from './pages/natural-contacts/natural-contacts.component'
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component'
import {ModalContactComponent} from './components/modal-contact/modal-contact.component';
import { ModalCompanyComponent } from './components/modal-company/modal-company.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ModalEmployComponent } from './components/modal-employ/modal-employ.component';
import { HeaderModalComponent } from './components/header-modal/header-modal.component'


@NgModule({
    declarations: [
        CompaniesComponent,
        ContactsComponent,
        TableComponent,
        NaturalContactsComponent,
        ContactsPageComponent,
        ModalContactComponent,
        ModalCompanyComponent,
        EmployeesComponent,
        ModalEmployComponent,
        HeaderModalComponent
    ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        // ,

        NbCardModule,
        NbTabsetModule,
        NbTooltipModule,
        NbButtonModule,
        NbIconModule,
        NbInputModule,
        NbFormFieldModule,
        NbSelectModule,
        NbDatepickerModule,
        NbSpinnerModule
    ]
})
export class ContactsModule {
}
