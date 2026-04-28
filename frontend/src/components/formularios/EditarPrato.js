import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "./formularios.css"

function EditarPrato() {
  const [nome, setNome] = useState("")
  const [categoria, setCategoria] = useState("")
  const [descricao, setDescricao] = useState("")
  const [tamanho, setTamanho] = useState("")
  const [valor, setValor] = useState("")

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    async function getPrato() {
      const response = await axios.get("http://localhost:4000/prato/"+id)
      console.log(response.data)
      setNome(response.data.nome)
      setCategoria(response.data.categoria)
      setDescricao(response.data.descricao)
      setTamanho(response.data.tamanho)
      setValor(response.data.preco)
    }
    getPrato()
  }, [id])

  async function salvarEdicao(e) {
    e.preventDefault()
    try {
      const response = await axios.put("http://localhost:4000/put-prato/"+id, {
        nome: nome,
        categoria: categoria,
        descricao: descricao,
        preco: valor,
        tamanho: tamanho
      })
      navigate("/pratos")
      toast.success("Edição salva!")
    } catch {
      toast.error("Erro ao editar")
    }
  }

  return (  
    <section>
      <h2>Editar Prato</h2>
      <form onSubmit={salvarEdicao} className="cadastro">
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
        

        <button>Salvar</button>
      </form>
    </section>
  )
}

export default EditarPrato