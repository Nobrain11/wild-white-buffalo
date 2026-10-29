/** Official project configuration — supplied by project owner */

export const WWB = {
  name: "Wild White Buffalo",
  symbol: "WWB",
  network: "solana",
  /** Token mint (base58). Verified against DexScreener as baseToken of the official pair. */
  mint: "5T7V8epXn2LeoyxqzkWa1pPStJGGQ2i3cQiUQvw8pump",
  /** Pump.fun / DEX pair address (not the mint). */
  pairAddress: "sdvc6AZ6qobZDkRifn4Hx2ZN3m3Uqy6XxGms1izzxRv",
  telegram: "https://t.me/wildwhitebuffalo",
  twitter: "https://x.com/wildbuffalosol",
  dexScreener: "https://dexscreener.com/solana/sdvc6AZ6qobZDkRifn4Hx2ZN3m3Uqy6XxGms1izzxRv",
  solscanMint: "https://solscan.io/token/5T7V8epXn2LeoyxqzkWa1pPStJGGQ2i3cQiUQvw8pump",
  /** Treasury wallet — set only when project owner confirms the address. */
  treasuryAddress: "" as string,
} as const;

export type WwbConfig = typeof WWB;
