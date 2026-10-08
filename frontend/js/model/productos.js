const API = "http://localhost:3000/productos"


// Obtener todos los productos

async function obtenerProductos() {

    const respuesta = await fetch(API)

    const productos = await respuesta.json()

    return productos
}


// Agregar producto

async function agregarProducto(producto) {

    const respuesta = await fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    })

    const resultado = await respuesta.json()

    return resultado
}

async function actualizarProducto(id, producto) {

    const respuesta = await fetch(`${API}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    })

    const resultado = await respuesta.json()

    return resultado
}

async function eliminarProducto(id) {

    const respuesta = await fetch(`${API}/${id}`, {

        method: "DELETE"

    })

    const resultado = await respuesta.json()

    return resultado
}