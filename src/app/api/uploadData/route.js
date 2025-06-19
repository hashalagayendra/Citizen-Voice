import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function POST(req) {
  const data = await req.json();
  console.log("api runnibg");

  const compain = await prisma.complain.create({
    data: data,
  });

  try {
    console.log(compain);
    return NextResponse.json(
      { message: "complain created successfully", data: compain },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "complain created error", data: e },
      { status: 200 }
    );
  }
}
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ messege: err.message }, { status: 500 });
  }
}
