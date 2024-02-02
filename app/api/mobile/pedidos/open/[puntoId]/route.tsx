import { NextResponse } from "next/server";
import prisma from '@/db/prisma'
import { getPunto } from "@/utils/getPunto";

export async function POST(req: Request, {params}:{params: {puntoId: string}}) {
    const puntoId = parseInt(params.puntoId)
    const punto = await getPunto(puntoId)
    try {
        const newPedido = await prisma.pedido.create({data: {puntoId: punto.id, empresaId: punto.empresaId, activo: true}})
        console.log(newPedido)
        return NextResponse.json(newPedido)
    } catch(error) {
        return NextResponse.json({error: error})
    }
}