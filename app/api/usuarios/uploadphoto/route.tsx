import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function POST(req: Request) {
  const data = await req.formData();

  const userId = data.get("id") as unknown as string
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = `public/images/${file.name}`
  await writeFile(path, buffer)
//  console.log(`open ${path} to see the uploaded file`)
  try {
    const newUsuario = await prisma.usuario.update({
      where: { id: parseInt(userId) },
      data: { avatar: `http://localhost:3000/images/${file.name}`},
    });
    return NextResponse.json(newUsuario);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
