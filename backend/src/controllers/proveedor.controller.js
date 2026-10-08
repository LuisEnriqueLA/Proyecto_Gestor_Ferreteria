import {
    obtenerProveedoresDAO,
    obtenerProveedorDAO,
    agregarProveedorDAO,
    actualizarProveedorDAO,
    eliminarProveedorDAO
} from '../dao/proveedor.dao.js'

import { validarProveedor } from '../helpers/validacionesProveedor.js'


export const obtenerProveedores = async (req, res) => {

    try {

        const proveedores = await obtenerProveedoresDAO()

        res.json(proveedores)

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener los proveedores"
        })

    }

}

export const obtenerProveedorId = async (req, res) => {

    try {

        const { id } = req.params

        const proveedor = await obtenerProveedorDAO(id)

        res.json(proveedor)

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener el proveedor"
        })

    }

}

export const agregarProveedor = async (req, res) => {

    try {

        const {
            nombre,
            telefono,
            correo
        } = req.body


        const errorValidacion =
            validarProveedor(nombre)


        if (errorValidacion) {

            return res.status(400).json({
                error: errorValidacion
            })

        }


        const resultado =
            await agregarProveedorDAO(
                nombre,
                telefono,
                correo
            )


        res.status(201).json({

            id: resultado.insertId,

            nombre,

            telefono,

            correo

        })

    } catch (error) {

        res.status(500).json({
            error: "Error al agregar el proveedor"
        })

    }

}

export const actualizarProveedor = async (req, res) => {

    try {

        const { id } = req.params

        const {
            nombre,
            telefono,
            correo
        } = req.body


        const errorValidacion =
            validarProveedor(nombre)


        if (errorValidacion) {

            return res.status(400).json({
                error: errorValidacion
            })

        }


        await actualizarProveedorDAO(
            id,
            nombre,
            telefono,
            correo
        )


        res.json({

            id,

            nombre,

            telefono,

            correo

        })

    } catch (error) {

        res.status(500).json({
            error: "Error al actualizar el proveedor"
        })

    }

}

export const eliminarProveedor = async (req, res) => {

    try {

        const { id } = req.params


        await eliminarProveedorDAO(id)


        res.json({

            mensaje: "Proveedor eliminado",

            id

        })

    } catch (error) {

        res.status(500).json({
            error: "Error al eliminar el proveedor"
        })

    }

}