const API = "http://localhost:3000/proveedores"

async function obtenerProveedores() {

    const respuesta = await fetch(API)

    const proveedores = await respuesta.json()

    return proveedores

}

async function agregarProveedor(proveedor) {

    const respuesta = await fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(proveedor)

    })

    const resultado = await respuesta.json()

    return resultado

}

async function actualizarProveedor(id, proveedor) {

    const respuesta = await fetch(`${API}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(proveedor)

    })

    const resultado = await respuesta.json()

    return resultado

}


async function eliminarProveedor(id) {

    const respuesta = await fetch(`${API}/${id}`, {

        method: "DELETE"

    })

    const resultado = await respuesta.json()

    return resultado

}