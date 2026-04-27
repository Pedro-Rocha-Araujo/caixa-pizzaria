import { Link } from "react-router-dom"
import "./usuarios.css"

function Login() {
  return (
    <div className="login">
      <div className="header-login">
        <h1>Login <i class="fa-solid fa-user"></i></h1>
      </div>

      <div className="main-login">
        <form>
          <input type="email" placeholder="Campo de E-mail" />
          <input type="password" placeholder="Campo de Senha" />
          <button>Logar-se</button>
        </form>
      </div>

      <div className="footer-login">
        <p>Não possui uma conta? <Link to="/cadastro">Cadastrar-se</Link>.</p>
      </div>
    </div>
  )
}

export default Login