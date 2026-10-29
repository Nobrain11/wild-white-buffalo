import { PageShell, EmptyState } from "@/components/PageShell";

export default function CouncilPage() {
  return (
    <PageShell
      title="The Council"
      subtitle="Submit ideas, vote, comment, and track status. Off-chain community input — not binding on-chain governance."
      activeHref="/council"
    >
      <div className="flex flex-wrap gap-2 mb-8 text-sm">
        {["New", "Under Review", "Community Voting", "Accepted", "In Development", "Released", "Declined"].map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-silver">
            {s}
          </span>
        ))}
      </div>
      <EmptyState
        title="No proposals yet"
        description="Ideas submitted by members will appear here. Duplicate votes are prevented. Moderators manage status transitions."
      />
    </PageShell>
  );
}
