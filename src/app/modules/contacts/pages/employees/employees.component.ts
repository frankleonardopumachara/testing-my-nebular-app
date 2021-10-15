import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
import {ModalEmployComponent} from '../../components/modal-employ/modal-employ.component'
import {EmployFrontService} from '../../servicesFront/employ-front.service'
import {Employ} from '../../models/employ'

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
    employs: Employ[] = []
    loading = true


    constructor(private dialogService: NbDialogService,
                private employFrontService: EmployFrontService) {
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
