import { PageShell, EmptyState } from "@/components/PageShell";

export default function QuestsPage() {
  return (
    <PageShell
      title="Daily Quests"
      subtitle="Rotating challenges. Complete them for Community Loot and XP. All claims verified server-side."
      activeHref="/quests"
    >
      <EmptyState
        title="Quests refresh at UTC midnight"
        description="Three daily quests will appear here once the quest engine is fully wired. Maximum base Loot from daily quests is configurable by admins."
      />
    </PageShell>
  );
}
