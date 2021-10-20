import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ModulesComponent} from './modules.component'

const routes: Routes = [
    {
        path: '', /* dashboard/dashboard */
        component: ModulesComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'contacts',
                loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            // {
            //     path: '**',
            //     component: NotFoundComponent,
            // },
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
