import { NextResponse } from "next/server";
import prisma from '@/db/prisma'

export async function GET(req: Request, {params}:{params: {puntoId: string}}) {
    const puntoId = parseInt(params.puntoId)
    const pedido = await prisma.pedido.findFirst({ where: {puntoId: puntoId, activo:true}})
    return NextResponse.json({pedido})
}