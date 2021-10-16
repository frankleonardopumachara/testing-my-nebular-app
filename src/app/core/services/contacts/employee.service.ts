import {Injectable} from '@angular/core'
import {EmployeeDataService} from '../../data-services/contacts/employee-data.service'

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private employBackend: EmployeeDataService) {
    }

    getEmploys() {
        return this.employBackend.getAllEmploys()
    }
}
