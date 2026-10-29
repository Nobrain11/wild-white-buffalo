import { PageShell } from "@/components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy" subtitle="How we handle data.">
      <div className="prose prose-invert max-w-none text-silver space-y-4">
        <p>We collect only what is needed to operate the community platform: account identifiers from OAuth, activity records for XP and missions, and optional profile preferences.</p>
        <p>We do not sell personal data. Private account data, email, and wallet secrets are never exposed on public profiles.</p>
        <p>Contact the project operators for data requests or questions.</p>
      </div>
    </PageShell>
  );
}
