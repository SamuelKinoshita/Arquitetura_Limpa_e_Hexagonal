import axios from 'axios'
import Usuario from '../../src/core/usuario/Usuario'

const baseUrl = process.env.API_URL

test('Deve registrar um usuario se não existir', async () => {
    const usuario: Partial<Usuario> = {
        name: 'Samuel',
        email: 'samuel@zmail.com',
        password: '123456'
    }
    const resp  = await axios.post(`${baseUrl}/registrar`, usuario)
    expect(resp.status).toBe(201)
})