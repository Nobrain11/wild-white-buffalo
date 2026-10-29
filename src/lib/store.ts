/**
 * Lightweight in-memory store for Stage 2 development.
 * Replace with Prisma + real database in production.
 * All XP mutations go through awardXp() so rules stay centralized.
 */

import { getRankForXp, getRankProgress } from "./ranks";
import { DEFAULT_MISSIONS, type MissionDefinition } from "./missions";
import { dailyIdempotencyKey, weeklyIdempotencyKey } from "./xp";

export interface StoredUser {
  id: string;
  username: string;
  displayName: string;
  xp: number;
  rank: string;
  lootBalance: number;
  isPublic: boolean;
  createdAt: string;
}

export interface LedgerEntry {
  id: string;
  userId: string;
  amount: number;
  reason: string;
  missionId?: string;
  idempotencyKey: string;
  createdAt: string;
}

export interface Completion {
  id: string;
  userId: string;
  missionId: string;
  xpAwarded: number;
  lootAwarded: number;
  completedAt: string;
  idempotencyKey: string;
}

const users = new Map<string, StoredUser>();
const ledger = new Map<string, LedgerEntry>();
const completions = new Map<string, Completion>();

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function getOrCreateDemoUser(): StoredUser {
  const existing = users.get("demo-user");
  if (existing) return existing;

  const user: StoredUser = {
    id: "demo-user",
    username: "herd_member",
    displayName: "Herd Member",
    xp: 0,
    rank: "Calf",
    lootBalance: 0,
    isPublic: true,
    createdAt: new Date().toISOString(),
  };
  users.set(user.id, user);
  return user;
}

export function getUser(id: string) {
  return users.get(id) ?? null;
}

export function listPublicUsers() {
  return Array.from(users.values()).filter((u) => u.isPublic);
}

export function getLeaderboard(limit = 20) {
  return Array.from(users.values())
    .filter((u) => u.isPublic)
    .sort((a, b) => b.xp - a.xp)
    .slice(0, limit)
    .map((u, i) => ({
      rank: i + 1,
      userId: u.id,
      displayName: u.displayName,
      username: u.username,
      xp: u.xp,
      buffaloRank: u.rank,
    }));
}

export function getActiveMissions(): MissionDefinition[] {
  return DEFAULT_MISSIONS;
}

export function getUserCompletions(userId: string) {
  return Array.from(completions.values()).filter((c) => c.userId === userId);
}

export function hasCompletedToday(userId: string, missionId: string) {
  const key = dailyIdempotencyKey(userId, missionId);
  return ledger.has(key) || completions.has(key);
}

export function awardXp(params: {
  userId: string;
  amount: number;
  reason: string;
  missionId?: string;
  idempotencyKey: string;
  loot?: number;
}): { success: boolean; alreadyClaimed?: boolean; user?: StoredUser; error?: string } {
  if (ledger.has(params.idempotencyKey) || completions.has(params.idempotencyKey)) {
    return { success: false, alreadyClaimed: true, error: "Already claimed" };
  }

  const user = users.get(params.userId);
  if (!user) {
    return { success: false, error: "User not found" };
  }

  if (params.amount < 0) {
    return { success: false, error: "Invalid amount" };
  }

  user.xp += params.amount;
  user.rank = getRankForXp(user.xp);
  if (params.loot && params.loot > 0) {
    user.lootBalance += params.loot;
  }
  users.set(user.id, user);

  const entry: LedgerEntry = {
    id: uid(),
    userId: user.id,
    amount: params.amount,
    reason: params.reason,
    missionId: params.missionId,
    idempotencyKey: params.idempotencyKey,
    createdAt: new Date().toISOString(),
  };
  ledger.set(params.idempotencyKey, entry);

  if (params.missionId) {
    const completion: Completion = {
      id: uid(),
      userId: user.id,
      missionId: params.missionId,
      xpAwarded: params.amount,
      lootAwarded: params.loot ?? 0,
      completedAt: new Date().toISOString(),
      idempotencyKey: params.idempotencyKey,
    };
    completions.set(params.idempotencyKey, completion);
  }

  return { success: true, user };
}

export function claimMission(userId: string, missionId: string) {
  const mission = DEFAULT_MISSIONS.find((m) => m.id === missionId);
  if (!mission) {
    return { success: false, error: "Mission not found" };
  }

  const key =
    mission.category === "daily"
      ? dailyIdempotencyKey(userId, missionId)
      : mission.category === "weekly"
        ? weeklyIdempotencyKey(userId, missionId)
        : `${userId}:${missionId}:once`;

  return awardXp({
    userId,
    amount: mission.xpReward,
    reason: `Mission: ${mission.title}`,
    missionId: mission.id,
    idempotencyKey: key,
    loot: mission.lootReward,
  });
}

export function getUserProgress(userId: string) {
  const user = users.get(userId);
  if (!user) return null;

  const progress = getRankProgress(user.xp);
  const userCompletions = getUserCompletions(userId);
  const daily = DEFAULT_MISSIONS.filter((m) => m.category === "daily").map((m) => ({
    ...m,
    completed: hasCompletedToday(userId, m.id),
  }));

  return {
    user,
    progress,
    completions: userCompletions,
    dailyMissions: daily,
  };
}
