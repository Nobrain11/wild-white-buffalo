import { PageShell } from "@/components/PageShell";

export default function SecurityPage() {
  return (
    <PageShell title="Security & Reporting" subtitle="How to report issues.">
      <div className="prose prose-invert max-w-none text-silver space-y-4">
        <p>Report security concerns, abuse, or vulnerabilities to the project operators through official channels.</p>
        <p>Never share private keys or seed phrases. This platform never asks for them.</p>
        <p>Bot tokens, RPC URLs, and owner identifiers are stored only in protected server environment variables.</p>
      </div>
    </PageShell>
  );
}
