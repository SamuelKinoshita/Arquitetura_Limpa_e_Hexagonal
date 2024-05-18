
export default interface ProvedorDeCriptografia {
    criptografar(senha: string): string
    comparar(senha: string, senhaCriptografada: string): boolean
}