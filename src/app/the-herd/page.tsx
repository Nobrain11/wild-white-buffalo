import { PageShell, EmptyState } from "@/components/PageShell";
import Link from "next/link";

export default function TheHerdPage() {
  return (
    <PageShell
      title="The Herd"
      subtitle="Member directory, ranks, and public profiles. XP is earned through verified contribution."
      activeHref="/the-herd"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {[
          { rank: "Calf", xp: "0", color: "text-silver" },
          { rank: "Trail Scout", xp: "50", color: "text-ice" },
          { rank: "Young Bull", xp: "250", color: "text-cyan" },
          { rank: "Herd Runner", xp: "1,000", color: "text-cyan" },
          { rank: "Storm Bringer", xp: "5,000", color: "text-violet-glow" },
          { rank: "White Buffalo", xp: "20,000", color: "text-violet-glow" },
          { rank: "Herd Legend", xp: "50,000", color: "text-ice" },
        ].map((r) => (
          <div key={r.rank} className="rounded-xl border border-white/5 bg-charcoal/40 p-4">
            <div className={`text-lg font-bold ${r.color}`}>{r.rank}</div>
            <div className="text-sm text-silver mt-1">{r.xp} XP</div>
          </div>
        ))}
      </div>

      <EmptyState
        title="No members listed yet"
        description="The community directory will appear here once members join and opt into public profiles. No seeded or fake users."
      />

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/profile" className="rounded-full bg-cyan/10 border border-cyan/30 px-5 py-2 text-sm font-medium text-cyan hover:bg-cyan/20 transition">
          View your profile
        </Link>
        <Link href="/leaderboard" className="rounded-full border border-white/10 px-5 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition">
          Leaderboards
        </Link>
      </div>
    </PageShell>
  );
}
