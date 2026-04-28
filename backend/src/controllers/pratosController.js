import db from "../model/db.js"

export function getPratos(request, response) {
  try {
    const q = "SELECT * FROM pratos"
    db.query(q, (erro, data)=>{
      if(erro){
        return response.status(500).json({Erro: "Erro ao pegar os pratos no banco!"})
      }
      return response.status(200).json(data)
    })
  } catch {
    return response.status(500).json({Erro: "Erro ao buscar os pratos!"})
  }
}
export function getPrato(request, response) {
  try {
    const { id } = request.params
    const q = "SELECT * FROM pratos WHERE id = ?"
    db.query(q, [id], (erro, data)=>{
      if(erro) {
        return response.status(500).json({Erro: "Erro ao buscar o prato em questão!"})
      }
      return response.status(200).json(data[0])
    })
  } catch {
    return response.status(500).json({Erro: "Erro ao buscar o prato!"})
  }
}
 