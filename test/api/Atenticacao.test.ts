import axios from 'axios'
import Usuario from '../../src/core/usuario/Usuario'

const baseUrl = process.env.API_URL
const usuario: Partial<Usuario> = {
    name: 'Samuel',
    email: 'samuel@zmail.com',
    password: '123456'
}

test('Deve registrar um usuario se não existir', async () => {
    try {
        const resp = await axios.post(`${baseUrl}/registrar`, usuario)
        expect(resp.status).toBe(201)
    } catch (e: any) {
        if (e.response && e.response.status) {
            expect(e.response.status).toBe(400)
            expect(e.response.data).toBe('Usuário ja existe')
        } else {
            // Trate o caso em que o objeto `e` não possui a propriedade `response`
            console.error('Erro inesperado:', e)
        }
    }
})

test('Deve logar com email e senha', async () => {
    const resp = await axios.post(`${baseUrl}/login`, {
        email: usuario.email,
        password: usuario.password
    })
    expect(resp.status).toBe(200)
    expect(resp.data.name).toBe('Samuel')
    expect(resp.data.email).toBe(usuario.email)
})

