export async function updatePunto(id: number, descripcion: string) {
    const url = `${process.env.API_URL}/puntos/${id}`

    const newPunto = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(descripcion)
      });

    let puntos = newPunto.json()
    return puntos
}