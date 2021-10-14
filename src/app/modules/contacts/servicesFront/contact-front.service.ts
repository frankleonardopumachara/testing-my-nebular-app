import {Injectable} from '@angular/core'
import {ContactService} from '../backServices/contact.service'


@Injectable({
    providedIn: 'root'
})
export class ContactFrontService {

    constructor(private contactBackend: ContactService) {
    }

    getContacts() {
        return this.contactBackend.getAllContacts()
    }
}
