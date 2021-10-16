import {Component, OnInit} from '@angular/core'
import {NbMenuItem} from '@nebular/theme'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    menu: NbMenuItem[] = [
        {
            title: 'DASHBOARD',
            icon: 'pie-chart-outline'
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
