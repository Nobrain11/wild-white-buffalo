import { NextResponse } from "next/server";
import { WWB } from "@/lib/config";

export async function GET() {
  const mint = WWB.mint;
  const pair = WWB.pairAddress;

  try {
    const res = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${mint}`,
      {
        next: { revalidate: 60 },
        headers: { Accept: "application/json" },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Market data temporarily unavailable",
          mint,
          pair,
          sources: { dexscreener: WWB.dexScreener, solscan: WWB.solscanMint },
          updatedAt: new Date().toISOString(),
        },
        { status: 502 }
      );
    }

    const data = await res.json();
    const pairs: any[] = data?.pairs ?? [];
    const match =
      pairs.find(
        (p) =>
          p.chainId === "solana" &&
          p.pairAddress?.toLowerCase() === pair.toLowerCase()
      ) ?? pairs.find((p) => p.chainId === "solana");

    if (!match) {
      return NextResponse.json({
        ok: false,
        error: "No Solana pair found for this mint on DexScreener",
        mint,
        pair,
        sources: { dexscreener: WWB.dexScreener, solscan: WWB.solscanMint },
        updatedAt: new Date().toISOString(),
      });
    }

    const base = match.baseToken ?? {};
    const mintMatches =
      typeof base.address === "string" &&
      base.address.toLowerCase() === mint.toLowerCase();

    return NextResponse.json({
      ok: true,
      verified: mintMatches,
      mint,
      pairAddress: match.pairAddress,
      pairIsMint: match.pairAddress?.toLowerCase() === mint.toLowerCase(),
      name: base.name?.trim() || WWB.name,
      symbol: base.symbol || WWB.symbol,
      network: "solana",
      dexId: match.dexId,
      priceUsd: match.priceUsd ?? null,
      priceNative: match.priceNative ?? null,
      priceChange24h: match.priceChange?.h24 ?? null,
      volume24h: match.volume?.h24 ?? null,
      liquidityUsd: match.liquidity?.usd ?? null,
      fdv: match.fdv ?? null,
      marketCap: match.marketCap ?? null,
      txns24h: match.txns?.h24
        ? {
            buys: match.txns.h24.buys ?? 0,
            sells: match.txns.h24.sells ?? 0,
          }
        : null,
      pairCreatedAt: match.pairCreatedAt
        ? new Date(match.pairCreatedAt).toISOString()
        : null,
      sources: {
        dexscreener: match.url || WWB.dexScreener,
        solscan: WWB.solscanMint,
      },
      socials: {
        telegram: WWB.telegram,
        twitter: WWB.twitter,
      },
      updatedAt: new Date().toISOString(),
      note:
        "Pair address is the liquidity pool, not the token mint. Always verify the mint before trading.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to reach market data provider",
        mint,
        pair,
        sources: { dexscreener: WWB.dexScreener, solscan: WWB.solscanMint },
        updatedAt: new Date().toISOString(),
      },
      { status: 502 }
    );
  }
}
