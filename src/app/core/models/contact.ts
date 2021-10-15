export class Contact {
    static create(obj: any) {
        return new Contact(
            obj['idContacto'],
            obj['nombres'],
            obj['apellidoPaterno'],
            obj['apellidoMaterno'],
            obj['tipoDocumento'],
            obj['nroDocumento'],
            obj['tipoContacto'],
            obj['nombreEmpresa'],
            obj['lineaCredito'],
            obj['creditoDisponible'],
            obj['paginaWeb'],
            obj['correo1'],
            obj['correo2'],
            obj['descuentoVenta'],
            obj['telefonoMovil'],
            obj['telefonoTrabajo'],
            obj['telefonoCasa'],
            obj['idPais'],
            obj['idDepartamento'],
            obj['idProvincia'],
            obj['idDistrito'],
            obj['fechaNacimiento'],
            obj['notas']
        )
    }

    constructor(
        public idContacto: number,
        public nombres: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public tipoDocumento: string,
        public nroDocumento: number,
        public tipoContacto: string,
        public nombreEmpresa: string,
        public lineaCredito: number,
        public creditoDisponible: number,
        public paginaWeb: string,
        public correo1: string,
        public correo2: string,
        public descuentoVenta: string,
        public telefonoMovil: number,
        public telefonoTrabajo: string,
        public telefonoCasa: string,
        public idPais: number,
        public idDepartamento: number,
        public idProvincia: number,
        public idDistrito: number,
        public fechaNacimiento: string,
        public notas: string,
    ) {
    }

    get fullName(): string {
        return `${this.apellidoMaterno} ${this.apellidoPaterno}, ${this.nombres} \n ${this.tipoDocumento}:${this.nroDocumento}`
    }

    get documentID(): string {
        return `${this.tipoDocumento}:${this.nroDocumento}`
    }

    get correos(): string {
        return `${this.correo1} \n ${this.correo2}`
    }

    get location(): string {
        return 'Molina - Lima - Perú'
    }

    get empresa(): string {
        return `${this.nombreEmpresa} \n ${this.paginaWeb}`
    }
}
