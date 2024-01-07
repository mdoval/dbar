export async function deleteProducto(id: number) {
    const url = `http://localhost:3000/api/productos/${id}`

    const newProducto = await fetch(url, {
        method: "DELETE",
      });

    let productos = newProducto.json()
    return productos
}