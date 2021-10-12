import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-natural-contacts',
    templateUrl: './natural-contacts.component.html',
    styleUrls: ['./natural-contacts.component.scss']
})
export class NaturalContactsComponent implements OnInit {
    headerTableContacts: string[] = ['#', 'CÓDIGO DE CONTACTO', 'NOMBRE', 'ACCIONES']

    constructor() {
    }

    ngOnInit(): void {
    }

    search(): void {

    }

}
