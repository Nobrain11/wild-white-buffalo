import { PageShell, EmptyState } from "@/components/PageShell";

export default function VaultPage() {
  return (
    <PageShell
      title="The Vault"
      subtitle="Transparent treasury information. No fabricated balances or transaction history."
      activeHref="/vault"
    >
      <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6 mb-8 text-sm text-silver">
        Treasury data is only displayed after an administrator configures verified wallet addresses 
        and reliable data sources. The application never invents figures.
      </div>
      <EmptyState
        title="No treasury data configured"
        description="Once verified addresses and sources are supplied, public balances, holdings, and explorer links will appear here."
      />
    </PageShell>
  );
}
