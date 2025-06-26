import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Simulate fetching admin actions data
    const data = await prisma.complain.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    // Simulate saving admin action
    console.log("Admin action received:", body);

    // if (!body.action) {
    //   throw new Error("Invalid data: action and timestamp are required");
    // }

    if (body.action === "Search_by_Catogory") {
      console.log("run indide");
      const complaints = await prisma.complain.findMany({
        where: {
          MainTitle: body.MainTitle,
        },
      });

      return NextResponse.json(
        { success: true, data: complaints },
        { status: 200 }
      );
    }

    if (body.action === "Search_by_Sub_Catogory") {
      console.log("run indide");
      const complaints = await prisma.complain.findMany({
        where: {
          SubTitle: body.SubTitle,
        },
      });

      return NextResponse.json(
        { success: true, data: complaints },
        { status: 200 }
      );
    }

    if (body.action === "Search_by_Severity_Level") {
      console.log("run indide");
      const complaints = await prisma.complain.findMany({
        where: {
          Severity_Level: body.Severity_Level,
        },
      });

      return NextResponse.json(
        { success: true, data: complaints },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true, data: body }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 500 }
    );
  }
}
