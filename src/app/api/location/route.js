import { NextRequest, NextResponse } from "next/server";

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
