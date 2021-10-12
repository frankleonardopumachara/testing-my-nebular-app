import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ContactsComponent} from './contacts.component'
import {CompaniesComponent} from './pages/companies/companies.component'

const routes: Routes = [
    {
        path: '',
        component: ContactsComponent,
        children: [
            {
                path: '',
                component: CompaniesComponent
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule {
}
