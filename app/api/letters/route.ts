import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const letters = await db.letter.findMany();
    return NextResponse.json(letters);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
