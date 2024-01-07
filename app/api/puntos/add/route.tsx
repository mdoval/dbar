import { NextResponse } from "next/server"
import prisma from '@/db/prisma'
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado"

export async function POST(req: Request) {    
    const data = await req.json()
    const user = await getUsuarioLogueado()
    //console.log(data)
    let newPunto = null
    try {
        newPunto = await prisma.punto.create({data: {descripcion: data, empresaId: user.empresa.id, estado: false}} )
        return NextResponse.json(newPunto)
    }catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}