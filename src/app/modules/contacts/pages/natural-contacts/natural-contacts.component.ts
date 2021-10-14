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
        'NOMBRE',
        // 'DOCUMENTO',
        'EMPRESA',
        // 'PÁGINA WEB',
        'CORREOS',
        'DESCUENTO',
        // 'TELEFONOS',
        'UBICACIÓN',
        'ACCIONES'
    ]

    fields = [
        'fullName',
        // 'documentID',
        'empresa',
        // 'paginaWeb',
        'correos',
        'descuentoVenta',
        // 'telefonoMovil',
        'location'
    ]
    contacts: Contact[] = []

    constructor(private dialogService: NbDialogService,
                public contactFront: ContactFrontService) {
    }

    ngOnInit(): void {
        // this.contacts = this.contactFront.getContacts()
        // console.log(this.contacts)
        this.contactFront.getContacts().subscribe(
            (response) => {
                this.contacts = response
            }, (err) => {
                console.log(err)
            }
        )
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
