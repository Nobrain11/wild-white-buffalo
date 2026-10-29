import { PageShell, EmptyState } from "@/components/PageShell";

export default function GamesPage() {
  return (
    <PageShell
      title="Games Lab"
      subtitle="Playable browser games using virtual demo points only. No real-money gambling or token wagering."
      activeHref="/games"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {[
          "Snake", "Dice", "Memory", "Trivia", "Reaction",
          "Basketball", "Football", "Darts", "Bowling",
          "Slots (demo)", "Roulette (demo)", "Blackjack (demo)",
        ].map((game) => (
          <div
            key={game}
            className="rounded-xl border border-white/5 bg-charcoal/40 p-5 text-center"
          >
            <div className="text-ice font-semibold">{game}</div>
            <div className="text-xs text-silver mt-1">Coming soon</div>
          </div>
        ))}
      </div>
      <EmptyState
        title="Games are being wired"
        description="Each game will include instructions, controls, score tracking, personal bests, and daily challenges. Demo points only."
      />
    </PageShell>
  );
}
