import "./card.css"
import { useState, useEffect } from "react"
import axios from "axios"

function CardPrato({ prato, setPrato }) {
  const [pratoCard, setPratoCard] = useState(prato)
  console.log(pratoCard)

  return (
    <div className="background">
      <div className="card">
        <h3>{pratoCard.nome} {pratoCard.tamanho && (`- ${pratoCard.tamanho}`)}</h3>

        <div className="infos">
          <span>Preço: R${pratoCard.preco}</span>
          <span>Categoria: {pratoCard.categoria}</span>
        </div>

        <p>{pratoCard.descricao}</p>

        <div className="botoes">
          <button className="delete" onClick={()=>setPrato(null)}>Fechar</button>
          <button className="edit" onClick={()=>setPrato(null)}>Editar</button>
        </div>

      </div>
    </div>
  )
}

export default CardPrato