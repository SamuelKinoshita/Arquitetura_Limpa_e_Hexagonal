import ProvedorDeCriptografia from "../../app/usuario/ProvedorDeCriptografica";

export default class SenhaComEspaco implements ProvedorDeCriptografia {
    
    criptografar(senha: string): string {
        return  senha.split('').join(' ')
    }
    comparar(senha: string, senhaCriptografada: string): boolean {
        const senhaFornecida = this.criptografar(senha)
        return  senhaFornecida === senhaCriptografada
    }
} 