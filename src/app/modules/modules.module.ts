import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ModulesRoutingModule} from './modules-routing.module'
import {ModulesComponent} from './modules.component'
import {NbLayoutModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService} from '@nebular/theme'
import {CoreModule} from '../core/core.module'


@NgModule({
    declarations: [
        ModulesComponent
    ],
    imports: [
        CommonModule,
        ModulesRoutingModule,
        NbLayoutModule,
        CoreModule,
        NbSidebarModule,
        NbMenuModule
    ],
    providers: [NbSidebarService, NbMenuService]
})
export class ModulesModule {
}
