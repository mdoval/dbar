import { cookies } from "next/headers";

export async function getPunto(puntoId: number) {
    const url = `${process.env.API_URL}/mobile/puntos/${puntoId}`

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