export function validarSalida(
    producto_id,
    cantidad
) {
    if (!producto_id) {
        return "El producto es obligatorio"
    }

    if (!cantidad || cantidad <= 0) {
        return "La cantidad debe ser mayor que 0"
    }

    return null
}