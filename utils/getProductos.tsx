import { cookies } from "next/headers";

export async function getProductos() {
    const url = `${process.env.API_URL}/productos`

    const data = await fetch(url, {
        method: "GET",
        headers: {
          Cookie: cookies().toString()        
        },
        cache: 'no-store'
      });

    let productos = data.json()
    return productos
}