import {Injectable} from '@angular/core'
import {EmployService} from '../backServices/employ.service'

@Injectable({
    providedIn: 'root'
})
export class EmployFrontService {

    constructor(private employBackend: EmployService) {
    }

    getEmploys() {
        return this.employBackend.getAllEmploys()
    }
}
