import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Produto from "./pages/Produto";
import Fornecedor from "./pages/Fornecedor";
import Associacao from "./pages/Associacao";


const apiSimulada = {
  // 1. Endpoint de Estoque Baixo: Filtra produtos com menos de 5 unidades
  getEstoqueBaixo: (listaProdutos) => {
    return listaProdutos.filter(p => p.quantidade < 5);
  },
  
  // 2. Endpoint de Categoria: Filtra produtos por tipo
  getPorCategoria: (listaProdutos, categoria) => {
    return listaProdutos.filter(p => p.categoria === categoria);
  }
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/fornecedores">Fornecedores</Link>
          </li>
          <li>
            <Link to="/associacao">Associação</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/produtos" element={<Produto />} />
        <Route path="/fornecedores" element={<Fornecedor />} />
        <Route path="/associacao" element={<Associacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

