import {Component, OnInit} from '@angular/core'
import {NbDialogService} from '@nebular/theme'
import {ModalContactComponent} from "../../components/modal-contact/modal-contact.component";
import {ModalCompanyComponent} from "../../components/modal-company/modal-company.component";

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

    headerTableCompany: string[] = ['#', 'CÓDIGO', 'NOMBRE', 'ACCIONES']

    constructor(private dialogService: NbDialogService) {
    }

    ngOnInit(): void {
    }

    search() {

    }

    openModal(){
        this.dialogService.open(ModalCompanyComponent, {
            context: {
                title: 'Agregar empresa',
            },
        })
    }
}
