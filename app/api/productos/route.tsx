import { NextResponse } from "next/server";
import prisma from '@/db/prisma'
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";

export async function GET(request: Request) {
    const usuarioLogueado = await getUsuarioLogueado()
    try {
        const data = await prisma.producto.findMany({where: {
            empresaId: usuarioLogueado.empresa.id
        }})
        return NextResponse.json(data)
    } catch(error) {
        console.log(error)
        return NextResponse.json({message:`Error: ${error}`})
    }
}