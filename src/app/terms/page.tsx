import { PageShell } from "@/components/PageShell";

export default function TermsPage() {
  return (
    <PageShell title="Terms" subtitle="Community guidelines and platform terms.">
      <div className="prose prose-invert max-w-none text-silver space-y-4">
        <p>Participation is voluntary. Community Loot and XP have no cash or token value.</p>
        <p>Do not spam, farm, or attempt to manipulate rankings or rewards. Moderators may reverse fraudulent activity with an auditable reason.</p>
        <p>Cryptocurrency involves risk. Nothing on this site is financial advice.</p>
      </div>
    </PageShell>
  );
}
