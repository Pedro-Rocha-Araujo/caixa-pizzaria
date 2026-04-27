import "./formularios.css"

function NovoPrato() {
  return (
    <section>
      <h2>Adicionar ao Cardápio</h2>
      <form className="cadastro">
        <input type="text" placeholder="Nome do prato" required />
        <input type="text" placeholder="Tipo (ex: bebida, sobremesa ...)" required />
        <input type="number" placeholder="Tamanho (ex: P, M, G ...)" required />
        <input type="number" placeholder="Valor R$ 000,00" required />
        <button>Adicionar</button>
      </form>
    </section>
  )
}

export default NovoPrato