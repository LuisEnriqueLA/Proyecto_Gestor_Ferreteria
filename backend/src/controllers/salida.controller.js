import {
    obtenerSalidasDAO,
    obtenerSalidaDAO,
    agregarSalidaDAO
} from '../dao/salida.dao.js'

import { validarSalida } from '../helpers/validacionesSalidas.js'

export const obtenerSalidas = async (req, res) => {
    try {
        const salidas = await obtenerSalidasDAO()

        res.json(salidas)

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener las salidas"
        })
    }
}

export const obtenerSalidaId = async (req, res) => {
    try {
        const { id } = req.params

        const salida = await obtenerSalidaDAO(id)

        res.json(salida)

    } catch (error) {
        res.status(500).json({
            error: "Error al obtener la salida"
        })
    }
}

export const agregarSalida = async (req, res) => {
    try {
        const {
            producto_id,
            cantidad
        } = req.body

        const errorValidacion =
            validarSalida(
                producto_id,
                cantidad
            )

        if (errorValidacion) {
            return res.status(400).json({
                error: errorValidacion
            })
        }

        const resultado =
            await agregarSalidaDAO(
                producto_id,
                cantidad
            )

        res.status(201).json({
            mensaje: "Salida registrada correctamente",
            id: resultado.insertId,
            producto_id,
            cantidad
        })

    } catch (error) {
        console.error(error)

        if (error.message === "Producto no encontrado") {
            return res.status(404).json({
                error: error.message
            })
        }

        if (error.message === "Existencia insuficiente") {
            return res.status(400).json({
                error: error.message
            })
        }

        res.status(500).json({
            error: "Error al registrar la salida"
        })
    }
}