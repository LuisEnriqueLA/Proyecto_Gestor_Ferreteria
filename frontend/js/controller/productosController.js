async function cargarProductos() {

    const productos = await obtenerProductos()

    mostrarProductos(productos)

}

async function editarProducto(id) {

    const productos = await obtenerProductos()

    const producto = productos.find(producto => producto.id == id)

    if (producto) {

        mostrarFormularioEdicion(producto)

    }

}

async function eliminarProductoVista(id, nombre) {

    const confirmar = confirm(
        `¿Seguro que quieres eliminar "${nombre}"?`
    )

    if (!confirmar) {
        return
    }

    await eliminarProducto(id)

    await cargarProductos()

}

async function guardarProducto(event) {

    event.preventDefault()


    const id = document.querySelector("#id").value

    const nombre = document.querySelector("#nombre").value

    const detalles = document.querySelector("#detalles").value

    const precio = document.querySelector("#precio").value

    const existencia = document.querySelector("#existencia").value


    const producto = {

        nombre: nombre,

        detalles: detalles,

        precio: Number(precio),

        existencia: Number(existencia)

    }

    if (id) {

        await actualizarProducto(id, producto)

    }

    else {

        await agregarProducto(producto)

    }


    limpiarFormulario()

    await cargarProductos()

}


function cancelarEdicion() {

    limpiarFormulario()

}


document
    .querySelector("#formularioProducto")
    .addEventListener("submit", guardarProducto)


document
    .querySelector("#btnCancelar")
    .addEventListener("click", cancelarEdicion)
cargarProductos()