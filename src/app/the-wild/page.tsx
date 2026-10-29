import { PageShell } from "@/components/PageShell";

export default function TheWildPage() {
  return (
    <PageShell
      title="The Wild"
      subtitle="Mission, principles, ecosystem map, and how the herd moves."
      activeHref="/the-wild"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <article className="rounded-2xl border border-white/5 bg-charcoal/40 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ice mb-3">The Mission</h2>
            <p className="text-silver leading-relaxed">
              Wild White Buffalo exists for those who refuse the ordinary path. 
              We build community first — ranks earned through contribution, 
              missions that reward real participation, and tools that let the 
              herd create, compete, and shape what comes next.
            </p>
          </article>
          <article className="rounded-2xl border border-white/5 bg-charcoal/40 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ice mb-3">Community Principles</h2>
            <ul className="space-y-3 text-silver">
              <li className="flex gap-3"><span className="text-cyan">▸</span> Contribution over noise</li>
              <li className="flex gap-3"><span className="text-cyan">▸</span> Server-verified actions only</li>
              <li className="flex gap-3"><span className="text-cyan">▸</span> No fabricated metrics or partners</li>
              <li className="flex gap-3"><span className="text-cyan">▸</span> Transparent progression</li>
              <li className="flex gap-3"><span className="text-cyan">▸</span> The herd decides direction through The Council</li>
            </ul>
          </article>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-5">
            <h3 className="font-semibold text-cyan mb-2">How to Join</h3>
            <p className="text-sm text-silver">Create a profile, complete your first mission, and start earning XP toward your rank.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-5">
            <h3 className="font-semibold text-ice mb-2">Ecosystem Map</h3>
            <ul className="text-sm text-silver space-y-2">
              <li>Stampede — Missions & XP</li>
              <li>The Herd — Profiles & ranks</li>
              <li>Buffalo Forge — Create</li>
              <li>Games Lab — Compete</li>
              <li>The Council — Influence</li>
              <li>WWB Pond — Community Loot</li>
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
