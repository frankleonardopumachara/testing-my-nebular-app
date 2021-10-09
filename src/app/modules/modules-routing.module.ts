import {NgModule} from '@angular/core'
import { RouterModule, Routes} from '@angular/router'
import {ModulesComponent} from './modules.component'

const routes: Routes = [
    {
        path: 'dashboard', /* dashboard/dashboard */
        component: ModulesComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]

    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    // {
    //     path: 'forms',
    //     loadChildren: () => import('./forms/forms.module')
    //         .then(m => m.FormsModule),
    // },
    {
        path: '**',
        // component: NotFoundComponent,
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
