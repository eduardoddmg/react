import { useState } from 'react'

function Form ()
{
    function CadastrarUsuario (e)
    {
        e.preventDefault()
        console.log('Cadastrou o usuário')
        console.log(`Usuario ${name} foi ccadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit = {CadastrarUsuario} >
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id = "name" 
                    name = "name" 
                    placeholder = "Digite o seu nome" 
                    onChange = {(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                    type ="password" 
                    id = "password" 
                    name = "password" 
                    placeholder = "Digite a sua senha" 
                    onChange = {(e) =>  setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form