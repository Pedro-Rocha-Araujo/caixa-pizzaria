function Pedidos() {
  return (
    <section>
      <h2>Pedidos <i className="fa-solid fa-clipboard"></i></h2>
      <div className="pedidos">

        <div className="pedido adicionar">
          <h3>Adicionar Pedido</h3>
          <i className="fa-solid fa-circle-plus fa-xl"></i>  
        </div>

        <div className="pedido">
          <h3>Mesa 4</h3>
          <i className="fa-solid fa-eye fa-xl"></i> 
        </div>

        <div className="pedido">
          <h3>Mesa 8</h3>
          <i className="fa-solid fa-eye fa-xl"></i> 
        </div>

      </div>
    </section>
  )
}

export default Pedidos