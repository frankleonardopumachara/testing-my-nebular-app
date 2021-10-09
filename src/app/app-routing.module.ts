import {NgModule} from '@angular/core'
import {Routes, RouterModule, PreloadAllModules} from '@angular/router'

const routes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
        data: {
            load: true
        }
    },
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'pages'
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            {
                enableTracing: true,
                preloadingStrategy: PreloadAllModules
            })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
