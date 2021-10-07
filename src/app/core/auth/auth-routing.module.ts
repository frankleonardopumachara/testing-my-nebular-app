import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LayoutAuthComponent} from './pages/layout-auth/layout-auth.component'
import {NotFoundComponent} from '../../shared/components/not-found/not-found.component'
import {SharedModule} from '../../shared/shared.module'
import {LoginComponent} from './components/login/login.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutAuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            // {
            //     path: 'iot-dashboard',
            //     component: DashboardComponent,
            // },
            // {
            //     path: 'layout',
            //     loadChildren: () => import('./layout/layout.module')
            //         .then(m => m.LayoutModule),
            // },
            // {
            //     path: 'forms',
            //     loadChildren: () => import('./forms/forms.module')
            //         .then(m => m.FormsModule),
            // },
            // {
            //     path: 'ui-features',
            //     loadChildren: () => import('./ui-features/ui-features.module')
            //         .then(m => m.UiFeaturesModule),
            // },
            // {
            //     path: 'modal-overlays',
            //     loadChildren: () => import('./modal-overlays/modal-overlays.module')
            //         .then(m => m.ModalOverlaysModule),
            // },
            // {
            //     path: 'extra-components',
            //     loadChildren: () => import('./extra-components/extra-components.module')
            //         .then(m => m.ExtraComponentsModule),
            // },
            // {
            //     path: 'maps',
            //     loadChildren: () => import('./maps/maps.module')
            //         .then(m => m.MapsModule),
            // },
            // {
            //     path: 'charts',
            //     loadChildren: () => import('./charts/charts.module')
            //         .then(m => m.ChartsModule),
            // },
            // {
            //     path: 'editors',
            //     loadChildren: () => import('./editors/editors.module')
            //         .then(m => m.EditorsModule),
            // },
            // {
            //     path: 'tables',
            //     loadChildren: () => import('./tables/tables.module')
            //         .then(m => m.TablesModule),
            // },
            // {
            //     path: 'miscellaneous',
            //     loadChildren: () => import('./miscellaneous/miscellaneous.module')
            //         .then(m => m.MiscellaneousModule),
            // },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ],
    },
    {
        path: '**', redirectTo: ''
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
