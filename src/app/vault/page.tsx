import { PageShell, EmptyState } from "@/components/PageShell";
import { WWB } from "@/lib/config";
import Link from "next/link";

export default function VaultPage() {
  const treasury = WWB.treasuryAddress?.trim();

  return (
    <PageShell
      title="The Vault"
      subtitle="Transparent treasury information. No fabricated balances."
      activeHref="/vault"
    >
      <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6 mb-8 text-sm text-silver space-y-3">
        <p>
          Treasury data is shown only after the project owner confirms an official treasury
          wallet address. On-chain balances are read-only and never invented.
        </p>
        <p>
          Token mint (for reference):{" "}
          <code className="text-ice break-all text-xs">{WWB.mint}</code>
        </p>
      </div>

      {!treasury ? (
        <EmptyState
          title="Treasury address not configured"
          description="Provide the official treasury Solana wallet address to display verified public balances and explorer links. Until then, no treasury figures are shown."
        />
      ) : (
        <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6 mb-8">
          <div className="text-sm text-cyan uppercase tracking-wider mb-2">Treasury wallet</div>
          <code className="text-ice break-all text-sm">{treasury}</code>
          <div className="mt-4">
            <a
              href={`https://solscan.io/account/${treasury}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan hover:underline"
            >
              View on Solscan →
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-6">
        <Link
          href="/explorer"
          className="rounded-full bg-cyan/15 border border-cyan/40 px-5 py-2 text-sm font-medium text-cyan hover:bg-cyan/25 transition"
        >
          Token Explorer
        </Link>
        <a
          href={WWB.dexScreener}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 px-5 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition"
        >
          Chart
        </a>
      </div>
    </PageShell>
  );
}
