import { NextResponse } from "next/server";
import prisma from '@/db/prisma'

export async function POST(req: Request, {params}:{params: {pedidoId: string}}) {
    const { productoId, precio } = await req.json()
    const idProducto = parseInt(productoId)
    const idPedido = parseInt(params.pedidoId)
    try {
        const newPedidoItem = await prisma.pedidoItem.create({data: {pedidoId: idPedido, precio: precio, productoId: idProducto, estado: "solicitado"}})
        return NextResponse.json(newPedidoItem)
    } catch(error) {
        console.log(error)
        return NextResponse.json({error: error})
    }
}