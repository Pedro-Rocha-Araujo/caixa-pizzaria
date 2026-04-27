import { Routes, Route } from "react-router-dom"
import Pedidos from "./components/home/Pedidos"
import Pratos from "./components/home/Pratos"
import Login from "./components/usuarios/Login"
import Cadastro from "./components/usuarios/Cadastro"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Pedidos /> } />
      <Route path="/pratos" element={ <Pratos /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
    </Routes>
  )
}

export default RouterApp