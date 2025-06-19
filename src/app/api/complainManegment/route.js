import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();
    if (data.method === "get_user_all_data") {
      const users = await prisma.complain.findMany({
        where: {
          userEmail: data.email,
        },
      });

      return NextResponse.json({ data: users }, { status: 200 });
    }

    // return NextResponse.json({ data: users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
