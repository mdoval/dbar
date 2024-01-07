import { NextResponse } from "next/server"

export async function PUT(req: Request, { params }: {params: {id: string}}) {    
    const productoId = parseInt(params.id)
    const data = await req.json()
    let updatedProducto = null
    try {
        updatedProducto = await prisma.producto.update({
            where: { id: productoId },
            data: {descripcion: data.descripcion, precio: data.precio, disponible: data.disponible}  
        })        
        return NextResponse.json(updatedProducto)
    }catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}

export async function DELETE(req: Request, { params }: {params: {id: string}}) {    
    const productoId = parseInt(params.id)
    //const data = await req.json()
//    const user = await getUsuarioLogueado()
    let deletedProducto = null
    try {
        deletedProducto = await prisma.producto.delete({
            where: { id: productoId },
        })
        return NextResponse.json(deletedProducto)
    }catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}