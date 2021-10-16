import {Injectable} from '@angular/core'
import {CompanyDataService} from '../../data-services/contacts/company-data.service'

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private empresaBackend: CompanyDataService) {
    }

    getEmpresas() {
        return this.empresaBackend.getCompanies()
    }
}
