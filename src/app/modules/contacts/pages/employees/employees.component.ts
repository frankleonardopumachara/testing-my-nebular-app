import {Component, OnInit} from '@angular/core'
import {NbDialogService} from "@nebular/theme";
import {ModalEmployComponent} from "../../components/modal-employ/modal-employ.component";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    headerTableEmployees: string[] = ['#', 'CÓDIGO', 'NOMBRE', 'ACCIONES']


    constructor(private dialogService: NbDialogService) {
    }

    ngOnInit(): void {
    }


    search() {
    }

    openModal(): void {
        this.dialogService.open(ModalEmployComponent, {
            closeOnBackdropClick: false,
            context: {
                title: 'Agregar empleado',
            },
        })
    }
}
