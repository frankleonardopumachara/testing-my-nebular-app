import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {HeaderModalComponent} from './components/header-modal/header-modal.component'
import {NbButtonModule, NbIconModule} from '@nebular/theme';
import { FooterModalComponent } from './components/footer-modal/footer-modal.component'


@NgModule({
    declarations: [
        NotFoundComponent,
        HeaderModalComponent,
        FooterModalComponent
    ],
    imports: [
        CommonModule,
        NbIconModule,
        NbButtonModule
    ],
    exports: [
        HeaderModalComponent,
        FooterModalComponent
    ]
})
export class SharedModule {
}
