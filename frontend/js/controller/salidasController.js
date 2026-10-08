async function cargarDatosSalida() {

    const productos =
        await obtenerProductosSalida()

    const salidas =
        await obtenerSalidas()


    mostrarProductosSalida(productos)

    mostrarSalidas(salidas)
}


async function guardarSalida(event) {

    event.preventDefault()


    const producto_id =
        document.querySelector(
            "#producto"
        ).value


    const cantidad =
        document.querySelector(
            "#cantidad"
        ).value


    const salida = {

        producto_id: Number(producto_id),

        cantidad: Number(cantidad)

    }


    try {

        await agregarSalida(salida)

        alert(
            "Salida registrada correctamente"
        )


        document.querySelector(
            "#formularioSalida"
        ).reset()


        await cargarDatosSalida()


    } catch (error) {

        alert(error.message)

    }
}


document
    .querySelector("#formularioSalida")
    .addEventListener(
        "submit",
        guardarSalida
    )


cargarDatosSalida()