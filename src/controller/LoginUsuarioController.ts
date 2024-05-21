import LoginUsuario from "../core/usuario/LoginUsuario";
import { Express } from "express";
export default class LoginUsuarioController {
    constructor(
        private sevidor: Express,
        private casoDeUso: LoginUsuario
    ){
        this.sevidor.post('/login', async (req,res) => {
            try {
              const usuario =  await casoDeUso.executar(
                req.body.email,
                req.body.password
             )
            res.status(200).json({
                id: usuario.id,
                name: usuario.name,
                email: usuario.email
            })
            } catch(err: any) {
                res.status(403).send(err.message)
            }
          
        })
    } 
   
   
}