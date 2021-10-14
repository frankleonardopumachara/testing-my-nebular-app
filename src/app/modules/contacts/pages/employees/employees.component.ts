import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    headerTableEmployees: string[] = ['#', 'CÓDIGO', 'NOMBRE', 'ACCIONES']


    constructor() {
    }

    ngOnInit(): void {
    }


    search() {
    }

    openModal() {

    }

}
