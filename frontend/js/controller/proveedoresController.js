async function cargarProveedores() {

    const proveedores = await obtenerProveedores()

    mostrarProveedores(proveedores)

}

async function editarProveedor(id) {

    const proveedores = await obtenerProveedores()

    const proveedor = proveedores.find(
        proveedor => proveedor.id == id
    )


    if (proveedor) {

        mostrarFormularioEdicion(proveedor)

    }

}

async function eliminarProveedorVista(id, nombre) {

    const confirmar = confirm(
        `¿Seguro que quieres eliminar "${nombre}"?`
    )


    if (!confirmar) {

        return

    }


    await eliminarProveedor(id)

    await cargarProveedores()

}


async function guardarProveedor(event) {

    event.preventDefault()


    const id =
        document.querySelector("#id").value

    const nombre =
        document.querySelector("#nombre").value

    const telefono =
        document.querySelector("#telefono").value

    const correo =
        document.querySelector("#correo").value


    const proveedor = {

        nombre: nombre,

        telefono: telefono,

        correo: correo

    }


    if (id) {

        await actualizarProveedor(
            id,
            proveedor
        )

    }

    else {

        await agregarProveedor(
            proveedor
        )

    }


    limpiarFormulario()

    await cargarProveedores()

}

function cancelarEdicion() {

    limpiarFormulario()

}

document
    .querySelector("#formularioProveedor")
    .addEventListener(
        "submit",
        guardarProveedor
    )


document
    .querySelector("#btnCancelar")
    .addEventListener(
        "click",
        cancelarEdicion
    )
cargarProveedores()