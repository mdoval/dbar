export async function deletePunto(id: number) {
    const url = `${process.env.API_URL}/api/puntos/${id}`

    const newPunto = await fetch(url, {
        method: "DELETE",
      });

    let puntos = newPunto.json()
    return puntos
}