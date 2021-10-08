import {Component, OnInit} from '@angular/core'
import {NbMenuItem} from '@nebular/theme'


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    providers: []
})
export class LayoutComponent implements OnInit {

    menu: NbMenuItem[] = [
        {
            title: 'CONFIGURACIÓN',
            icon: '',
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
            icon: '',
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
                    title: 'Administración'
                }
            ]
        }
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
