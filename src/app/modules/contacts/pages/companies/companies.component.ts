import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

    headerTableCompany: string[] = ['#', 'CÓDIGO', 'NOMBRE', 'ACCIONES']

    constructor() {
    }

    ngOnInit(): void {
    }

    search() {

    }

    openModal(){
        console.log('openModal')
    }
}
