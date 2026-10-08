export function validarProducto(nombre, precio, existencia) {

    if (!nombre) {
        return "El nombre es obligatorio"
    }

    if (precio === undefined || precio === null || precio < 0) {
        return "El precio no es valido"
    }

    if (existencia === undefined || existencia === null || existencia < 0) {
        return "La existencia no es valida"
    }

    return null
}