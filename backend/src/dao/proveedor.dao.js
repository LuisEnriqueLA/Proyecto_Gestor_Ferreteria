import { pool } from '../db.js'

export const obtenerProveedoresDAO = async () => {

    const [resultado] = await pool.query(
        'SELECT * FROM proveedores WHERE activo = 1'
    )

    return resultado

}


export const obtenerProveedorDAO = async (id) => {

    const [resultado] = await pool.query(
        'SELECT * FROM proveedores WHERE id = ? AND activo = 1',
        [id]
    )

    return resultado

}


export const agregarProveedorDAO = async (
    nombre,
    telefono,
    correo
) => {

    const [resultado] = await pool.query(
        `INSERT INTO proveedores
        (nombre, telefono, correo)
        VALUES (?, ?, ?)`,
        [nombre, telefono, correo]
    )

    return resultado

}

export const actualizarProveedorDAO = async (
    id,
    nombre,
    telefono,
    correo
) => {

    const [resultado] = await pool.query(
        `UPDATE proveedores
        SET nombre = ?,
            telefono = ?,
            correo = ?
        WHERE id = ? AND activo = 1`,
        [nombre, telefono, correo, id]
    )

    return resultado

}

export const eliminarProveedorDAO = async (id) => {

    const [resultado] = await pool.query(
        `UPDATE proveedores
        SET activo = 0
        WHERE id = ?`,
        [id]
    )

    return resultado

}