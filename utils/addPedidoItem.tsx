export async function addPedidoItem(pedidoId: number, productoId: number, precio: number) {    
    const url = `${process.env.API_URL}/mobile/pedidos/addproducto/${pedidoId}`
    const newPedido = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({productoId: productoId, precio: precio})
      });

    let pedidoItem = newPedido.json()
    return pedidoItem
}