export class Producto {

    constructor(id, nombre, precio, detalles, existencia, activo = 1) {

        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.detalles = detalles
        this.existencia = existencia
        this.activo = activo

    }

}