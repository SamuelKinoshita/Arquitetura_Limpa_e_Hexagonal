import ProvedorDeCriptografia from "../../core/usuario/ProvedorDeCriptografica";

export default class InvertarSenha implements ProvedorDeCriptografia {

    criptografar(senha: string): string {
        return  senha.split('').reverse().join('')
    }
    comparar(senha: string, senhaCriptografada: string): boolean {
        const senhaFornecida = this.criptografar(senha)
        return  senhaFornecida === senhaCriptografada
    }

} 