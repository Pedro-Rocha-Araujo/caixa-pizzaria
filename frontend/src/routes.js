import { Routes, Route } from "react-router-dom"
import Pedidos from "./components/home/Pedidos"
import Pratos from "./components/home/Pratos"
import Login from "./components/usuarios/Login"
import Cadastro from "./components/usuarios/Cadastro"
import NovoPrato from "./components/formularios/NovoPrato"
import NovoPedido from "./components/formularios/NovoPedido"
import EditarPrato from "./components/formularios/EditarPrato"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Pedidos /> } />
      <Route path="/pratos" element={ <Pratos /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/pratos/novo-prato" element={ <NovoPrato /> } />
      <Route path="/novo-pedido" element={ <NovoPedido /> } />
      <Route path="/editar-prato/:id" element={ <EditarPrato /> } />
    </Routes>
  )
}

export default RouterApp