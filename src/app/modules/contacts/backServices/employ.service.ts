import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {Employ} from '../models/employ'

@Injectable({
    providedIn: 'root'
})
export class EmployService {

    url = 'assets/data/data-employ.json'


    constructor(private http: HttpClient) {
    }

    getAllEmploys() {
        return this.http.get<any>(this.url)
            .pipe(
                map(resp => {
                    return resp.data.map((employ: any) => Employ.employToJson(employ))
                })
            )
    }
}
