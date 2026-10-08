import { Router } from 'express'

import {
    obtenerEntradas,
    obtenerEntradaId,
    agregarEntrada
} from '../controllers/entrada.controller.js'


const router = Router()


router.get(
    '/entradas',
    obtenerEntradas
)


router.get(
    '/entradas/:id',
    obtenerEntradaId
)


router.post(
    '/entradas',
    agregarEntrada
)


export default router