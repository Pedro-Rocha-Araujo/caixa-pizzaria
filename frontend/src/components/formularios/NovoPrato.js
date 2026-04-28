import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import "./formularios.css"

function NovoPrato() {
  const [nome, setNome] = useState("")
  const [tipo, setCategoria] = useState("")
  const [descricao, setDescricao] = useState("")
  const [tamanho, setTamanho] = useState("")
  const [valor, setValor] = useState("")

  function enviarFormulario(e) {
    e.preventDefault()
    toast.success("Prato cadastrado!")
  }

  return (
    <section>
      <h2>Adicionar ao Cardápio</h2>
      <form className="cadastro">
        <input type="text" placeholder="Nome do Prato" required
          onChange={(e)=>setNome(e.target.value)}
        />

        <input type="number" placeholder="Valor R$ 000,00" required
          onChange={(e)=>setValor(e.target.value)}
        />

        <textarea placeholder="Descrição do lanche" 
          onChange={(e)=>setDescricao(e.target.value)}>
        </textarea>

        <select name="categoria" onChange={(e)=>setCategoria(e.target.value)} >
          <option value="" disabled selected hidden >Selecione uma Categoria</option>
          <option value="Lanche">Lanche</option>
          <option value="Bebida">Bebida</option>
          <option value="Sobremesa">Sobremesa</option>
        </select>
        
        <select name="tamanho" onChange={(e)=>setTamanho(e.target.value)}>
          <option value="" disabled selected hidden >Selecione um Tamanho</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
        <button>Adicionar</button>
      </form>
    </section>
  )
}

export default NovoPrato