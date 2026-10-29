import { PageShell, EmptyState } from "@/components/PageShell";

export default function ReferralsPage() {
  return (
    <PageShell
      title="Referrals"
      subtitle="Unique codes and links. Only genuine eligible users count. Self-referrals and abuse are blocked."
    >
      <EmptyState
        title="Referral system ready for activation"
        description="Your personal referral code and stats will appear after you create an account. Optional XP rewards are admin-configurable."
      />
    </PageShell>
  );
}
