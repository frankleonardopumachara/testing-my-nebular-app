import {Injectable} from '@angular/core'
import {ContactDataService} from '../../data-services/contacts/contact-data.service'


@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private contactDataService: ContactDataService) {
    }

    getContacts() {
        return this.contactDataService.getAllContacts()
    }
}
