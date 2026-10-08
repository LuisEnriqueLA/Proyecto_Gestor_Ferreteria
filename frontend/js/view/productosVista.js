function productoHTML(producto) {

    return `
        <tr>

            <td>${producto.id}</td>

            <td>${producto.nombre}</td>

            <td>${producto.detalles}</td>

            <td>$${producto.precio}</td>

            <td>${producto.existencia}</td>

            <td>

                <button
                    class="btn btn-warning btn-sm"
                    onclick="editarProducto(${producto.id})"
                >
                    Editar
                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="eliminarProductoVista(${producto.id}, '${producto.nombre}')"
                >
                    Eliminar
                </button>

            </td>

        </tr>
    `
}

function mostrarProductos(productos) {

    let texto = ""

    productos.forEach(producto => {

        texto += productoHTML(producto)

    })

    document.querySelector("#tablaProducto").innerHTML = texto
}

function mostrarFormularioEdicion(producto) {

    document.querySelector("#id").value = producto.id
    document.querySelector("#nombre").value = producto.nombre
    document.querySelector("#detalles").value = producto.detalles
    document.querySelector("#precio").value = producto.precio
    document.querySelector("#existencia").value = producto.existencia
    document.querySelector("#tituloFormulario").textContent =
        "Editar producto"
    document.querySelector("#btnCancelar").style.display =
        "inline-block"
}


// Limpiar formulario

function limpiarFormulario() {

    document.querySelector("#id").value = ""
    document.querySelector("#nombre").value = ""
    document.querySelector("#detalles").value = ""
    document.querySelector("#precio").value = ""
    document.querySelector("#existencia").value = ""
    document.querySelector("#tituloFormulario").textContent =
        "Agregar producto"
    document.querySelector("#btnCancelar").style.display =
        "none"
}