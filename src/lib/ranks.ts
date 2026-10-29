export const RANK_THRESHOLDS = [
  { name: "Calf", minXp: 0, order: 0 },
  { name: "Trail Scout", minXp: 50, order: 1 },
  { name: "Young Bull", minXp: 250, order: 2 },
  { name: "Herd Runner", minXp: 1000, order: 3 },
  { name: "Storm Bringer", minXp: 5000, order: 4 },
  { name: "White Buffalo", minXp: 20000, order: 5 },
  { name: "Herd Legend", minXp: 50000, order: 6 },
] as const;

export type RankName = (typeof RANK_THRESHOLDS)[number]["name"];

export function getRankForXp(xp: number): RankName {
  let current: RankName = "Calf";
  for (const rank of RANK_THRESHOLDS) {
    if (xp >= rank.minXp) current = rank.name;
    else break;
  }
  return current;
}

export function getNextRank(xp: number) {
  const current = getRankForXp(xp);
  const idx = RANK_THRESHOLDS.findIndex((r) => r.name === current);
  if (idx === -1 || idx === RANK_THRESHOLDS.length - 1) {
    return null;
  }
  const next = RANK_THRESHOLDS[idx + 1];
  return {
    name: next.name,
    minXp: next.minXp,
    progress: Math.min(1, (xp - RANK_THRESHOLDS[idx].minXp) / (next.minXp - RANK_THRESHOLDS[idx].minXp)),
    xpNeeded: next.minXp - xp,
  };
}

export function getRankProgress(xp: number) {
  const current = getRankForXp(xp);
  const idx = RANK_THRESHOLDS.findIndex((r) => r.name === current);
  const currentThreshold = RANK_THRESHOLDS[idx];
  const next = RANK_THRESHOLDS[idx + 1];

  if (!next) {
    return {
      current,
      next: null,
      progress: 1,
      xpIntoRank: xp - currentThreshold.minXp,
      xpForNext: 0,
    };
  }

  const span = next.minXp - currentThreshold.minXp;
  const into = xp - currentThreshold.minXp;

  return {
    current,
    next: next.name,
    progress: Math.min(1, into / span),
    xpIntoRank: into,
    xpForNext: next.minXp - xp,
  };
}
