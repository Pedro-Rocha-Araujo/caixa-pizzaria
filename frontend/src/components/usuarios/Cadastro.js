import { Link } from "react-router-dom"
import "./usuarios.css"

function Cadastro() {
  return (
    <div className="login">
      <div className="header-login">
        <h1>Cadastro <i class="fa-solid fa-user"></i></h1>
      </div>

      <div className="main-login">
        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu E-mail" />
          <input type="password" placeholder="Digite sua Senha" />
          <button>Cadastrar-se</button>
        </form>
      </div>
      <div className="footer-login">
        <p>Já possui uma conta? <Link to="/login">Logar-se</Link>.</p>
      </div>
    </div>
  )
}

export default Cadastro