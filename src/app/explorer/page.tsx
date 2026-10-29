import { PageShell, EmptyState } from "@/components/PageShell";

export default function ExplorerPage() {
  return (
    <PageShell
      title="The Explorer"
      subtitle="Read-only Solana token and account verification. Informational only — not financial advice."
      activeHref="/explorer"
    >
      <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6 mb-8">
        <label className="block text-sm text-silver mb-2">Token mint address</label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Solana mint address..."
            className="flex-1 rounded-lg border border-white/10 bg-midnight px-4 py-2.5 text-ice placeholder:text-white/30 focus:outline-none focus:border-cyan/50"
            disabled
          />
          <button
            type="button"
            disabled
            className="rounded-lg bg-cyan/20 border border-cyan/30 px-5 py-2.5 text-sm font-medium text-cyan opacity-60 cursor-not-allowed"
          >
            Check
          </button>
        </div>
        <p className="mt-3 text-xs text-silver">
          Official $WWB mint must be supplied by the project owner before token-specific data is enabled.
        </p>
      </div>
      <EmptyState
        title="Awaiting configuration"
        description="Server-side RPC verification (getGenesisHash, finalized commitment, mint ownership checks) is implemented but requires protected SOLANA_RPC_URL and network settings."
      />
    </PageShell>
  );
}
