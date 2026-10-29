import { NextResponse } from "next/server";
import { getOrCreateDemoUser, claimMission } from "@/lib/store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const missionId = body?.missionId as string | undefined;

    if (!missionId || typeof missionId !== "string") {
      return NextResponse.json({ error: "missionId required" }, { status: 400 });
    }

    const user = getOrCreateDemoUser();
    const result = claimMission(user.id, missionId);

    if (!result.success) {
      const status = result.alreadyClaimed ? 409 : 400;
      return NextResponse.json(
        { error: result.error, alreadyClaimed: result.alreadyClaimed },
        { status }
      );
    }

    return NextResponse.json({
      success: true,
      user: result.user,
      message: "Mission claimed",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
