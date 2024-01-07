export async function deletePunto(id: number) {
    const url = `http://localhost:3000/api/puntos/${id}`

    const newPunto = await fetch(url, {
        method: "DELETE",
      });

    let puntos = newPunto.json()
    return puntos
}