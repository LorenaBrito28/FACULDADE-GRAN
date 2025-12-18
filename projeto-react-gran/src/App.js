import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Produto from "./pages/Produto";
import Fornecedor from "./pages/Fornecedor";
import Associacao from "./pages/Associacao";

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

