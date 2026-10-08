function proveedorHTML(proveedor) {

    return `
        <tr>

            <td>${proveedor.id}</td>

            <td>${proveedor.nombre}</td>

            <td>${proveedor.telefono || ""}</td>

            <td>${proveedor.correo || ""}</td>

            <td>

                <button
                    onclick="editarProveedor(${proveedor.id})"
                >
                    Editar
                </button>

                <button
                    onclick="eliminarProveedorVista(
                        ${proveedor.id},
                        '${proveedor.nombre}'
                    )"
                >
                    Eliminar
                </button>

            </td>

        </tr>
    `

}

function mostrarProveedores(proveedores) {

    let texto = ""

    proveedores.forEach(proveedor => {

        texto += proveedorHTML(proveedor)

    })

    document.querySelector("#tablaProveedores").innerHTML = texto

}


// Mostrar proveedor en formulario

function mostrarFormularioEdicion(proveedor) {

    document.querySelector("#id").value =
        proveedor.id

    document.querySelector("#nombre").value =
        proveedor.nombre

    document.querySelector("#telefono").value =
        proveedor.telefono || ""

    document.querySelector("#correo").value =
        proveedor.correo || ""


    document.querySelector("#tituloFormulario").textContent =
        "Editar proveedor"

}

function limpiarFormulario() {

    document.querySelector("#id").value = ""

    document.querySelector("#nombre").value = ""

    document.querySelector("#telefono").value = ""

    document.querySelector("#correo").value = ""


    document.querySelector("#tituloFormulario").textContent =
        "Agregar proveedor"

}