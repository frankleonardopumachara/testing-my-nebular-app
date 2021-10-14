export class Employ {
    static employToJson(obj: any) {
        return new Employ(
            obj['idEmpleado'],
            obj['nombres'],
            obj['apellidoPaterno'],
            obj['apellidoMaterno'],
            obj['tipoDocumento'],
            obj['nroDocumento'],
            obj['fechaNacimiento'],
            obj['salario'],
            obj['idTituloProfesional'],
            obj['nombreEmpresa'],
            obj['paginaWeb'],
            obj['correo1'],
            obj['correo2'],
            obj['telefonoMovil'],
            obj['telefonoTrabajo'],
            obj['telefonoCasa'],
            obj['direccion'],
            obj['direccionTrabajo'],
            obj['nota'],
            obj['tipoUsuario'],
        )
    }

    constructor(
        public idEmpleado: number,
        public nombres: string,//
        public apellidoPaterno: string, //
        public apellidoMaterno: string,//
        public tipoDocumento: string, //
        public nroDocumento: number, //
        public fechaNacimiento: Date,
        public salario: number,
        public idTituloProfesional: string,
        public nombreEmpresa: string,
        public paginaWeb: string,
        public correo1: string,
        public correo2: string,
        public telefonoMovil: number,
        public telefonoTrabajo: string,
        public telefonoCasa: string,
        public direccion: string,
        public direccionTrabajo: string,
        public nota: string,
        public tipoUsuario: string
    ) {
    }

    get employ(): string {
        return `${this.apellidoMaterno} ${this.apellidoPaterno}, ${this.nombres} \n${this.tipoDocumento}:${this.nroDocumento}`
    }

    get correos(): string {
        return `${this.correo1} \n${this.correo2}`
    }

    get telefonos(): string {
        return `Movil:${this.telefonoMovil} \nTrabajo: ${this.telefonoTrabajo} \nCasa:${this.telefonoCasa}`
    }

    get empresas(): string {
        return `${this.nombreEmpresa} \n${this.paginaWeb}`
    }

}
