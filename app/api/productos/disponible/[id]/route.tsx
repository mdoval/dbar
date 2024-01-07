import { NextResponse } from "next/server"

export async function PUT(req: Request, { params }: {params: {id: string}}) {    
    const productoId = parseInt(params.id)
    const data = await req.json()
    let updatedProducto = null
    try {
        updatedProducto = await prisma.producto.update({
            where: { id: productoId },
            data: { disponible: data}  
        })        
        return NextResponse.json(updatedProducto)
    }catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}