import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/dist/client/script";

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
    icon: "/assets/models/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        
   <head>
  
  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-EZFDLKXQCQ"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EZFDLKXQCQ');
    `}
  </Script>
</head>

      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
