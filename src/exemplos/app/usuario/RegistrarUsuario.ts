import ProvedorDeCriptografia from "./ProvedorDeCriptografica"
import ColecaoUsuario from "./ColecaoUsuario"
import Usuario from "./Usuario"
import Id from "../shared/id"


export default class RegistratUsuario {

   constructor(
    private colecao: ColecaoUsuario,
    private proverdorCripto: ProvedorDeCriptografia
   ){}
   
   async executar(name: string, email: string, password: string): Promise<Usuario> {

        const passCripto = this.proverdorCripto.criptografar(password)

       const usuarioExistete = await this.colecao.buscarPorEmail(email)
       if(usuarioExistete) throw new Error('Usuario ja existe') 
        
        const usuario: Usuario = {
            id: Id.gerar(),
            name,
            email,
            password: passCripto
        }


        this.colecao.inserir(usuario)
        return usuario
    }

}