import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
// import {ContactsComponent} from './contacts.component'
// import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component'
// import * as path from 'path'
import {CompaniesComponent} from './pages/companies/companies.component'
import {NaturalContactsComponent} from './pages/natural-contacts/natural-contacts.component'
import {EmployeesComponent} from './pages/employees/employees.component'

const routes: Routes = [
    {
        // path: '',
        // component: ContactsComponent,
        // children: [
        //     {
        //         path: '',
        //         component: ContactsPageComponent
        //     }
        // ]
        path: 'empresa',
        component: CompaniesComponent,
    },
    {
        path: 'employees',
        component: EmployeesComponent,
    },
    {
        path: 'contact',
        component: NaturalContactsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule {
}
