export class Proveedor {

    constructor(id, nombre, telefono, correo, activo = 1) {

        this.id = id
        this.nombre = nombre
        this.telefono = telefono
        this.correo = correo
        this.activo = activo

    }

}