import { NextResponse } from "next/server";
import { getActiveMissions } from "@/lib/store";

export async function GET() {
  const missions = getActiveMissions();
  return NextResponse.json({ missions });
}
