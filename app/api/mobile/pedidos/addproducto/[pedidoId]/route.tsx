import { NextResponse } from "next/server";
import prisma from '@/db/prisma'

export async function POST(req: Request, {params}:{params: {pedidoId: number}}) {
    console.log(req.body)
    try {
        //const newPedidoItem = await prisma.pedidoItem.create({data: {pedidoId: params.pedidoId, precio: 200, productoId: 1}})
        //return NextResponse.json(newPedidoItem)
        return NextResponse.json({message: "hola"})
    } catch(error) {
        //console.log(error)
        return NextResponse.json({error: error})
    }
}