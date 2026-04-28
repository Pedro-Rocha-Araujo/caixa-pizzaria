import { json } from "express"
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
export function postPrato(request, response) {
  try { 
    const { nome, categoria, descricao, preco, tamanho } = request.body
    const q = "INSERT INTO pratos (nome, categoria, descricao, preco, tamanho) VALUES (?, ?, ?, ?, ?)"
    db.query(q, [nome, categoria, descricao, preco, tamanho], (erro, data)=>{
      if(erro){
        return response.status(500).json({Erro: "Erro ao cadastrar o prato"})
      }
      return response.status(201).json(data)
    })
  } catch {
    return response.status(500).json({Erro: "Erro ao cadstrar prato"})
  }
}
export function putPrato(request, response) {
  try {
    const { nome, categoria, descricao, preco, tamanho } = request.body
    const { id } = request.params
    const q = "UPDATE pratos SET nome = ?, categoria = ?, descricao = ?, preco = ?, tamanho = ? WHERE id = ?"
    db.query(q, [nome, categoria, descricao, preco, tamanho, id], (erro, data)=>{
      if(erro) {
        return response.status(500).json({Erro: "Erro ao editar prato"})
      }
      return response.status(200).json(data)
    })
  } catch {
    return response.status(500).json({Erro: "Erro ao editar o prato!"})
  }
}
export function deletePrato(request, response) {
  try {
    const { id } = request.params
    const q = "DELETE FROM pratos WHERE id = ?"
    db.query(q, [id], (erro, data)=>{
      if(erro) {
        return response.status(500).json({Erro: "Erro ao deletar o prato em questão!"})
      }
      return response.status(200).json(data)
    })
  } catch {
    return response.status(500).json({Erro: "Erro ao deletar o prato!"})
  }
}