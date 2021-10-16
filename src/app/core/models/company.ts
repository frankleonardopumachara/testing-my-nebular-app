export class Company {
    static create(obj: any) {
        return new Company(
            obj['idEmpresa'],
            obj['razonSocial'],
            obj['idDocumento'],
            obj['tipoDocumento'],
            obj['nroDocumento'],
            obj['paginaWeb'],
            obj['correo1'],
            obj['correo2'],
            obj['telefonoMovil'],
            obj['telefonoTrabajo'],
            obj['telefonoCasa'],
            obj['idPais'],
            obj['idDepartamento'],
            obj['idProvincia'],
            obj['idDistrito'],
            obj['nota'],
        )
    }

    constructor(
        public idEmpresa: number,
        public razonSocial: string,
        public idDocumento: string,
        public tipoDocumento: string,
        public nroDocumento: string,
        public paginaWeb: string,
        public correo1: string,
        public correo2: string,
        public telefonoMovil: number,
        public telefonoTrabajo: string,
        public telefonoCasa: string,
        public idPais: number,
        public idDepartamento: number,
        public idProvincia: number,
        public idDistrito: number,
        public nota: string,
    ) {
    }

    get empresa(): string {
        return `${this.razonSocial} \n ${this.tipoDocumento}:${this.nroDocumento}`
    }

    get correos(): string {
        return `${this.correo1} \n ${this.correo2}`
    }

    get telefonos(): string {
        return `Movil:${this.telefonoMovil} \n Trabajo: ${this.telefonoTrabajo} \n Casa:${this.telefonoCasa}`
    }

    get location(): string {
        return 'Molina-Lima-Peru'
    }

}
