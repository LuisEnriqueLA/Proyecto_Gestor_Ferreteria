import { pool } from '../db.js'


// Obtener entradas

export const obtenerEntradasDAO = async () => {

    const [resultado] = await pool.query(`
        SELECT
            entradas.id,
            entradas.producto_id,
            productos.nombre AS producto,
            entradas.proveedor_id,
            proveedores.nombre AS proveedor,
            entradas.cantidad,
            entradas.fecha

        FROM entradas

        INNER JOIN productos
            ON entradas.producto_id = productos.id

        INNER JOIN proveedores
            ON entradas.proveedor_id = proveedores.id

        ORDER BY entradas.fecha DESC
    `)

    return resultado

}


// Obtener entrada por ID

export const obtenerEntradaDAO = async (id) => {

    const [resultado] = await pool.query(`
        SELECT
            entradas.id,
            entradas.producto_id,
            productos.nombre AS producto,
            entradas.proveedor_id,
            proveedores.nombre AS proveedor,
            entradas.cantidad,
            entradas.fecha

        FROM entradas

        INNER JOIN productos
            ON entradas.producto_id = productos.id

        INNER JOIN proveedores
            ON entradas.proveedor_id = proveedores.id

        WHERE entradas.id = ?
    `, [id])

    return resultado

}


// Registrar entrada

export const agregarEntradaDAO = async (
    producto_id,
    proveedor_id,
    cantidad
) => {

    const conexion = await pool.getConnection()

    try {

        await conexion.beginTransaction()


        // Registrar entrada

        const [resultado] = await conexion.query(`
            INSERT INTO entradas
            (producto_id, proveedor_id, cantidad)
            VALUES (?, ?, ?)
        `, [
            producto_id,
            proveedor_id,
            cantidad
        ])


        // Aumentar existencia

        await conexion.query(`
            UPDATE productos
            SET existencia = existencia + ?
            WHERE id = ? AND activo = 1
        `, [
            cantidad,
            producto_id
        ])


        await conexion.commit()


        return resultado

    } catch (error) {

        await conexion.rollback()

        throw error

    } finally {

        conexion.release()

    }

}