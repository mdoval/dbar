export async function deleteProducto(id: number) {
    const url = `${process.env.API_URL}/api/productos/${id}`

    const newProducto = await fetch(url, {
        method: "DELETE",
      });

    let productos = newProducto.json()
    return productos
}