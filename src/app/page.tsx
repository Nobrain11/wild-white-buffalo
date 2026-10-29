import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/the-wild", label: "The Wild" },
  { href: "/the-herd", label: "The Herd" },
  { href: "/stampede", label: "Stampede" },
  { href: "/quests", label: "Daily Quests" },
  { href: "/pond", label: "WWB Pond" },
  { href: "/forge", label: "Buffalo Forge" },
  { href: "/games", label: "Games" },
  { href: "/council", label: "The Council" },
  { href: "/vault", label: "The Vault" },
  { href: "/explorer", label: "Explorer" },
  { href: "/field-notes", label: "Field Notes" },
];

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-cyan/40 group-hover:ring-cyan/70 transition">
              <Image
                src="/assets/wwb-logo-official.png"
                alt="Wild White Buffalo official logo"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-ice">WILD WHITE BUFFALO</span>
              <span className="text-[10px] font-medium tracking-widest text-cyan/80">$WWB · SOLANA</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-md text-silver hover:text-ice hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/the-herd"
              className="hidden sm:inline-flex items-center rounded-full bg-cyan/10 border border-cyan/30 px-4 py-1.5 text-sm font-medium text-cyan hover:bg-cyan/20 transition glow-cyan"
            >
              Join the Herd
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 text-silver hover:text-ice"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-cyan font-medium tracking-widest text-sm uppercase">
                Solana Community Token
              </p>
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-ice">
                THE WILD IS NOT<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-ice to-violet-glow">
                  FOR EVERYONE.
                </span>
              </h1>
              <p className="text-lg text-silver max-w-lg leading-relaxed">
                Built on Solana. Driven by the herd. Made for those who move differently.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/the-wild"
                  className="inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-bold text-midnight hover:bg-cyan-electric transition glow-cyan"
                >
                  Enter the Wild
                </Link>
                <Link
                  href="/the-herd"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-ice hover:bg-white/10 transition"
                >
                  Join the Herd
                </Link>
                <Link
                  href="/explorer"
                  className="inline-flex items-center justify-center rounded-full border border-violet/40 bg-violet/10 px-6 py-3 text-sm font-semibold text-violet-glow hover:bg-violet/20 transition"
                >
                  Explore WWB
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/20 via-transparent to-violet/20 blur-3xl" />
                <Image
                  src="/assets/wwb-logo-official.png"
                  alt="Official Wild White Buffalo mascot"
                  width={480}
                  height={480}
                  className="relative z-10 drop-shadow-[0_0_60px_rgba(0,229,255,0.35)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem quick links */}
        <section className="border-t border-white/5 bg-near-black/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-ice mb-8 text-center">The Ecosystem</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/stampede", title: "Stampede", desc: "Missions, streaks & XP" },
                { href: "/forge", title: "Buffalo Forge", desc: "Meme & PFP studio" },
                { href: "/games", title: "Games Lab", desc: "Playable browser games" },
                { href: "/council", title: "The Council", desc: "Ideas & community votes" },
                { href: "/pond", title: "WWB Pond", desc: "Community Loot & tips" },
                { href: "/the-herd", title: "The Herd", desc: "Profiles & ranks" },
                { href: "/vault", title: "The Vault", desc: "Treasury transparency" },
                { href: "/field-notes", title: "Field Notes", desc: "Announcements & lore" },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-xl border border-white/5 bg-charcoal/50 p-5 hover:border-cyan/30 hover:bg-charcoal/80 transition"
                >
                  <h3 className="font-semibold text-ice group-hover:text-cyan transition">{card.title}</h3>
                  <p className="mt-1 text-sm text-silver">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto teaser */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-bold text-ice mb-6">The Herd Moves as One</h2>
            <p className="text-silver leading-relaxed text-lg">
              Wild White Buffalo is more than a token. It is a living community on Solana —
              ranked by contribution, driven by missions, and shaped by those who show up.
              No fake metrics. No invented partners. Just the herd.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-near-black/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between gap-6 items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/wwb-logo-official.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm text-silver">© {new Date().getFullYear()} Wild White Buffalo</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-silver">
              <Link href="/the-wild" className="hover:text-ice">The Wild</Link>
              <Link href="/privacy" className="hover:text-ice">Privacy</Link>
              <Link href="/terms" className="hover:text-ice">Terms</Link>
              <Link href="/security" className="hover:text-ice">Security</Link>
              <span className="text-white/20">|</span>
              <span className="text-xs text-white/40">Risk disclosure: crypto is volatile. Not financial advice.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
