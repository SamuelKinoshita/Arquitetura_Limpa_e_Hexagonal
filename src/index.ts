import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import RegistratUsuario from './core/usuario/RegistrarUsuario'
import ColecaoUsuarioDB from './adapters/db/knex/ColecaoUsuarioDB'
import CriptoReal from './adapters/auth/CriptoReal'
import RegistrarUsuarioController from './controller/RegistrarUsuarioController'
import LoginUsuario from './core/usuario/LoginUsuario'
import LoginUsuarioController from './controller/LoginUsuaruioContriller'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//---------------Rotas Abertas -----------------
const colecaoUsuario = new ColecaoUsuarioDB()
const provedorCripto = new CriptoReal()
const registrarUsuario = new RegistratUsuario(colecaoUsuario,provedorCripto)
const loginUsuario = new LoginUsuario(colecaoUsuario,provedorCripto)

new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsuarioController(app, loginUsuario)


const port = process.env.PORT ?? 3001
app.listen(port, () => {
    console.log(`🔥 Server running on port ${port}`)
})