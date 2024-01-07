export async function updateProducto(id: number, descripcion: string, precio: number, disponible: boolean) {
    const url = `http://localhost:3000/api/productos/${id}`

    const newProducto = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({descripcion: descripcion, precio: precio, disponible: disponible})
      });

    let productos = newProducto.json()
    return productos
}