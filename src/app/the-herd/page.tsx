import { PageShell, EmptyState } from "@/components/PageShell";
import Link from "next/link";
import { RANK_THRESHOLDS } from "@/lib/ranks";

export default function TheHerdPage() {
  return (
    <PageShell
      title="The Herd"
      subtitle="Member directory, ranks, and public profiles. XP is earned through verified contribution."
      activeHref="/the-herd"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
        {RANK_THRESHOLDS.map((r) => (
          <div key={r.name} className="rounded-xl border border-white/5 bg-charcoal/40 p-4">
            <div className="text-lg font-bold text-ice">{r.name}</div>
            <div className="text-sm text-cyan mt-1">{r.minXp.toLocaleString()} XP</div>
          </div>
        ))}
      </div>

      <EmptyState
        title="No public members yet"
        description="The community directory will appear here once members join and opt into public profiles. No seeded or fake users are created."
      />

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/profile"
          className="rounded-full bg-cyan/10 border border-cyan/30 px-5 py-2 text-sm font-medium text-cyan hover:bg-cyan/20 transition"
        >
          View your profile
        </Link>
        <Link
          href="/stampede"
          className="rounded-full border border-white/10 px-5 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition"
        >
          Earn XP in Stampede
        </Link>
        <Link
          href="/leaderboard"
          className="rounded-full border border-white/10 px-5 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition"
        >
          Leaderboards
        </Link>
      </div>
    </PageShell>
  );
}
