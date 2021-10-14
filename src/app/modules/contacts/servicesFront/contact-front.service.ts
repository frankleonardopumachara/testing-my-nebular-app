import {Injectable} from '@angular/core'
import {ContactService} from '../backServices/contact.service'
import {Contact} from '../models/contact'
import {Subscription} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ContactFrontService {
    // contacts: Contact[] = []
    // contact$: Subscription = new Subscription()

    constructor(private contactBackend: ContactService) {
    }

    // username: desret213

    getContacts() {
        // this.contact$ =
        return this.contactBackend.getAllContacts()
        // .subscribe(
        //     (contacts) => {
        //         this.contacts.push(...contacts)
        //     }, (err) => {
        //         console.log(err)
        //     }
        // )
        // return this.contacts
    }

    // closeSubscription(): void {
    //     this.contact$.unsubscribe()
    // }
}
