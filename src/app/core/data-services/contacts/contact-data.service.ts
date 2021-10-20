import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Contact} from '../../models/contact'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

/** back service */
@Injectable({
    providedIn: 'root'
})
export class ContactDataService {
    url = 'assets/data/data-contacts.json'

    constructor(private http: HttpClient) {
    }

    getAllContacts(): Observable<Contact[]> {
        return this.http.get<any>(this.url)
            .pipe(
                map(resp => resp.data.map((contact: any) => Contact.create(contact)))
            )
    }
}
