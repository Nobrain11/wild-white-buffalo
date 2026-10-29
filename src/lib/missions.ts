export type MissionCategory =
  | "daily"
  | "weekly"
  | "one-time"
  | "special"
  | "creative"
  | "learning"
  | "community";

export interface MissionDefinition {
  id: string;
  title: string;
  description: string;
  category: MissionCategory;
  xpReward: number;
  lootReward: number;
  maxCompletionsPerUser?: number;
}

/** Default missions — authored product configuration, not seeded fake activity */
export const DEFAULT_MISSIONS: MissionDefinition[] = [
  {
    id: "daily-checkin",
    title: "Stampede Check-in",
    description: "Complete your daily herd check-in. Shows the herd you are present.",
    category: "daily",
    xpReward: 10,
    lootReward: 5,
  },
  {
    id: "daily-field-note",
    title: "Read a Field Note",
    description: "Read the latest Field Note and stay informed.",
    category: "daily",
    xpReward: 15,
    lootReward: 5,
  },
  {
    id: "daily-explore",
    title: "Explore a Feature",
    description: "Visit any ecosystem page (Forge, Games, Council, Pond, etc.).",
    category: "daily",
    xpReward: 10,
    lootReward: 5,
  },
  {
    id: "weekly-meme",
    title: "Create a WWB Meme",
    description: "Design and export a meme in Buffalo Forge.",
    category: "weekly",
    xpReward: 50,
    lootReward: 15,
  },
  {
    id: "weekly-idea",
    title: "Submit a Useful Idea",
    description: "Post a constructive idea in The Council.",
    category: "weekly",
    xpReward: 40,
    lootReward: 10,
  },
  {
    id: "weekly-discussion",
    title: "Join the Discussion",
    description: "Participate in community conversation (Telegram or Council).",
    category: "weekly",
    xpReward: 30,
    lootReward: 10,
  },
];

export function getMissionsByCategory(category: MissionCategory) {
  return DEFAULT_MISSIONS.filter((m) => m.category === category);
}

export function getDailyMissions() {
  return getMissionsByCategory("daily");
}

export function getWeeklyMissions() {
  return getMissionsByCategory("weekly");
}
