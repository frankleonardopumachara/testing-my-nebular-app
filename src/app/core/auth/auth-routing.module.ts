import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LayoutAuthComponent} from './pages/layout-auth/layout-auth.component'
import {NotFoundComponent} from '../../shared/components/not-found/not-found.component'
import {SharedModule} from '../../shared/shared.module'
import {LoginComponent} from './components/login/login.component'
import {PasswordRecoverComponent} from './components/password-recover/password-recover.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutAuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'request-password',
                component: PasswordRecoverComponent
            },
            {
                path: '',
                redirectTo: 'login',
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
