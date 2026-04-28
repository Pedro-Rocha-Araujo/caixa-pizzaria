import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import "./formularios.css"

function NovoPrato() {
  const [nome, setNome] = useState("")
  const [categoria, setCategoria] = useState("")
  const [descricao, setDescricao] = useState("")
  const [tamanho, setTamanho] = useState("")
  const [valor, setValor] = useState("")

  async function enviarFormulario(e) {
    try {
      e.preventDefault()
      const response = await axios.post("http://localhost:4000/post-prato", {
        nome: nome,
        categoria: categoria,
        descricao: descricao,
        preco: Number(valor),
        tamanho: tamanho
      })
      setNome("")
      setCategoria("")
      setDescricao("")
      setValor("")
      setTamanho("")
      toast.success("Prato cadastrado!")
    } catch {
      toast.error("Erro ao cadastrar prato!")
    }
  }

  return (
    <section>
      <h2>Adicionar ao Cardápio</h2>
      <form onSubmit={enviarFormulario} className="cadastro">
        <input type="text" placeholder="Nome do Prato" required
          value={nome} onChange={(e)=>setNome(e.target.value)}
        />

        <input type="number" placeholder="Valor R$ 000,00" required
          value={valor} onChange={(e)=>setValor(e.target.value)}
        />

        <textarea required value={descricao} placeholder="Descrição do lanche" 
          onChange={(e)=>setDescricao(e.target.value)}>
        </textarea>

          <select required value={categoria} name="categoria" onChange={(e)=>setCategoria(e.target.value)} >
            <option value="" disabled selected hidden >Selecione uma Categoria</option>
            <option value="Lanche">Lanche</option>
            <option value="Bebida">Bebida</option>
            <option value="Sobremesa">Sobremesa</option>
          </select>

        { categoria == "Lanche" ? (
          <select required value={tamanho} name="tamanho" onChange={(e)=>setTamanho(e.target.value)}>
            <option value="" disabled selected hidden >Selecione um Tamanho</option>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
          </select>
        ): <></>}
        

        <button>Adicionar</button>
      </form>
    </section>
  )
}

export default NovoPrato