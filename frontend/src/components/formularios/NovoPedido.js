import "./formularios.css"

function NovoPedido() {
  return (
    <section>
      <h2>Adicionar Pedido</h2>
      <form className="cadastro">
        <input type="number" placeholder="Mesa" required />
        <select>
          <option>Pizza de Calabresa</option>
        </select>
        <button>Adicionar</button>

        <div className="carrinho">
          <h2>Visualizar pedido</h2>
          <div className="listagem-carrinho">

            <div className="prato" id="pequeno">
              <div className="infos">
                <h3>Pizza tamanho G</h3>
                <p>Valor: R$ 40,00</p>    
              </div>
              <i className="fa-solid fa-eye fa-xl"></i> 
            </div>

            <div className="prato" id="pequeno">
              <div className="infos">
                <h3>Pizza tamanho G</h3>
                <p>Valor: R$ 40,00</p>    
              </div>
              <i className="fa-solid fa-eye fa-xl"></i> 
            </div>

          </div>
            <p className="valor">Valor total: R$ 000,00</p>
        </div>

        <button>Finalizar</button>
      </form>
    </section>
  )
}

export default NovoPedido