import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Missing name or email" }, { status: 400 })
    }

    await prisma.user.create({
      data: { name, email },
    })

    return NextResponse.json({ message: "User added successfully" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Database error" }, { status: 500 })
  }
}
