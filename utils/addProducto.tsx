export async function addProducto(descripcion: string, precio: number) {
    const url = `${process.env.API_URL}/productos/add`

    const newProducto = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({descripcion: descripcion, precio: precio})
      });

    let puntos = newProducto.json()
    return puntos
}