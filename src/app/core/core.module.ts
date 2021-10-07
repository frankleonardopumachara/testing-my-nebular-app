import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SidebarComponent} from './sidebar/sidebar.component'
import {HeaderComponent} from './header/header.component'
import {
    NbActionsModule,
    NbContextMenuModule,
    NbIconModule,
    NbSearchModule,
    NbSelectModule, NbSidebarModule,
    NbUserModule
} from '@nebular/theme'

@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        NbSelectModule,
        NbIconModule,
        NbActionsModule,
        NbSearchModule,
        NbUserModule,
        NbContextMenuModule,
        NbSidebarModule
    ], providers: []
})
export class CoreModule {
}
