import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {Company} from '../../models/company'
import {Observable, of} from 'rxjs'
import {CompilerHostAdapter} from '@angular/compiler-cli/src/metadata/bundler'

@Injectable({
    providedIn: 'root'
})
export class CompanyDataService {
    url = 'assets/data/data-empresa.json'

    constructor(private http: HttpClient) {
    }

    getCompanies(): Observable<Company[]> {
        return this.http.get<any>(this.url)
            .pipe(
                map(resp => resp.data.map((company: any) => Company.create(company)))
            )
    }

    getCompaniesByPage(offset: number, pageSize: number): Observable<Company[]> {
        return this.http.get<any>(this.url)
            .pipe(
                map(res => res.data.map((company: any) => Company.create(company)))
            )
    }

    getCompany(idCompany: string | number): Observable<Company> {
        return of(Company.create({}))
    }

    createCompany(newCompany: Partial<Company>): Observable<Company> {
        return of(Company.create({}))
    }

    updateCompany(idCompany: string | number, company: Partial<Company>): Observable<Company> {
        return of(Company.create({}))
    }
}
