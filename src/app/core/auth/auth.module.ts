import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AuthRoutingModule} from './auth-routing.module'
import {LayoutAuthComponent} from './pages/layout-auth/layout-auth.component'
import {LoginComponent} from './components/login/login.component'


@NgModule({
    declarations: [
        LayoutAuthComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule {
}
