import { useState } from 'react'

function Condicional ()
{
    function enviarEmail(e)
    {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail()
    {
        setUserEmail("")
    }

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    return (
        <>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" value = {userEmail} placeholder='Digite o seu email' onChange = {(e) => setEmail(e.target.value)} />
            </form>
            <button type='submit' onClick={enviarEmail}>Enviar E-mail</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </>
    )
}

export default Condicional