import {ModuleWithProviders, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AuthRoutingModule} from './auth-routing.module'
import {LayoutAuthComponent} from './pages/layout-auth/layout-auth.component'
import {LoginComponent} from './components/login/login.component'
import {
    NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule, NbIconModule,
    NbInputModule,
    NbLayoutModule
} from '@nebular/theme'
import {NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy} from '@nebular/auth'
import {FormsModule} from '@angular/forms'
import {PasswordRecoverComponent} from './components/password-recover/password-recover.component'
import {HttpClientModule} from '@angular/common/http'
import {environment} from '../../../environments/environment'

@NgModule({
    declarations: [
        LayoutAuthComponent,
        LoginComponent,
        PasswordRecoverComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,

        AuthRoutingModule,

        NbAlertModule,
        NbAuthModule,
        NbInputModule,
        NbCheckboxModule,
        NbButtonModule,
        NbLayoutModule,
        NbCardModule,
        NbIconModule,

        NbAuthModule
    ]
})
export class AuthModule {
}
