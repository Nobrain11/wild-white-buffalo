"use client";

import { useEffect, useState } from "react";
import { PageShell, EmptyState } from "@/components/PageShell";

interface Entry {
  rank: number;
  userId: string;
  displayName: string;
  username: string;
  xp: number;
  buffaloRank: string;
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then((d) => setEntries(d.leaderboard || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageShell
      title="Leaderboard"
      subtitle="Rankings calculated from actual stored XP. Empty until members earn points."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {["All-time", "Weekly", "Monthly", "Missions", "Participation"].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              tab === "All-time"
                ? "border-cyan/40 bg-cyan/10 text-cyan"
                : "border-white/10 bg-white/5 text-silver hover:text-ice"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading && (
        <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-10 text-center text-silver">
          Loading leaderboard…
        </div>
      )}

      {!loading && entries.length === 0 && (
        <EmptyState
          title="No rankings yet"
          description="Complete missions in Stampede to appear on the board. Only real XP counts."
        />
      )}

      {!loading && entries.length > 0 && (
        <div className="rounded-2xl border border-white/5 bg-charcoal/40 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/5 text-silver">
              <tr>
                <th className="px-5 py-3 font-medium">#</th>
                <th className="px-5 py-3 font-medium">Member</th>
                <th className="px-5 py-3 font-medium">Rank</th>
                <th className="px-5 py-3 font-medium text-right">XP</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.userId} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <td className="px-5 py-3 text-silver">{e.rank}</td>
                  <td className="px-5 py-3">
                    <div className="text-ice font-medium">{e.displayName}</div>
                    <div className="text-xs text-silver">@{e.username}</div>
                  </td>
                  <td className="px-5 py-3 text-cyan">{e.buffaloRank}</td>
                  <td className="px-5 py-3 text-right text-ice font-medium">{e.xp.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </PageShell>
  );
}
