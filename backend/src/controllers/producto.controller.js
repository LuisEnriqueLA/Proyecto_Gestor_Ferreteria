import {
    obtenerProductosDAO,
    obtenerProductoDAO,
    agregarProductoDAO,
    actualizarProductoDAO,
    eliminarProductoDAO
} from '../dao/producto.dao.js'

import { validarProducto } from '../helpers/validaciones.js'


export const obtenerProductos = async (req, res) => {

    try {

        const productos = await obtenerProductosDAO()

        res.json(productos)

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener los productos"
        })

    }

}


export const obtenerProductosId = async (req, res) => {

    try {

        const { id } = req.params

        const producto = await obtenerProductoDAO(id)

        res.json(producto)

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener el producto"
        })

    }

}


export const agregarProducto = async (req, res) => {

    try {

        const {
            nombre,
            precio,
            detalles,
            existencia
        } = req.body


        const errorValidacion =
            validarProducto(nombre, precio, existencia)


        if (errorValidacion) {

            return res.status(400).json({
                error: errorValidacion
            })

        }


        const resultado = await agregarProductoDAO(
            nombre,
            precio,
            detalles,
            existencia
        )


        res.status(201).json({

            id: resultado.insertId,
            nombre,
            precio,
            detalles,
            existencia

        })

    } catch (error) {

        res.status(500).json({
            error: "Error al agregar el producto"
        })

    }

}


export const actualizarProducto = async (req, res) => {

    try {

        const { id } = req.params

        const {
            nombre,
            precio,
            detalles,
            existencia
        } = req.body


        const resultado = await actualizarProductoDAO(
            id,
            nombre,
            precio,
            detalles,
            existencia
        )


        res.json({

            id,
            nombre,
            precio,
            detalles,
            existencia

        })

    } catch (error) {

        res.status(500).json({
            error: "Error al actualizar el producto"
        })

    }

}


export const eliminarProducto = async (req, res) => {

    try {

        const { id } = req.params

        await eliminarProductoDAO(id)

        res.json({

            mensaje: "Producto eliminado",
            id

        })

    } catch (error) {

        res.status(500).json({
            error: "Error al eliminar el producto"
        })

    }

}