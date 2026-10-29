import { getRankForXp, getRankProgress } from "./ranks";

/**
 * Server-side XP rules (to be enforced in API routes / server actions).
 * - Never accept client-edited XP
 * - Every award needs an idempotency key
 * - Duplicate keys are rejected
 * - Rank is derived from total XP
 */

export interface XpAwardInput {
  userId: string;
  amount: number;
  reason: string;
  missionId?: string;
  idempotencyKey: string;
}

export interface XpAwardResult {
  success: boolean;
  newXp?: number;
  newRank?: string;
  alreadyClaimed?: boolean;
  error?: string;
}

/** Build a deterministic daily key so the same mission cannot be farmed multiple times per UTC day */
export function dailyIdempotencyKey(userId: string, missionId: string, date = new Date()) {
  const utc = date.toISOString().slice(0, 10); // YYYY-MM-DD
  return `${userId}:${missionId}:${utc}`;
}

export function weeklyIdempotencyKey(userId: string, missionId: string, date = new Date()) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 1 - day);
  const weekStart = d.toISOString().slice(0, 10);
  return `${userId}:${missionId}:week:${weekStart}`;
}

export { getRankForXp, getRankProgress };
