export async function addPedidoItem(pedidoId: number, productoId: number, precio: number) {    
    const url = `http://localhost:3000/api/mobile/pedidos/addproducto/${pedidoId}`
    //console.log(pedidoId)
    //console.log(productoId)
    //console.log(url)
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