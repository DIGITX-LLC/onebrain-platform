import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneBrain | Best AI Tools in BD with ChatGPT, Gemini, Perplexity & More!",
  description: "OneBrain is Bangladesh’s First Multi-AI Platform. It helps you to generate unlimited chat, unlimited image, videos & audios from AI prompts using ChatGPT, Gemini, Claude, Grok & more!",
  icons: {
    icon: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/fav%20icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
