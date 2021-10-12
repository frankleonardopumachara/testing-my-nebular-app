import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import {ModalContactComponent} from '../../components/modal-contact/modal-contact.component'

@Component({
    selector: 'app-natural-contacts',
    templateUrl: './natural-contacts.component.html',
    styleUrls: ['./natural-contacts.component.scss'],
    providers: [NbDialogService]
})
export class NaturalContactsComponent implements OnInit {
    headerTableContacts: string[] = ['#', 'CÓDIGO DE CONTACTO', 'NOMBRE', 'ACCIONES']

    constructor(private dialogService: NbDialogService) {

    }

    ngOnInit(): void {
    }

    search(): void {

    }

    openModal(): void {
        this.dialogService.open(ModalContactComponent, {
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

}
