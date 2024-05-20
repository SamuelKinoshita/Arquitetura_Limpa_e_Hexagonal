import RegistrarUsuario from '../../src/core/usuario/RegistrarUsuario'
import UsuarioEmMemoria from '../../src/adapters/db/UsuarioEmMemoria' 
import InverterSenha from '../../src/adapters/auth/InverterSenha'
import SenhaComEspaco from '../../src/adapters/auth/SenhaComEspaco'
import ColecaoUsuarioDB from '../../src/adapters/db/knex/ColecaoUsuarioDB'
import CriptoReal from '../../src/adapters/auth/CriptoReal'

test('Testar senha cript', async () => {
    const colecao = new UsuarioEmMemoria()
    const proverdorCript= new InverterSenha()

    const casoDeUso = new RegistrarUsuario(colecao,proverdorCript)

    const usuario = await casoDeUso.executar('João',"joao@hotmail.com",'123456')

    expect(usuario).toHaveProperty('id')
    expect(usuario.name).toBe('João')
    expect(usuario.password).toBe('654321')
})

test('Testar senha com espaco', async () => {
    const colecao = new UsuarioEmMemoria()
    const proverdorCript= new SenhaComEspaco()

    const casoDeUso = new RegistrarUsuario(colecao,proverdorCript)
    const usuario =  await casoDeUso.executar('João',"joao@hotmail.com",'123456')

    expect(usuario).toHaveProperty('id')
    expect(usuario.name).toBe('João')
    expect(usuario.password).toBe('1 2 3 4 5 6')
})


test('Testar criptografia real', async () => {
    const colecao = new UsuarioEmMemoria()
    const proverdorCript= new CriptoReal()
    const casoDeUso = new RegistrarUsuario(colecao,proverdorCript)

    const usuario = await casoDeUso.executar('João',"joao@hotmail.com",'123456')
   
    // console.log(usuario.password)

    expect(usuario).toHaveProperty('id')
    expect(usuario.name).toBe('João')
    expect(proverdorCript.comparar('123456',usuario.password!)).toBeTruthy()
})


test('Deve lançar um erro ao cadastrar usuario', async () => {
    const colecao = new UsuarioEmMemoria()
    const proverdorCript= new CriptoReal()
    const casoDeUso = new RegistrarUsuario(colecao,proverdorCript)

    const name = 'João'
    const email = 'joao@hotmail.com'
    const passord = '123456'

    await casoDeUso.executar(name,email,passord)
    const exec = async () => await casoDeUso.executar(name,email,passord)

    await expect(exec).rejects.toThrow('Usuario ja existe')
})

test.skip('Deve registrar um usuario no banco real', async () => {
    const colecao = new ColecaoUsuarioDB()
    const proverdorCript= new CriptoReal()
    const casoDeUso = new RegistrarUsuario(colecao,proverdorCript)

    const usuario = await casoDeUso.executar(
        'João',
        "joao@hotmail.com",
        '123456'
    )

    expect(usuario).toHaveProperty('id')
    expect(usuario.name).toBe('João')
    expect(proverdorCript.comparar('123456',usuario.password!)).toBeTruthy()
})

