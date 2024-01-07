export async function updatePunto(id: number, descripcion: string) {
    const url = `http://localhost:3000/api/puntos/${id}`

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