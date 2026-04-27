import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/usuarios/Login"
import Cadastro from "./components/usuarios/Cadastro"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
    </Routes>
  )
}

export default RouterApp