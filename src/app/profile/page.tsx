"use client";

import { useEffect, useState } from "react";
import { PageShell, EmptyState } from "@/components/PageShell";
import Link from "next/link";

interface Progress {
  user: {
    id: string;
    displayName: string;
    username: string;
    xp: number;
    rank: string;
    lootBalance: number;
  };
  progress: {
    current: string;
    next: string | null;
    progress: number;
    xpForNext: number;
  };
}

export default function ProfilePage() {
  const [data, setData] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageShell
      title="Your Profile"
      subtitle="XP, rank, streaks, and settings. Public profiles only show opted-in information."
    >
      {loading && (
        <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-10 text-center text-silver">
          Loading profile…
        </div>
      )}

      {!loading && !data && (
        <EmptyState
          title="Sign in to view your profile"
          description="Authentication will use the platform OAuth flow. For now a demo profile is available so you can test XP and missions."
        />
      )}

      {!loading && data && (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1 rounded-2xl border border-white/5 bg-charcoal/40 p-6 text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-cyan/30 to-violet/30 border border-cyan/30 flex items-center justify-center text-2xl font-bold text-ice">
              {data.user.displayName.slice(0, 1)}
            </div>
            <h2 className="mt-4 text-xl font-bold text-ice">{data.user.displayName}</h2>
            <p className="text-sm text-silver">@{data.user.username}</p>
            <div className="mt-4 inline-flex items-center rounded-full bg-cyan/10 border border-cyan/30 px-4 py-1 text-sm text-cyan">
              {data.user.rank}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <div className="text-sm text-silver">Total XP</div>
                  <div className="text-3xl font-bold text-ice">{data.user.xp.toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-silver">Community Loot</div>
                  <div className="text-xl font-semibold text-violet-glow">{data.user.lootBalance}</div>
                </div>
              </div>
              {data.progress.next && (
                <>
                  <div className="flex justify-between text-xs text-silver mb-1">
                    <span>Next: {data.progress.next}</span>
                    <span>{data.progress.xpForNext} XP to go</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan to-violet-glow"
                      style={{ width: `${Math.round(data.progress.progress * 100)}%` }}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/stampede"
                className="rounded-full bg-cyan/15 border border-cyan/40 px-5 py-2 text-sm font-medium text-cyan hover:bg-cyan/25 transition"
              >
                Complete missions
              </Link>
              <Link
                href="/leaderboard"
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition"
              >
                View leaderboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
