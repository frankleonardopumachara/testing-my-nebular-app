import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HomeRoutingModule} from './home-routing.module'
import {LayoutComponent} from './pages/layout/layout.component'
import {NbLayoutModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService} from '@nebular/theme'
import {CoreModule} from '../../core/core.module'
import {PageComponent} from './pages/page/page.component'


@NgModule({
    declarations: [
        LayoutComponent,
        PageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NbLayoutModule,
        CoreModule,
        NbSidebarModule,
        NbMenuModule
    ],
    providers: [NbSidebarService, NbMenuService]
})
export class HomeModule {
}
