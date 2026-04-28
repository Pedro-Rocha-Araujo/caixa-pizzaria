import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import CardPrato from "../elements/card/CardPrato"
import axios from "axios"
import "./home.css"

function Pratos() {
  const [pratos, setPratos] = useState([])
  const [pratoCard, setPratoCard] = useState()

  useEffect(()=>{
    async function getPratos() {
      const response = await axios.get("http://localhost:4000/pratos")
      setPratos(response.data)
    }
    getPratos()
  }, [])

  return (
    <section>
      { pratoCard && (
        <CardPrato prato={pratoCard} setPrato={setPratoCard} />
      ) } 
      <h2>Pratos <i className="fa-solid fa-book-open"></i></h2>
      <div className="pratos">

        <Link className="card-link" to="novo-prato">
          <div className="prato adicionar">
            <h3>Adicionar Prato</h3>   
            <i className="fa-solid fa-circle-plus fa-xl"></i> 
          </div>
        </Link>
    
        {pratos.map((prato, index)=>{
          return (
            <div onClick={()=>setPratoCard(prato)} key={prato.id} className="prato">
              <div className="infos">
                <h3>{prato.nome} Tamanho {prato.tamanho}</h3>
                <p>Valor: R$ {prato.preco}</p>    
              </div>
              <i className="fa-solid fa-eye fa-xl"></i> 
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Pratos