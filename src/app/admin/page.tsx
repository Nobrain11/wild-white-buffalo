import { PageShell, EmptyState } from "@/components/PageShell";

export default function AdminPage() {
  return (
    <PageShell
      title="Admin Control Center"
      subtitle="Protected. Role checks happen on the server. No client-side role escalation."
    >
      <EmptyState
        title="Administrator access required"
        description="Sign in with the account whose OAuth subject matches OWNER_OPEN_ID. Manage missions, members, Field Notes, Council, and integration status from here."
      />
    </PageShell>
  );
}
