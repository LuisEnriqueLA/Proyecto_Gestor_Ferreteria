const API_ENTRADAS =
    "http://localhost:3000/entradas"

const API_PRODUCTOS =
    "http://localhost:3000/productos"

const API_PROVEEDORES =
    "http://localhost:3000/proveedores"


async function obtenerEntradas() {

    const respuesta =
        await fetch(API_ENTRADAS)

    const entradas =
        await respuesta.json()

    return entradas
}


async function obtenerProductosEntrada() {

    const respuesta =
        await fetch(API_PRODUCTOS)

    const productos =
        await respuesta.json()

    return productos
}


async function obtenerProveedoresEntrada() {

    const respuesta =
        await fetch(API_PROVEEDORES)

    const proveedores =
        await respuesta.json()

    return proveedores
}


async function agregarEntrada(entrada) {

    const respuesta =
        await fetch(API_ENTRADAS, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(entrada)

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