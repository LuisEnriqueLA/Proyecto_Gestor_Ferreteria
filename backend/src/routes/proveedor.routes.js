import { Router } from 'express'

import {
    obtenerProveedores,
    obtenerProveedorId,
    agregarProveedor,
    actualizarProveedor,
    eliminarProveedor
} from '../controllers/proveedor.controller.js'


const router = Router()


router.get(
    '/proveedores',
    obtenerProveedores
)


router.get(
    '/proveedores/:id',
    obtenerProveedorId
)


router.post(
    '/proveedores',
    agregarProveedor
)


router.put(
    '/proveedores/:id',
    actualizarProveedor
)


router.delete(
    '/proveedores/:id',
    eliminarProveedor
)


export default router