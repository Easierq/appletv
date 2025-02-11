import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const solutions = await db.solution.findMany();
    return NextResponse.json(solutions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
