import { PageShell, EmptyState } from "@/components/PageShell";

export default function FieldNotesPage() {
  return (
    <PageShell
      title="Field Notes"
      subtitle="Announcements, development updates, community stories, and lore."
      activeHref="/field-notes"
    >
      <EmptyState
        title="No notes published yet"
        description="Authorized admins can create, edit, publish, and archive articles. Real content only — no fabricated news."
      />
    </PageShell>
  );
}
