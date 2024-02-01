import { NextResponse } from "next/server"
import prisma from '@/db/prisma'

export async function GET(req: Request, { params }: {params: {puntoId: string}}) {    
    const puntoId = parseInt(params.puntoId)
    try {
         let punto = await prisma.punto.findUnique({
            where: { id: puntoId },
        })
        //console.log(punto)
        return NextResponse.json(punto)
    }catch(error) {
        console.log(error)
        return NextResponse.json({message: error})
    }
}