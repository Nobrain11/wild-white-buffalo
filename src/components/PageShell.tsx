import Link from "next/link";
import Image from "next/image";

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
  { href: "/tipbot", label: "Tipbot" },
];

export function PageShell({
  title,
  subtitle,
  children,
  activeHref,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  activeHref?: string;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-cyan/40 group-hover:ring-cyan/70 transition">
              <Image
                src="/assets/wwb-logo-official.png"
                alt="Wild White Buffalo"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-ice">WILD WHITE BUFFALO</span>
              <span className="text-[10px] font-medium tracking-widest text-cyan/80">$WWB · SOLANA</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5 text-sm">
            {NAV_ITEMS.slice(0, 7).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1.5 rounded-md transition ${
                  activeHref === item.href
                    ? "text-cyan bg-cyan/10"
                    : "text-silver hover:text-ice hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/the-herd"
              className="hidden sm:inline-flex items-center rounded-full bg-cyan/10 border border-cyan/30 px-4 py-1.5 text-sm font-medium text-cyan hover:bg-cyan/20 transition"
            >
              Join the Herd
            </Link>
            <button
              type="button"
              className="xl:hidden p-2 text-silver hover:text-ice"
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
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-black text-ice tracking-tight">{title}</h1>
            {subtitle && (
              <p className="mt-3 text-lg text-silver max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </div>
          {children}
        </section>
      </main>

      <footer className="border-t border-white/5 bg-near-black/60 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 items-center text-sm text-silver">
          <span>© {new Date().getFullYear()} Wild White Buffalo · $WWB</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-ice">Privacy</Link>
            <Link href="/terms" className="hover:text-ice">Terms</Link>
            <Link href="/security" className="hover:text-ice">Security</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-10 text-center">
      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center">
        <svg className="h-6 w-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-ice">{title}</h2>
      <p className="mt-2 text-silver max-w-md mx-auto">{description}</p>
    </div>
  );
}
