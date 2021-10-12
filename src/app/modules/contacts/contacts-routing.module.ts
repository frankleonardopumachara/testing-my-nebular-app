import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ContactsComponent} from './contacts.component'
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component'

const routes: Routes = [
    {
        path: '',
        component: ContactsComponent,
        children: [
            {
                path: '',
                component: ContactsPageComponent
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
