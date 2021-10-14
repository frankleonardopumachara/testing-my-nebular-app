import {Component, OnDestroy, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'

import {ModalContactComponent} from '../../components/modal-contact/modal-contact.component'
import {ContactFrontService} from '../../servicesFront/contact-front.service'
import {Contact} from '../../models/contact'

@Component({
    selector: 'app-natural-contacts',
    templateUrl: './natural-contacts.component.html',
    styleUrls: ['./natural-contacts.component.scss'],
    providers: [NbDialogService]
})
export class NaturalContactsComponent implements OnInit, OnDestroy {
    headerTableContacts: string[] = [
        '#',
        'Nombre',
        'NOMBRE',
        'ACCIONES'
    ]

    fields = [
        'fullName',
        'tipoDocumento',
        'nroDocumento',
        // 'tipoContacto',
        'nombreEmpresa',
        'paginaWeb',
        'correo1',
        'correo2',
        'descuentoVenta',
        'telefonoMovil',
        'idPais',
        'idDepartamento',
        'idProvincia',
        'idDistrito',
    ]
    contacts: Contact[] = []

    constructor(private dialogService: NbDialogService,
                public contactFront: ContactFrontService) {
    }

    ngOnInit(): void {
        // this.contacts = this.contactFront.getContacts()
        // console.log(this.contacts)
    }


    search(): void {

    }

    openModal(): void {
        this.dialogService.open(ModalContactComponent, {
            closeOnBackdropClick: false,
            context: {
                title: 'Agregar contacto',
            },
        })
        // modalRef.componentInstance.title = 'Agregar contacto'
        // modalRef.result.then((result) => {
        //     if (result === 'update') {
        //         console.log('update')
        //     } else if (result === 'add') {
        //         console.log('add')
        //     }
        // }, () => {
        // })
    }

    ngOnDestroy(): void {
        // this.contactFront.closeSubscription()
    }


}
