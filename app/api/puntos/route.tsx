import { NextResponse } from "next/server";
import prisma from "@/db/prisma";
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";

export async function GET(request: Request) {
  //console.log("puntos");
  const usuarioLogueado = await getUsuarioLogueado();
  try {
    const data = await prisma.punto.findMany({
      where: {
        empresaId: usuarioLogueado.empresa.id,
      },
      include: { pedidos: true },
    });
    //console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: `Error: ${error}` });
  }
}
