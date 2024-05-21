import ColecaoUsuario from "./ColecaoUsuario";
import ProvedorDeCriptografia from "./ProvedorDeCriptografica";
import Usuario from "./Usuario";

export default class LoginUsuario {

    constructor(
        private colecao: ColecaoUsuario,
        private proverdorCripto: ProvedorDeCriptografia
    ){}

    async executar(email: string, password: string): Promise<Usuario> {
       const usuarioExistente = await this.colecao.buscarPorEmail(email)
       if(!usuarioExistente) throw new Error('Usuário ja existe') 
       
        const mesmaSenha = this.proverdorCripto.comparar(
                password,
                usuarioExistente.password!
        )
        if (!mesmaSenha) throw new Error('Senha incorreta')
        

        return {...usuarioExistente, password: undefined}     
    }
}