import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ContactsRoutingModule} from './contacts-routing.module'
import {CompaniesComponent} from './pages/companies/companies.component'
import {ContactsComponent} from './contacts.component'
import {
    NbButtonModule,
    NbCardModule, NbDatepickerModule, NbFormFieldModule,
    NbIconModule,
    NbInputModule, NbSelectModule, NbSpinnerModule,
    NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme'
import {TableComponent} from './components/table/table.component'
import {NaturalContactsComponent} from './pages/natural-contacts/natural-contacts.component'
import {ModalContactComponent} from './components/modal-contact/modal-contact.component'
import {ModalCompanyComponent} from './components/modal-company/modal-company.component'
import {EmployeesComponent} from './pages/employees/employees.component'
import {ModalEmployComponent} from './components/modal-employ/modal-employ.component'
import {SharedModule} from '../../shared/shared.module'


@NgModule({
    declarations: [
        CompaniesComponent,
        ContactsComponent,
        TableComponent,
        NaturalContactsComponent,
        ModalContactComponent,
        ModalCompanyComponent,
        EmployeesComponent,
        ModalEmployComponent,
    ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        NbCardModule,
        NbTabsetModule,
        NbTooltipModule,
        NbButtonModule,
        NbIconModule,
        NbInputModule,
        NbFormFieldModule,
        NbSelectModule,
        NbDatepickerModule,
        NbSpinnerModule,
        SharedModule
    ]
})
export class ContactsModule {
}
