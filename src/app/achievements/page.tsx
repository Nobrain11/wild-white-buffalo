import { PageShell, EmptyState } from "@/components/PageShell";

export default function AchievementsPage() {
  return (
    <PageShell
      title="Achievements"
      subtitle="Badges, milestones, and collectible profile decorations earned through verified activity."
    >
      <EmptyState
        title="No achievements unlocked"
        description="Cosmetic rewards and rank badges will appear here as you complete missions and hit milestones."
      />
    </PageShell>
  );
}
