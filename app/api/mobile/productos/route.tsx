import { NextResponse } from "next/server";
import prisma from '@/db/prisma'

export async function GET(request: Request) {
    try {
        const data = await prisma.producto.findMany({where: {
            empresaId: 1
        }})
        return NextResponse.json(data)
    } catch(error) {
        console.log(error)
        return NextResponse.json({message:`Error: ${error}`})
    }
}