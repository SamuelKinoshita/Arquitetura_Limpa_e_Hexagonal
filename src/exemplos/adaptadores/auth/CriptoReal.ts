import bcrypt from "bcrypt";
import ProvedorDeCriptografia from "../../app/usuario/ProvedorDeCriptografica";

export default class CriptoReal implements ProvedorDeCriptografia {
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }
    comparar(senha: string, senhaCriptografada: string): boolean {
        return bcrypt.compareSync(senha,senhaCriptografada)
    }

}