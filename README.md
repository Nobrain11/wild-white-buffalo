# Wild White Buffalo ($WWB)

**Solana Community Ecosystem**

> THE WILD IS NOT FOR EVERYONE.  
> Built on Solana. Driven by the herd. Made for those who move differently.

## Repository

https://github.com/Nobrain11/wild-white-buffalo

## Current Status

### Stage 1 — Complete ✅
Brand system, homepage, energy background, all core routes, shared PageShell.

### Stage 2 — In progress ✅ (core engine live)
- Rank thresholds (Calf → Herd Legend)
- Mission definitions (daily + weekly)
- Server-side XP award path with **idempotency keys**
- Daily / weekly claim windows (UTC)
- In-memory store (swap for Prisma later)
- API routes: `/api/missions`, `/api/claim`, `/api/progress`, `/api/leaderboard`, `/api/me`
- Live Stampede UI (claim missions, rank progress bar)
- Live Profile + Leaderboard pages
- Prisma schema prepared for production DB

Demo user is used until real OAuth is connected. No fake community activity is seeded.

## Planned Stages

1. Brand + Homepage + Routes ← **done**
2. Auth, profiles, XP ranks, Stampede missions, leaderboards ← **core done**
3. Games Lab (playable), Buffalo Forge (canvas), achievements, referrals
4. Council (ideas/votes), Field Notes CMS, Vault data, Admin tools
5. Telegram Tipbot + Mini App, Solana Explorer integration
6. Hardening, testing, deployment

## Design Rules (non-negotiable)

- Official logo is authoritative — never replace with generic/AI buffalo
- No fake token metrics, holders, treasury, or community activity
- XP is community points only (not token holdings)
- Server-side authority for all rewards and ranks
- Public pages require no wallet
- Community Loot is non-transferable and has zero monetary value

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

Try: open **/stampede**, claim a daily mission, then check **/profile** and **/leaderboard**.

## License

MIT
