import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NbThemeModule, NbLayoutModule, NbMenuModule} from '@nebular/theme'
import {NbEvaIconsModule} from '@nebular/eva-icons'
import {AppRoutingModule} from './app-routing.module'
import {HttpClientModule} from '@angular/common/http'
import {NbAuthModule, NbDummyAuthStrategy} from '@nebular/auth'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'default'}),
        NbLayoutModule,
        NbEvaIconsModule,
        AppRoutingModule,
        NbMenuModule.forRoot(),
        HttpClientModule,
        NbAuthModule.forRoot({
            strategies: [
                NbDummyAuthStrategy.setup({
                    name: 'email',
                    delay: 3000,
                }),
                // NbPasswordAuthStrategy.setup({
                //     name: 'email1',
                //     baseEndpoint: 'https://example.com/app-api/v1',
                //     login: {
                //         redirect: {
                //             success: '/home/',
                //             failure: null
                //         },
                //         endpoint: '/api/auth/login'
                //     },
                //     register: {
                //         endpoint: '/api/auth/register'
                //     },
                //
                // }),
            ],
            forms: {
                login: {
                    redirectDelay: 0,
                    strategy: 'email',
                    rememberMe: true,
                    showMessages: {
                        success: true,
                        error: true,
                    },
                },
                register: {
                    redirectDelay: 0,
                    strategy: 'email',
                    rememberMe: true,
                    showMessages: {
                        success: true,
                        error: true,
                    },
                }
            }
        }),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
