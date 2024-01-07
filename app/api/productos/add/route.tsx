import { NextResponse } from "next/server"
import prisma from '@/db/prisma'
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado"

export async function POST(req: Request) {    
    const data = await req.json()
    const user = await getUsuarioLogueado()
    //console.log(data)
    let newProducto = null
    try {
        newProducto = await prisma.producto.create({data: {descripcion: data.descripcion, precio: data.precio, empresaId: user.empresa.id, disponible: true}} )
        return NextResponse.json(newProducto)
    } catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}