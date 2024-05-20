import RegistrarUsuario from "../core/usuario/RegistrarUsuario";
import { Express } from "express";
export default class RegistrarUsuarioController {
    constructor(
        private sevidor: Express,
        private registrarUsuario: RegistrarUsuario
    ){
        this.sevidor.post('/registrar', async (req,res) => {
          await registrarUsuario.executar(
                req.body.name,
                req.body.email,
                req.body.password
            )
            res.status(201).send()
        })
    } 
   
   
}