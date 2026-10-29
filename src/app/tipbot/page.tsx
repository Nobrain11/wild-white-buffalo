import { PageShell, EmptyState } from "@/components/PageShell";

export default function TipbotPage() {
  return (
    <PageShell
      title="Tipbot"
      subtitle="Telegram bot for linking accounts, tips, rain, ranks, and games. Credentials are protected server-side."
      activeHref="/tipbot"
    >
      <div className="rounded-2xl border border-white/5 bg-charcoal/40 p-6 mb-8 text-sm text-silver space-y-3">
        <p><strong className="text-ice">How linking works</strong></p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Sign in on this site</li>
          <li>Generate a one-time link code on this page</li>
          <li>Send <code className="text-cyan">/link CODE</code> to the bot privately</li>
        </ol>
        <p className="text-xs opacity-80">Codes expire after 10 minutes and can be used once. No SOL or $WWB transfers are performed by the tipbot.</p>
      </div>
      <EmptyState
        title="Bot awaiting credentials"
        description="Webhook handlers, rate limits, and command logic exist. The bot goes live only after TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, TELEGRAM_WEBHOOK_SECRET, and a stable HTTPS origin are configured."
      />
    </PageShell>
  );
}
