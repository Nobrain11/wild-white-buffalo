import { PageShell, EmptyState } from "@/components/PageShell";

export default function StampedePage() {
  return (
    <PageShell
      title="Stampede"
      subtitle="Missions, streaks, and server-verified XP. Every award is recorded with an idempotency key."
      activeHref="/stampede"
    >
      <div className="grid gap-6 lg:grid-cols-2 mb-10">
        <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6">
          <h2 className="text-lg font-bold text-ice mb-4">Mission Types</h2>
          <ul className="space-y-2 text-silver text-sm">
            <li>• Daily — check-in, read Field Notes, explore a feature</li>
            <li>• Weekly — create a meme, join discussion, submit ideas</li>
            <li>• One-time & special events</li>
            <li>• Creative, learning, and community participation</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6">
          <h2 className="text-lg font-bold text-ice mb-4">Rules</h2>
          <ul className="space-y-2 text-silver text-sm">
            <li>• Server controls all XP awards</li>
            <li>• Duplicate claims blocked via idempotency keys</li>
            <li>• Page refresh never grants unlimited XP</li>
            <li>• Streaks use consistent server-side timezone</li>
            <li>• Moderator reversals require auditable reason</li>
          </ul>
        </div>
      </div>

      <EmptyState
        title="No active missions yet"
        description="Daily and weekly missions will appear here once configured by admins. Claims are server-validated only."
      />
    </PageShell>
  );
}
