import { PageShell, EmptyState } from "@/components/PageShell";

export default function ProfilePage() {
  return (
    <PageShell
      title="Your Profile"
      subtitle="XP, rank, streaks, missions, badges, and settings. Public profiles only show opted-in information."
    >
      <EmptyState
        title="Sign in to view your profile"
        description="Authentication uses the platform OAuth flow. No password login or fake development accounts. Public pages remain fully explorable without a wallet."
      />
    </PageShell>
  );
}
