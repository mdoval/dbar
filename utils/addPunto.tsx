export async function addPunto(descripcion: string) {
    const url = `${process.env.API_URL}/puntos/add`

    const newPunto = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(descripcion)
      });

    let puntos = newPunto.json()
    return puntos
}