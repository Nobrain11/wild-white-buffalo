import { NextResponse } from "next/server";
import { getLeaderboard } from "@/lib/store";

export async function GET() {
  const entries = getLeaderboard(50);
  return NextResponse.json({ leaderboard: entries });
}
