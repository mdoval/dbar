export async function productoDisponible(id: number, disponible: boolean) {
    const url = `${process.env.API_URL}/productos/disponible/${id}`

    const newProducto = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(disponible)
      });

    let productos = newProducto.json()
    return productos
}