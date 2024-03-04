import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Sidebar from "./components/Sidebar";
import Filtro from "./components/Filtro";
import Ordenacao from "./components/Ordenacao";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(resposta => resposta.json())
      .then(dados => setDados(dados))
  }, [])

  console.log(dados)

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <Card />
      </div>
    </div>
  );
}

export default App;
