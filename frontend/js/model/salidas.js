const API_SALIDAS =
    "http://localhost:3000/salidas"

const API_PRODUCTOS =
    "http://localhost:3000/productos"


async function obtenerSalidas() {

    const respuesta =
        await fetch(API_SALIDAS)

    const salidas =
        await respuesta.json()

    return salidas
}


async function obtenerProductosSalida() {

    const respuesta =
        await fetch(API_PRODUCTOS)

    const productos =
        await respuesta.json()

    return productos
}


async function agregarSalida(salida) {

    const respuesta =
        await fetch(API_SALIDAS, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(salida)

        })


    const resultado =
        await respuesta.json()


    if (!respuesta.ok) {

        throw new Error(
            resultado.error
        )

    }


    return resultado
}