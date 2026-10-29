import { PageShell, EmptyState } from "@/components/PageShell";

export default function PondPage() {
  return (
    <PageShell
      title="WWB Pond"
      subtitle="Community Loot is a non-transferable engagement score. Not a token. Not redeemable for cash. Not an airdrop promise."
      activeHref="/pond"
    >
      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 mb-8 text-sm text-amber-100/90">
        <strong className="text-amber-200">Important:</strong> Community Loot has no monetary value. 
        It cannot be exchanged for $WWB, SOL, or any cryptocurrency. It is used only for community recognition, 
        cosmetic rewards, and eligibility in approved giveaways.
      </div>
      <EmptyState
        title="Loot ledger empty"
        description="Your balance, earning history, and reward catalog will appear here after you complete verified actions."
      />
    </PageShell>
  );
}
