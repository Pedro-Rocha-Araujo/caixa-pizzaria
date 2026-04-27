import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Pizzaria</h1>
        <ul>
          <li><Link to={"/"}>Pedidos</Link></li>
          <li><Link to={"/pratos"}>Pratos</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header