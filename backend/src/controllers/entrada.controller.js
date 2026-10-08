import {
    obtenerEntradasDAO,
    obtenerEntradaDAO,
    agregarEntradaDAO
} from '../dao/entrada.dao.js'

import { validarEntrada } from '../helpers/validacionesEntrada.js'


// Obtener entradas

export const obtenerEntradas = async (req, res) => {

    try {

        const entradas = await obtenerEntradasDAO()

        res.json(entradas)

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener las entradas"
        })

    }

}


// Obtener entrada por ID

export const obtenerEntradaId = async (req, res) => {

    try {

        const { id } = req.params

        const entrada = await obtenerEntradaDAO(id)

        res.json(entrada)

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener la entrada"
        })

    }

}


// Registrar entrada

export const agregarEntrada = async (req, res) => {

    try {

        const {
            producto_id,
            proveedor_id,
            cantidad
        } = req.body


        const errorValidacion = validarEntrada(
            producto_id,
            proveedor_id,
            cantidad
        )


        if (errorValidacion) {

            return res.status(400).json({
                error: errorValidacion
            })

        }


        const resultado = await agregarEntradaDAO(
            producto_id,
            proveedor_id,
            cantidad
        )


        res.status(201).json({

            mensaje: "Entrada registrada correctamente",

            id: resultado.insertId,

            producto_id,

            proveedor_id,

            cantidad

        })

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Error al registrar la entrada"
        })

    }

}