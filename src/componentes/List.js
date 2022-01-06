import Item from './Item'

function List ()
{
    return (
       <>
           <h1>Minha lista</h1>
           <ul>
               <Item marca = "Ferrari" ano_lancamento = {1964}/>
               <Item marca = "Fiat" ano_lancamento = {1964}/>
               <Item marca = "Samsung" ano_lancamento = {1964}/>
               <Item marca = "Apple" ano_lancamento = {1964}/>
           </ul>
       </> 
    )
}

export default List