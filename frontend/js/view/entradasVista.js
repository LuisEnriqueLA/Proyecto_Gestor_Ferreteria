function mostrarProductosEntrada(productos) {

    let texto = `
        <option value="">
            Selecciona un producto
        </option>
    `

    productos.forEach(producto => {

        texto += `
            <option value="${producto.id}">
                ${producto.nombre}
            </option>
        `

    })

    document.querySelector(
        "#producto"
    ).innerHTML = texto
}


function mostrarProveedoresEntrada(proveedores) {

    let texto = `
        <option value="">
            Selecciona un proveedor
        </option>
    `

    proveedores.forEach(proveedor => {

        texto += `
            <option value="${proveedor.id}">
                ${proveedor.nombre}
            </option>
        `

    })

    document.querySelector(
        "#proveedor"
    ).innerHTML = texto
}


function entradaHTML(entrada) {

    return `
        <tr>

            <td>
                ${entrada.id}
            </td>

            <td>
                ${entrada.producto}
            </td>

            <td>
                ${entrada.proveedor}
            </td>

            <td>
                ${entrada.cantidad}
            </td>

            <td>
                ${entrada.fecha}
            </td>

        </tr>
    `
}


function mostrarEntradas(entradas) {

    let texto = ""

    entradas.forEach(entrada => {

        texto += entradaHTML(entrada)

    })

    document.querySelector(
        "#tablaEntradas"
    ).innerHTML = texto
}