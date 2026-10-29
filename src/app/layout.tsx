import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wild White Buffalo | $WWB — Solana Community Ecosystem",
  description:
    "THE WILD IS NOT FOR EVERYONE. Built on Solana. Driven by the herd. Made for those who move differently. Community XP, missions, games, and the Stampede.",
  keywords: ["WWB", "Wild White Buffalo", "Solana", "meme coin", "community"],
  openGraph: {
    title: "Wild White Buffalo | $WWB",
    description: "Built on Solana. Driven by the herd.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <div className="energy-bg" aria-hidden="true">
          <div className="energy-wave" />
          <div className="energy-wave" />
          <div className="energy-wave" />
        </div>
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
