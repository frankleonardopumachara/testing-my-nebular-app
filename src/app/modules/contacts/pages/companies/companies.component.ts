import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
import {ModalCompanyComponent} from '../../components/modal-company/modal-company.component'
import {Empresa} from '../../models/empresa'
import {EmpresaFrontService} from '../../servicesFront/empresa-front.service'

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

    headerTableCompany: string[] = [
        '#',
        'EMPRESA',
        'CORREOS',
        'TELEFONOS',
        'UBICACIÓN',
        'ACCIONES'
    ]
    fields = [
        'empresa',
        'correos',
        'telefonos',
        'location',
    ]
    empresas: Empresa[] = []


    constructor(private dialogService: NbDialogService,
                public empresaFront: EmpresaFrontService) {
    }

    ngOnInit(): void {
        this.empresaFront.getEmpresas().subscribe(
            (resp) => {
                this.empresas = resp
            }, (err) => {
                console.log(err)
            }
        )
    }

    search() {

    }

    openModal() {
        this.dialogService.open(ModalCompanyComponent, {
            closeOnBackdropClick: false,
            context: {
                title: 'Agregar empresa',
            },
        })
    }
}
