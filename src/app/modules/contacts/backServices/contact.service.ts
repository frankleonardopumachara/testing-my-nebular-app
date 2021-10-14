import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Contact} from '../models/contact'
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
/** back service */
export class ContactService {
    url = 'assets/data/data-contacts.json'

    constructor(private http: HttpClient) {
    }

    getAllContacts() {
        return this.http.get<any>(this.url)
            .pipe(
                map(resp => {
                    return resp.data.map((contact: any) => Contact.contactToJson(contact))
                })
            )
    }
}
