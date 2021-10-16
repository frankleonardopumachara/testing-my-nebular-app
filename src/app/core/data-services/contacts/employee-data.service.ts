import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {Employee} from '../../models/employee'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class EmployeeDataService {

    url = 'assets/data/data-employ.json'

    constructor(private http: HttpClient) {
    }

    getAllEmploys(): Observable<Employee[]> {
        return this.http.get<any>(this.url)
            .pipe(
                map(resp => resp.data.map((employ: any) => Employee.create(employ)))
            )
    }
}
