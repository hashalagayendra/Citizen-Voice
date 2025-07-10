import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_API_KEY);
console.log(
  "GoogleGenerativeAI initialized with API key:",
  process.env.GENERATIVE_AI_API_KEY
);

export async function POST(request) {
  const { data } = await request.json();

  try {
    console.log("Received data:", data);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(data.prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json(
      { message: "success", data: text },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in AI chat route:", error);
    return NextResponse.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}
