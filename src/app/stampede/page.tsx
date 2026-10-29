"use client";

import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import Link from "next/link";

interface Mission {
  id: string;
  title: string;
  description: string;
  category: string;
  xpReward: number;
  lootReward: number;
  completed?: boolean;
}

interface Progress {
  user: {
    id: string;
    displayName: string;
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
  dailyMissions: Mission[];
}

export default function StampedePage() {
  const [data, setData] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function load() {
    try {
      const res = await fetch("/api/progress");
      const json = await res.json();
      setData(json);
    } catch {
      setMessage("Failed to load progress");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function claim(missionId: string) {
    setClaiming(missionId);
    setMessage(null);
    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ missionId }),
      });
      const json = await res.json();
      if (!res.ok) {
        setMessage(
          json.alreadyClaimed
            ? "Already claimed for this period"
            : json.error || "Claim failed"
        );
      } else {
        setMessage("Mission complete. XP updated.");
        await load();
      }
    } catch {
      setMessage("Network error");
    } finally {
      setClaiming(null);
    }
  }

  return (
    <PageShell
      title="Stampede"
      subtitle="Missions, streaks, and server-verified XP. Every award uses an idempotency key."
      activeHref="/stampede"
    >
      {loading && (
        <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-10 text-center text-silver">
          Loading missions…
        </div>
      )}

      {!loading && data && (
        <>
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm text-cyan uppercase tracking-wider">Current Rank</div>
                <div className="text-2xl font-bold text-ice mt-1">{data.progress.current}</div>
                <div className="text-silver text-sm mt-1">{data.user.xp.toLocaleString()} XP</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-silver">Community Loot</div>
                <div className="text-xl font-semibold text-ice">{data.user.lootBalance}</div>
              </div>
            </div>
            {data.progress.next && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-silver mb-1">
                  <span>Progress to {data.progress.next}</span>
                  <span>{data.progress.xpForNext} XP needed</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan to-violet-glow transition-all"
                    style={{ width: `${Math.round(data.progress.progress * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {message && (
            <div className="mb-6 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ice">
              {message}
            </div>
          )}

          <h2 className="text-lg font-bold text-ice mb-4">Daily Missions</h2>
          <div className="grid gap-4 mb-10">
            {data.dailyMissions.map((m) => (
              <div
                key={m.id}
                className="rounded-xl border border-white/5 bg-charcoal/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="font-semibold text-ice">{m.title}</div>
                  <p className="text-sm text-silver mt-1">{m.description}</p>
                  <div className="flex gap-3 mt-2 text-xs">
                    <span className="text-cyan">+{m.xpReward} XP</span>
                    <span className="text-violet-glow">+{m.lootReward} Loot</span>
                  </div>
                </div>
                <button
                  type="button"
                  disabled={m.completed || claiming === m.id}
                  onClick={() => claim(m.id)}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition ${
                    m.completed
                      ? "bg-white/5 text-silver cursor-default"
                      : "bg-cyan/15 border border-cyan/40 text-cyan hover:bg-cyan/25"
                  }`}
                >
                  {m.completed
                    ? "Completed"
                    : claiming === m.id
                      ? "Claiming…"
                      : "Claim"}
                </button>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6">
              <h3 className="font-bold text-ice mb-3">Rules</h3>
              <ul className="space-y-2 text-sm text-silver">
                <li>• Server controls all XP awards</li>
                <li>• Duplicate claims blocked via idempotency keys</li>
                <li>• Daily missions reset at UTC midnight</li>
                <li>• Page refresh never grants extra XP</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6">
              <h3 className="font-bold text-ice mb-3">More</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/quests" className="text-sm text-cyan hover:underline">
                  Daily Quests
                </Link>
                <Link href="/leaderboard" className="text-sm text-cyan hover:underline">
                  Leaderboard
                </Link>
                <Link href="/profile" className="text-sm text-cyan hover:underline">
                  Your Profile
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </PageShell>
  );
}
