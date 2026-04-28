import "./card.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function CardPrato({ prato, setPrato }) {
  const [pratoCard, setPratoCard] = useState(prato)
  const navigate = useNavigate()
  
  
  async function deletarPrato() {
    try { 
      const response = await axios.delete("http://localhost:4000/delete-prato/"+pratoCard.id)
      toast.success("Prato deletado com sucesso!")
      setPrato(null)
      navigate(0)
    } catch {
      toast.error("Erro ao deletar prato!")
    }
  }

  async function editarPrato(id) {
    navigate("/editar-prato/"+id)
  }

  return (
    <div className="background">
      <div className="card">

        <i onClick={deletarPrato} className="fa-solid fa-trash flutuante"></i>

        <h3>{pratoCard.nome} {pratoCard.tamanho && (`- ${pratoCard.tamanho}`)}</h3>

        <div className="infos">
          <span>Preço: R${pratoCard.preco}</span>
          <span>Categoria: {pratoCard.categoria}</span>
        </div>

        <p>{pratoCard.descricao}</p> 

        <div className="botoes">
          <button className="delete" onClick={()=>setPrato(null)}>Fechar</button>
          <button className="edit" onClick={()=>editarPrato(prato.id)}>Editar</button>
        </div>

      </div>
    </div>
  )
}

export default CardPrato