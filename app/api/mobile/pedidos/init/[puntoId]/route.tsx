import { NextResponse } from "next/server";
import prisma from '@/db/prisma'
import { getPunto } from "@/utils/getPunto";

export async function POST(req: Request, {params}:{params: {puntoId: string, nombre: string}}) {
    const puntoId = parseInt(params.puntoId)
    const punto = await getPunto(puntoId)
    const { nombre } = await req.json()
    try {
        const newPedido = await prisma.pedido.create({data: {puntoId: punto.id, nombre: nombre, empresaId: punto.empresaId, activo: true}})
        return NextResponse.json(newPedido)
    } catch(error) {
        //console.log(error)
        return NextResponse.json({error: error})
    }
}