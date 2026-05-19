import type { Metadata } from "next";
import { Poppins, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cortexa — AI Agents for Every Workflow",
  description:
    "Cortexa is the open AI agent platform. Build, deploy, and scale conversational, autonomous, and decision-making agents in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${instrumentSerif.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body
        className="text-forest selection:bg-forest selection:text-cream"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
