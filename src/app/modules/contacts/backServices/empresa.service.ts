import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {Empresa} from '../models/empresa'

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {
    url = 'assets/data/data-empresa.json'


    constructor(private http: HttpClient) {
    }

    getAllEmpresas() {
        return this.http.get<any>(this.url)
            .pipe(
                map(resp => {
                    return resp.data.map((empresa: any) => Empresa.empresaToJson(empresa))
                })
            )
    }
}
