import { PageShell, EmptyState } from "@/components/PageShell";

export default function ForgePage() {
  return (
    <PageShell
      title="Buffalo Forge"
      subtitle="Meme and profile-picture studio. Official logo preserved. Export as PNG."
      activeHref="/forge"
    >
      <EmptyState
        title="Canvas editor coming online"
        description="Drag, resize, text overlays, stickers, neon presets, and official logo layers will live here. Templates for memes, announcements, and event posters."
      />
    </PageShell>
  );
}
