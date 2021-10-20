import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
/** propio */
import {ModalEmployComponent} from '../../components/modal-employ/modal-employ.component'
import {EmployeeService} from '../../../../core/services/contacts/employee.service'
import {Employee} from '../../../../core/models/employee'

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    headerTableEmployees: string[] = ['#', 'EMPLEADO', 'EMPRESAS', 'CORREOS', 'TELEFONOS', 'ACCIONES']
    fields = [
        'employ',
        'empresas',
        'correos',
        'telefonos',
    ]
    employs: Employee[] = []
    loading = true


    constructor(private dialogService: NbDialogService,
                private employFrontService: EmployeeService) {
    }

    ngOnInit(): void {
        this.getData()
    }

    getData(): void {
        this.employs = []
        this.loading = true
        this.employFrontService.getEmploys().subscribe(
            (resp) => {
                this.employs = resp
                this.loading = false
            }, (err) => {
                this.loading = false
                console.log(err)
            }
        )
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
