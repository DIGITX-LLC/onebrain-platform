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
  title: "OneBrain | #1 AI Platform in Bangladesh | ChatGPT, Claude, Gemini & More",
  description: "Access all top AI models like ChatGPT-4o, Claude 3.5, Gemini, and DeepSeek in one platform. Bangladesh's best affordable AI solution with bKash payment. Generate text, images, video & audio instantly.",
  keywords: [
    "OneBrain",
    "AI Bangladesh",
    "ChatGPT Bangladesh",
    "Artificial Intelligence BD",
    "Best AI Tool for Students",
    "ChatGPT bKash payment",
    "Bangla AI Writer",
    "OneBrain AI",
    "DigitX AI",
    "Cheap AI Subscription BD",
    "Sora Video Generation Bangladesh",
    "Claude 3.5 Sonnet Bangladesh",
    "Gemini Pro Bangladesh",
    "DeepSeek AI BD",
    "Multi-LLM Platform"
  ],
  authors: [{ name: "DigitX LLC", url: "https://digitxgroup.com" }],
  creator: "OneBrain Team",
  publisher: "DigitX LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ai.onebrain.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai.onebrain.app",
    siteName: "OneBrain - The Multiverse of AI",
    title: "OneBrain | Access ChatGPT, Claude, Gemini & More in Bangladesh",
    description: "Unlock the power of world-class AI models in Bangladesh. Pay easily with bKash/Nagad. Write, Design, and Create with OneBrain.",
    images: [
      {
        url: "https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png", // Using a high-quality banner for OG
        width: 1200,
        height: 630,
        alt: "OneBrain AI Platform Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneBrain | Best AI Platform in Bangladesh",
    description: "ChatGPT, Claude, Gemini & more under one subscription. Affordable & Accessible in Bangladesh. Join the AI revolution!",
    images: ["https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png"],
    creator: "@OneBrainAI", // Assuming a handle, or generic
  },
  icons: {
    icon: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/generated-image-1-f5d3bdca-fd56-4c0b-8a29-814dbb372faa.png",
    apple: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/generated-image-1-f5d3bdca-fd56-4c0b-8a29-814dbb372faa.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#030205",
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
