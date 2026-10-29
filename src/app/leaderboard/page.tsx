import { PageShell, EmptyState } from "@/components/PageShell";

export default function LeaderboardPage() {
  return (
    <PageShell
      title="Leaderboard"
      subtitle="All-time, weekly, monthly, mission-completion, and participation rankings. Calculated from actual stored activity."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {["All-time", "Weekly", "Monthly", "Missions", "Participation"].map((tab) => (
          <button
            key={tab}
            type="button"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-silver hover:text-ice hover:border-cyan/30 transition"
          >
            {tab}
          </button>
        ))}
      </div>
      <EmptyState
        title="No rankings yet"
        description="Leaderboards populate from real XP awards and mission completions. Empty states are intentional until activity exists."
      />
    </PageShell>
  );
}
