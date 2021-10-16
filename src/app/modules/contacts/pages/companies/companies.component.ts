import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
import {ModalCompanyComponent} from '../../components/modal-company/modal-company.component'
import {Company} from '../../../../core/models/company'
import {CompanyService} from '../../../../core/services/contacts/company.service'

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
    loading = true

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
    empresas: Company[] = []


    constructor(private dialogService: NbDialogService,
                public empresaFront: CompanyService) {
    }

    ngOnInit(): void {
        this.getData()
    }

    getData(): void {
        this.empresas = []
        this.loading = true
        this.empresaFront.getEmpresas().subscribe(
            (resp) => {
                this.empresas = resp
                this.loading = false
            }, (err) => {
                this.loading = false
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
