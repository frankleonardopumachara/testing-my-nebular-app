export class Contact {
    static contactToJson(obj: any) {
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
        return `${this.apellidoMaterno} ${this.apellidoPaterno}, ${this.nombres}`
    }

    // get Document()

}
