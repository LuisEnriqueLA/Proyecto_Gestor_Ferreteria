async function cargarDatosEntrada() {

    const productos =
        await obtenerProductosEntrada()

    const proveedores =
        await obtenerProveedoresEntrada()

    const entradas =
        await obtenerEntradas()


    mostrarProductosEntrada(productos)

    mostrarProveedoresEntrada(proveedores)

    mostrarEntradas(entradas)
}


async function guardarEntrada(event) {

    event.preventDefault()


    const producto_id =
        document.querySelector(
            "#producto"
        ).value


    const proveedor_id =
        document.querySelector(
            "#proveedor"
        ).value


    const cantidad =
        document.querySelector(
            "#cantidad"
        ).value


    const entrada = {

        producto_id: Number(producto_id),

        proveedor_id: Number(proveedor_id),

        cantidad: Number(cantidad)

    }


    try {

        await agregarEntrada(entrada)

        alert(
            "Entrada registrada correctamente"
        )


        document.querySelector(
            "#formularioEntrada"
        ).reset()


        await cargarDatosEntrada()


    } catch (error) {

        alert(error.message)

    }
}


document
    .querySelector("#formularioEntrada")
    .addEventListener(
        "submit",
        guardarEntrada
    )


cargarDatosEntrada()