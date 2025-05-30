import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Incoming body:", body);

    return NextResponse.json({ success: true, body }, { status: 201 });
  } catch (e) {
    console.error("Error saving doctor:", e);
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     await connectDB();
//     const users = await User.find();
//     return NextResponse.json({ success: true, users }, { status: 200 });
//   } catch (e) {
//     console.log("error getting daa " + e);

//     return NextResponse.json(
//       { success: false, message: e.message },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   const users = await prisma.User.findMany();
//   return NextResponse.json({ success: true, users }, { status: 201 });
// }

export async function GET() {
  try {
    const users = await prisma.User.findMany();

    return NextResponse.json({ success: true, users }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 500 }
    );
  }
}
