function mostrarProductosSalida(productos) {

    let texto = `
        <option value="">
            Selecciona un producto
        </option>
    `


    productos.forEach(producto => {

        texto += `
            <option value="${producto.id}">
                ${producto.nombre}
                - Existencia: ${producto.existencia}
            </option>
        `

    })


    document.querySelector(
        "#producto"
    ).innerHTML = texto
}


function salidaHTML(salida) {

    return `
        <tr>

            <td>
                ${salida.id}
            </td>

            <td>
                ${salida.producto}
            </td>

            <td>
                ${salida.cantidad}
            </td>

            <td>
                ${salida.fecha}
            </td>

        </tr>
    `
}


function mostrarSalidas(salidas) {

    let texto = ""


    salidas.forEach(salida => {

        texto += salidaHTML(salida)

    })


    document.querySelector(
        "#tablaSalidas"
    ).innerHTML = texto
}