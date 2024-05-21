import RegistrarUsuario from "../core/usuario/RegistrarUsuario";
import { Express } from "express";
export default class RegistrarUsuarioController {
    constructor(
        private sevidor: Express,
        private casoDeUso: RegistrarUsuario
    ){
        this.sevidor.post('/registrar', async (req,res) => {
            try {
                await casoDeUso.executar(
                req.body.name,
                req.body.email,
                req.body.password
             )
            res.status(201).send()
            } catch(err: any) {
                res.status(400).send(err.message)
            }
          
        })
    } 
   
   
}