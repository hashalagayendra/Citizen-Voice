import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { success: true, messege: e.message },
      { status: 201 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);

    // Assuming you want to return the body as data
    return NextResponse.json({ success: true, data: body }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 500 } // 500 is more appropriate for errors
    );
  }
}
