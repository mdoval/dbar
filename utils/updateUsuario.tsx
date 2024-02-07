export const updateUsuario = async (usuario: IUsuario | undefined) => {
    const url = `${process.env.API_URL}/usuarios/update`;
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return res;
    } catch (error) {
      console.log("Error en Funcion")
    }
  };
  
  export default updateUsuario;
  