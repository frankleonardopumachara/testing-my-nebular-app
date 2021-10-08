import {NgModule} from '@angular/core'

import {Routes, RouterModule} from '@angular/router'

const routes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'pages'
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
