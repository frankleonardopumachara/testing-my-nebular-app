import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
/** propio */
import {ModalEmployComponent} from '../../components/modal-employ/modal-employ.component'
import {EmployeeService} from '../../../../core/services/contacts/employee.service'
import {Employee} from '../../../../core/models/employee'
import {Observable, of} from 'rxjs'
import {delay, map} from 'rxjs/operators'

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
    employees: Employee[] = []
    employees$: Observable<Employee[]> = of([])
    loading = true


    constructor(private dialogService: NbDialogService,
                private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.getData()
    }

    refreshTable(): void {
       this.getData()
    }

    getData(): void {
        this.employees$ = this.employeeService.getEmploys()
            .pipe(
                delay(3000),
                map( (x: any) => x())
            )
        this.employees = []
        this.loading = true
        this.employeeService.getEmploys().subscribe(
            (resp) => {
                this.employees = resp
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


