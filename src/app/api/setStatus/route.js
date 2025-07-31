import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    // Simulate saving admin action
    console.log("Admin action received:", body);

    if (body.action === "Update_Status") {
      const { id, newStatus } = body;
      if (!id || !newStatus) {
        throw new Error("Complaint ID and new status are required.");
      }

      const updatedComplain = await prisma.complain.update({
        where: { complainId: id },
        data: { C_status: newStatus },
      });

      return NextResponse.json(
        { success: true, data: updatedComplain },
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
