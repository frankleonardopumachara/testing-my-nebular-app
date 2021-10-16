import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardPage1Component} from './pages/dashboard-page1/dashboard-page1.component'
import {DashboardComponent} from './dashboard.component'

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: DashboardPage1Component
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
