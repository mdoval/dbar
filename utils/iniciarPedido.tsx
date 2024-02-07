export async function iniciarPedido(puntoId: number, nombre: string) {    
    const url = `${process.env.API_URL}/mobile/pedidos/init/${puntoId}`
    const newPedido = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({nombre: nombre})
      });

    let puntos = newPedido.json()
    return puntos
}