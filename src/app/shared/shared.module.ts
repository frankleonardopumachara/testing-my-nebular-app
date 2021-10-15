import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {HeaderModalComponent} from './components/header-modal/header-modal.component'
import {NbIconModule} from '@nebular/theme'


@NgModule({
    declarations: [
        NotFoundComponent,
        HeaderModalComponent
    ],
    imports: [
        CommonModule,
        NbIconModule
    ],
    exports: [
        HeaderModalComponent
    ]
})
export class SharedModule {
}
