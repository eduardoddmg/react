import Button from './Button'

function Evento ()
{
    var valor = "clique aqui para disparar um evento:"
    function meuevento ()
    {
        valor = "evento efetuado com sucesso"
    }
    
    return (
        <>
            <p className = "text">{valor}</p>
            <Button text = "Primeiro Evento" />
            <button onClick = {meuevento}>Ativar</button>
        </>
    )
}

export default Evento