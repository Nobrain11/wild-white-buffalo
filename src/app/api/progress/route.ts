import { NextResponse } from "next/server";
import { getOrCreateDemoUser, getUserProgress } from "@/lib/store";

export async function GET() {
  const user = getOrCreateDemoUser();
  const progress = getUserProgress(user.id);
  return NextResponse.json(progress);
}
