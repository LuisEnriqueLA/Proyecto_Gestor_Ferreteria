import { pool } from '../db.js'

export const obtenerProductosDAO = async () => {

    const [resultado] = await pool.query(
        'SELECT * FROM productos WHERE activo = 1'
    )

    return resultado
}


export const obtenerProductoDAO = async (id) => {

    const [resultado] = await pool.query(
        'SELECT * FROM productos WHERE id = ? AND activo = 1',
        [id]
    )

    return resultado
}


export const agregarProductoDAO = async (
    nombre,
    precio,
    detalles,
    existencia
) => {

    const [resultado] = await pool.query(
        `INSERT INTO productos
        (nombre, precio, detalles, existencia)
        VALUES (?, ?, ?, ?)`,
        [nombre, precio, detalles, existencia]
    )

    return resultado
}


export const actualizarProductoDAO = async (
    id,
    nombre,
    precio,
    detalles,
    existencia
) => {

    const [resultado] = await pool.query(
        `UPDATE productos
        SET nombre = IFNULL(?, nombre),
            precio = IFNULL(?, precio),
            detalles = IFNULL(?, detalles),
            existencia = IFNULL(?, existencia)
        WHERE id = ? AND activo = 1`,
        [nombre, precio, detalles, existencia, id]
    )

    return resultado
}


export const eliminarProductoDAO = async (id) => {

    const [resultado] = await pool.query(
        'UPDATE productos SET activo = 0 WHERE id = ?',
        [id]
    )

    return resultado
}