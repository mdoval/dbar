import { cookies } from 'next/headers'

export const getUsuarioLogueado = async () => {
  const url = `${process.env.API_URL}/usuarios/logueado`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      Cookie: cookies().toString()        
    },
    cache: 'no-store'
  });
  const usuarioLogueado = await data.json()
  return usuarioLogueado;
};