"use client";

import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { WWB } from "@/lib/config";

interface TokenData {
  ok: boolean;
  verified?: boolean;
  mint: string;
  pairAddress?: string;
  name?: string;
  symbol?: string;
  priceUsd?: string | null;
  priceChange24h?: number | null;
  volume24h?: number | null;
  liquidityUsd?: number | null;
  marketCap?: number | null;
  fdv?: number | null;
  txns24h?: { buys: number; sells: number } | null;
  sources?: { dexscreener?: string; solscan?: string };
  updatedAt?: string;
  error?: string;
  note?: string;
}

function fmt(n: number | string | null | undefined, digits = 6) {
  if (n === null || n === undefined || n === "") return "—";
  const num = typeof n === "string" ? parseFloat(n) : n;
  if (Number.isNaN(num)) return "—";
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(2)}K`;
  if (num < 0.00001) return `$${num.toExponential(2)}`;
  return `$${num.toFixed(digits)}`;
}

export default function ExplorerPage() {
  const [data, setData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/token")
      .then((r) => r.json())
      .then(setData)
      .catch(() =>
        setData({ ok: false, mint: WWB.mint, error: "Failed to load token data" })
      )
      .finally(() => setLoading(false));
  }, []);

  async function copyMint() {
    try {
      await navigator.clipboard.writeText(WWB.mint);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <PageShell
      title="The Explorer"
      subtitle="Read-only $WWB token data from public sources. Not financial advice."
      activeHref="/explorer"
    >
      <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-sm text-cyan uppercase tracking-wider">Official token</div>
            <h2 className="text-2xl font-bold text-ice mt-1">
              {WWB.name} <span className="text-cyan">${WWB.symbol}</span>
            </h2>
            <p className="text-sm text-silver mt-1">Network: Solana</p>
          </div>
          {data?.verified && (
            <span className="rounded-full bg-cyan/15 border border-cyan/40 px-3 py-1 text-xs font-medium text-cyan">
              Mint matches pair
            </span>
          )}
        </div>

        <div className="mt-4">
          <div className="text-xs text-silver mb-1">Mint address</div>
          <div className="flex flex-wrap items-center gap-2">
            <code className="text-sm text-ice break-all bg-midnight/60 px-3 py-2 rounded-lg border border-white/10">
              {WWB.mint}
            </code>
            <button
              type="button"
              onClick={copyMint}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-silver hover:text-ice transition"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-xs text-silver mb-1">Liquidity pair (not the mint)</div>
          <code className="text-xs text-silver break-all">{WWB.pairAddress}</code>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={WWB.dexScreener} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan/15 border border-cyan/40 px-4 py-2 text-sm font-medium text-cyan hover:bg-cyan/25 transition">DEX Screener chart</a>
          <a href={WWB.solscanMint} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition">Solscan</a>
          <a href={WWB.telegram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition">Telegram</a>
          <a href={WWB.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-silver hover:text-ice hover:bg-white/5 transition">X / Twitter</a>
        </div>
      </div>

      {loading && (
        <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-10 text-center text-silver">Loading market data…</div>
      )}

      {!loading && data && !data.ok && (
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-sm text-amber-100/90">
          <strong className="text-amber-200">Unavailable:</strong> {data.error || "Could not load live market data."} Links above still work.
        </div>
      )}

      {!loading && data?.ok && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              { label: "Price (USD)", value: fmt(data.priceUsd, 8) },
              {
                label: "24h change",
                value:
                  data.priceChange24h != null
                    ? `${data.priceChange24h > 0 ? "+" : ""}${data.priceChange24h.toFixed(2)}%`
                    : "—",
              },
              { label: "24h volume", value: fmt(data.volume24h, 2) },
              { label: "Market cap", value: fmt(data.marketCap ?? data.fdv, 2) },
            ].map((c) => (
              <div key={c.label} className="rounded-xl border border-white/5 bg-charcoal/40 p-4">
                <div className="text-xs text-silver uppercase tracking-wider">{c.label}</div>
                <div className="text-xl font-bold text-ice mt-1">{c.value}</div>
              </div>
            ))}
          </div>

          {data.liquidityUsd != null && (
            <div className="rounded-xl border border-white/5 bg-charcoal/40 p-4 mb-6 text-sm text-silver">
              Reported liquidity: <span className="text-ice">{fmt(data.liquidityUsd, 2)}</span>
              {data.txns24h && (
                <span className="ml-4">
                  24h txns: {data.txns24h.buys} buys / {data.txns24h.sells} sells
                </span>
              )}
            </div>
          )}

          <p className="text-xs text-silver mb-2">
            Source: DexScreener public API · Updated{" "}
            {data.updatedAt ? new Date(data.updatedAt).toLocaleString() : "—"}
          </p>
          {data.note && <p className="text-xs text-silver/80 mb-6">{data.note}</p>}
        </>
      )}

      <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-5 text-sm text-silver space-y-2">
        <p>
          <strong className="text-ice">Warning:</strong> Crypto markets are volatile. Always
          verify the mint address before trading. Impersonation tokens exist.
        </p>
        <p>This page is informational only and is not financial advice.</p>
      </div>
    </PageShell>
  );
}
