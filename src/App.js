import './App.css';
import OutraLista from './componentes/OutraLista';

function App() {

  const meuItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderizando Listas</h1>
      <OutraLista itens = "texto"/>
    </div>
  );
}

export default App;
