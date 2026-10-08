import { Router } from 'express'

import {
    obtenerSalidas,
    obtenerSalidaId,
    agregarSalida
} from '../controllers/salida.controller.js'

const router = Router()

router.get(
    '/salidas',
    obtenerSalidas
)

router.get(
    '/salidas/:id',
    obtenerSalidaId
)

router.post(
    '/salidas',
    agregarSalida
)

export default router