import {Injectable} from '@angular/core'
import {EmpresaService} from '../backServices/empresa.service'

@Injectable({
    providedIn: 'root'
})
export class EmpresaFrontService {

    constructor(private empresaBackend: EmpresaService) {
    }

    getEmpresas() {
        return this.empresaBackend.getAllEmpresas()
    }
}
