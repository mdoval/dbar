//import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado"
import { NextResponse } from "next/server"

export async function PUT(req: Request, { params }: {params: {id: string}}) {    
    const puntoId = parseInt(params.id)
    const data = await req.json()
//    const user = await getUsuarioLogueado()
    let updatedPunto = null
    try {
        updatedPunto = await prisma.punto.update({
            where: { id: puntoId },
            data: {descripcion: data}  
        })
        return NextResponse.json(updatedPunto)
    }catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}

export async function DELETE(req: Request, { params }: {params: {id: string}}) {    
    const puntoId = parseInt(params.id)
    //const data = await req.json()
//    const user = await getUsuarioLogueado()
    let deletedPunto = null
    try {
        deletedPunto = await prisma.punto.delete({
            where: { id: puntoId },
        })
        return NextResponse.json(deletedPunto)
    }catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}