import { NextResponse } from "next/server";
import { getOrCreateDemoUser } from "@/lib/store";

export async function GET() {
  const user = getOrCreateDemoUser();
  return NextResponse.json({ user });
}
