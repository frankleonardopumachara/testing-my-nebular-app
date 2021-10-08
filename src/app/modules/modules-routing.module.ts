import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ModulesComponent} from './modules.component'

const routes: Routes = [
    {
        path: 'dashboard',
        component: ModulesComponent,
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '**',
        // component: NotFoundComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
