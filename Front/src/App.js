import "./styles.css";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./App/LoginScreen";
import RegisterScreen from "./App/RegisterScreen";
import HomeScreen from "./App/HomeScreen";
import CadastrarCompraScreen from "./App/CadastrarCompraScreen";
import CadastrarFornecedoresScreen from "./App/CadastrarFornecedoresScreen";
import FornecedoresScreen from "./App/FornecedoresScreen";
import EditCompraScreen from "./App/EditCompraScreen";
import EditFornecedorScreen from "./App/EditFornecedorScreen";
import ProdutosScreen from "./App/ProdutosScreen";
import EditUserScreen from "./App/EditUserScreen";
import Footer from "./Componentes/Footer/Footer";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route
          exact
          path="/cadastrarcompra"
          element={<CadastrarCompraScreen />}
        />
        <Route exact path="/editcompra/:id" element={<EditCompraScreen />} />
        <Route exact path="/fornecedores" element={<FornecedoresScreen />} />
        <Route
          exact
          path="/cadastrarfornecedores"
          element={<CadastrarFornecedoresScreen />}
        />
        <Route
          exact
          path="/editfornecedor/:id"
          element={<EditFornecedorScreen />}
        />
        <Route exact path="/produtos" element={<ProdutosScreen />} />
        <Route exact path="/edituser" element={<EditUserScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}
