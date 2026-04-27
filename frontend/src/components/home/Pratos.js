import { Link } from "react-router-dom"
import "./home.css"

function Pratos() {
  return (
    <section> 
      <h2>Pratos <i className="fa-solid fa-book-open"></i></h2>
      <div className="pratos">

        <Link className="card-link" to="novo-prato">
          <div className="prato adicionar">
            <h3>Adicionar Prato</h3>   
            <i className="fa-solid fa-circle-plus fa-xl"></i> 
          </div>
        </Link>
    
        <div className="prato">
          <div className="infos">
            <h3>Pizza tamanho G</h3>
            <p>Valor: R$ 40,00</p>    
          </div>
          <i className="fa-solid fa-eye fa-xl"></i> 
        </div>

        <div className="prato">
          <div className="infos">
            <h3>Pizza tamanho P</h3>
            <p>Valor: R$ 30,00</p>    
          </div>
          <i className="fa-solid fa-eye fa-xl"></i> 
        </div>

        <div className="prato">
          <div className="infos">
            <h3>Pizza tamanho GG</h3>
            <p>Valor: R$ 60,00</p>    
          </div>
          <i className="fa-solid fa-eye fa-xl"></i> 
        </div>

      </div>
    </section>
  )
}

export default Pratos