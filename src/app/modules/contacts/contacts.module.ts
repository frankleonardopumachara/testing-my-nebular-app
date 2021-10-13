import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ContactsRoutingModule} from './contacts-routing.module'
import {CompaniesComponent} from './pages/companies/companies.component'
import {ContactsComponent} from './contacts.component'
import {
    NbButtonModule,
    NbCardModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule,
    NbIconModule,
    NbInputModule, NbSelectModule,
    NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme'
import {TableComponent} from './components/table/table.component'
import {NaturalContactsComponent} from './pages/natural-contacts/natural-contacts.component'
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component'
import {ModalContactComponent} from './components/modal-contact/modal-contact.component';
import { ModalCompanyComponent } from './components/modal-company/modal-company.component'


@NgModule({
    declarations: [
        CompaniesComponent,
        ContactsComponent,
        TableComponent,
        NaturalContactsComponent,
        ContactsPageComponent,
        ModalContactComponent,
        ModalCompanyComponent
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
        NbDatepickerModule
    ]
})
export class ContactsModule {
}
