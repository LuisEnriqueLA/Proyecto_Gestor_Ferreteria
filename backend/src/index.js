import express from 'express'
import cors from 'cors'
import rutasProductos from './routes/producto.routes.js'
import rutasProveedores from './routes/proveedor.routes.js'
import rutasEntradas from './routes/entrada.routes.js'
import rutasSalidas from './routes/salida.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(rutasProductos)
app.use(rutasProveedores)
app.use(rutasEntradas)
app.use(rutasSalidas)

app.listen(3000, () => {

    console.log(
        'Servidor funcionando en http://localhost:3000'
    )
  })