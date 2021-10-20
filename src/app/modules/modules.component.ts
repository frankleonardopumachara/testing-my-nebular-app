import {Component} from '@angular/core'
import {NbMenuItem} from '@nebular/theme'

@Component({
    selector: 'app-modules',
    template: `
        <nb-layout>
            <nb-layout-header fixed>
                <!-- Insert header here -->
                <app-header></app-header>
            </nb-layout-header>

            <!-- sidebar -->
            <!--                        <app-sidebar></app-sidebar>-->
            <nb-sidebar class="menu-sidebar"
                        tag="menu-sidebar" responsive>
                <ng-content select="nb-menu"></ng-content>
                <nb-menu [items]="menu" [autoCollapse]="true"></nb-menu>
            </nb-sidebar>
            <!-- end sidebar -->

            <nb-layout-column>
                <router-outlet></router-outlet>
            </nb-layout-column>
        </nb-layout>
    `,
    styleUrls: ['./modules.component.scss']
})
export class ModulesComponent {
    menu: NbMenuItem[] = [
        {
            title: 'DASHBOARD',
            icon: 'pie-chart-outline',
            link: '/pages/dashboard'
        },
        {
            title: 'CONTACTOS',
            icon: 'person-done-outline',
            // link: '/pages/contacts',
            children: [
                {
                    title: 'EMPRESA',
                    icon: 'shopping-bag-outline',
                    link: '/pages/contacts/empresa'
                },
                {
                    title: 'EMPLEADOS',
                    icon: 'shopping-bag-outline',
                    link: '/pages/contacts/employees'
                },
                {
                    title: 'CONTACTOS',
                    icon: 'shopping-bag-outline',
                    link: '/pages/contacts/contact'
                }

            ]
        },
        {
            title: 'CONFIGURACIÓN',
            icon: 'settings-2-outline',
            children: [
                {
                    title: 'MAESTROS',
                },
                {
                    title: 'EMPRESA'
                }
            ]
        },
        {
            title: 'ALMACEN',
            icon: 'shopping-bag-outline',
            children: [
                {
                    title: 'ALMACENES'
                },
                {
                    title: 'PRODUCTOS'
                },
                {
                    title: 'PROVEEDORES'
                },
                {
                    title: 'INGRESO MERCADERIA',
                    children: [
                        {
                            title: 'ORDEN COMPRA',
                        },
                        {
                            title: 'INGRESO ALMACEN'
                        }
                    ]
                },
                {
                    title: 'Administración',
                    children: [
                        {
                            title: 'Ajuste de inventario'
                        }
                    ]
                }
            ]
        },
        {
            title: 'INGRESOS',
            icon: 'activity-outline',
            children: [
                {
                    title: 'CLIENTES'
                },
                {
                    title: 'COTIZACIONES'
                },
                {
                    title: 'PRODUCTOS'
                },
                {
                    title: 'FACTURACIÓN',
                    children: [
                        {
                            title: 'Registro ventas'
                        }
                    ]
                }
            ]
        },
        {
            title: 'USUARIOS',
            icon: 'people-outline',
            children: [
                {
                    title: 'REGISTRO DE USUARIOS',
                },
                {
                    title: 'NIVELES DE ACCESO'
                }
            ]
        }
    ]


    constructor() {
    }

    ngOnInit(): void {
    }

}
