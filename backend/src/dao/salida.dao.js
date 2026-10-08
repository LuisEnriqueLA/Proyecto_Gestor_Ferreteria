import { pool } from '../db.js'

export const obtenerSalidasDAO = async () => {
    const [resultado] = await pool.query(`
        SELECT
            salidas.id,
            salidas.producto_id,
            productos.nombre AS producto,
            salidas.cantidad,
            salidas.fecha

        FROM salidas

        INNER JOIN productos
            ON salidas.producto_id = productos.id

        ORDER BY salidas.fecha DESC
    `)

    return resultado
}

export const obtenerSalidaDAO = async (id) => {
    const [resultado] = await pool.query(`
        SELECT
            salidas.id,
            salidas.producto_id,
            productos.nombre AS producto,
            salidas.cantidad,
            salidas.fecha

        FROM salidas

        INNER JOIN productos
            ON salidas.producto_id = productos.id

        WHERE salidas.id = ?
    `, [id])

    return resultado
}

export const agregarSalidaDAO = async (
    producto_id,
    cantidad
) => {
    const conexion = await pool.getConnection()

    try {
        await conexion.beginTransaction()

        const [producto] = await conexion.query(`
            SELECT existencia
            FROM productos
            WHERE id = ? AND activo = 1
            FOR UPDATE
        `, [producto_id])

        if (producto.length === 0) {
            throw new Error("Producto no encontrado")
        }

        if (producto[0].existencia < cantidad) {
            throw new Error("Existencia insuficiente")
        }

        const [resultado] = await conexion.query(`
            INSERT INTO salidas
            (producto_id, cantidad)
            VALUES (?, ?)
        `, [
            producto_id,
            cantidad
        ])

        await conexion.query(`
            UPDATE productos
            SET existencia = existencia - ?
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