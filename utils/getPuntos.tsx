import { cookies } from "next/headers";

export async function getPuntos() {
    const url = `${process.env.API_URL}/puntos`

    const data = await fetch(url, {
        method: "GET",
        headers: {
          Cookie: cookies().toString()        
        },
        cache: 'no-store'
      });

    let puntos = data.json()
    return puntos
}