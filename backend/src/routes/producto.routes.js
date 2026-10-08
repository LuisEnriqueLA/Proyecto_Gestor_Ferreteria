import { Router } from 'express'

import {
    obtenerProductos,
    agregarProducto,
    obtenerProductosId,
    actualizarProducto,
    eliminarProducto
} from '../controllers/producto.controller.js'

const router = Router()

router.get('/productos', obtenerProductos)

router.get('/productos/:id', obtenerProductosId)

router.post('/productos', agregarProducto)

router.put('/productos/:id', actualizarProducto)

router.delete('/productos/:id', eliminarProducto)

export default router