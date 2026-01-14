import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/dist/client/script";
import ErrorBoundary from "./component/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "OneBrain | #1 AI Platform in Bangladesh | ChatGPT, Claude, Gemini, AI Agents & More",
  description:
    "Bangladesh's #1 AI platform. Access ChatGPT, Claude, Gemini, DeepSeek, Grok, Llama, Perplexity, Mistral, DALL-E, Midjourney alternative, Sora, Runway + AI Agents in one subscription. Pay with bKash, Nagad, Rocket. Best ChatGPT alternative in Bangladesh. No international card needed. AI for students, freelancers & businesses.",
  keywords: [
    // Brand Keywords
    "OneBrain",
    "OneBrain AI",
    "OneBrain Bangladesh",
    "OneBrain app",
    "OneBrain login",
    "OneBrain pricing",
    "DigitX AI",
    "DigitX OneBrain",
    
    // Primary AI Platform Keywords
    "AI Bangladesh",
    "AI platform Bangladesh",
    "Best AI Bangladesh",
    "Top AI Bangladesh",
    "AI tool Bangladesh",
    "AI app Bangladesh",
    "Artificial Intelligence Bangladesh",
    "AI website Bangladesh",
    "AI service Bangladesh",
    
    // ChatGPT Related (Competitor Association)
    "ChatGPT Bangladesh",
    "ChatGPT alternative Bangladesh",
    "ChatGPT Bangla",
    "ChatGPT bKash",
    "ChatGPT bKash payment",
    "ChatGPT price Bangladesh",
    "ChatGPT subscription Bangladesh",
    "ChatGPT Plus Bangladesh",
    "ChatGPT 4 Bangladesh",
    "ChatGPT 4o Bangladesh",
    "GPT 4 Bangladesh",
    "GPT Bangladesh",
    "OpenAI Bangladesh",
    "OpenAI alternative Bangladesh",
    "ChatGPT free Bangladesh",
    "ChatGPT without credit card Bangladesh",
    
    // Claude Related (Competitor Association)
    "Claude AI Bangladesh",
    "Claude alternative Bangladesh",
    "Claude 3 Bangladesh",
    "Claude Sonnet Bangladesh",
    "Claude Opus Bangladesh",
    "Anthropic Bangladesh",
    "Claude bKash",
    "Claude subscription Bangladesh",
    
    // Gemini Related (Competitor Association)
    "Gemini AI Bangladesh",
    "Gemini alternative Bangladesh",
    "Gemini Pro Bangladesh",
    "Google AI Bangladesh",
    "Google Gemini Bangladesh",
    "Bard Bangladesh",
    "Gemini bKash",
    
    // DeepSeek Related (Competitor Association)
    "DeepSeek Bangladesh",
    "DeepSeek alternative Bangladesh",
    "DeepSeek V3 Bangladesh",
    "DeepSeek AI Bangladesh",
    "DeepSeek bKash",
    
    // Grok Related (Competitor Association)
    "Grok AI Bangladesh",
    "Grok alternative Bangladesh",
    "xAI Bangladesh",
    "Grok bKash",
    
    // Perplexity Related (Competitor Association)
    "Perplexity AI Bangladesh",
    "Perplexity alternative Bangladesh",
    "Perplexity bKash",
    "AI search Bangladesh",
    
    // Llama/Meta Related (Competitor Association)
    "Llama AI Bangladesh",
    "Llama 3 Bangladesh",
    "Meta AI Bangladesh",
    "Meta AI alternative Bangladesh",
    
    // Mistral Related (Competitor Association)
    "Mistral AI Bangladesh",
    "Mistral alternative Bangladesh",
    
    // Qwen Related (Competitor Association)
    "Qwen AI Bangladesh",
    "Qwen alternative Bangladesh",
    "Alibaba AI Bangladesh",
    
    // Image Generation (Competitor Association)
    "DALL-E Bangladesh",
    "DALL-E alternative Bangladesh",
    "DALL-E 3 Bangladesh",
    "Midjourney Bangladesh",
    "Midjourney alternative Bangladesh",
    "Midjourney bKash",
    "Stable Diffusion Bangladesh",
    "AI image generator Bangladesh",
    "AI art generator Bangladesh",
    "AI photo generator Bangladesh",
    "Text to image Bangladesh",
    "AI picture generator Bangladesh",
    "Flux AI Bangladesh",
    "Ideogram Bangladesh",
    "Leonardo AI Bangladesh",
    
    // Video Generation (Competitor Association)
    "Sora Bangladesh",
    "Sora alternative Bangladesh",
    "Sora AI Bangladesh",
    "AI video generator Bangladesh",
    "Text to video Bangladesh",
    "Runway ML Bangladesh",
    "Runway alternative Bangladesh",
    "Pika Labs Bangladesh",
    "Kling AI Bangladesh",
    "Veo Bangladesh",
    "Veo 2 Bangladesh",
    "AI video maker Bangladesh",
    "Hailuo AI Bangladesh",
    
    // Audio/Voice (Competitor Association)
    "AI voice generator Bangladesh",
    "Text to speech Bangladesh",
    "AI music generator Bangladesh",
    "Suno AI Bangladesh",
    "Udio Bangladesh",
    "ElevenLabs Bangladesh",
    "AI audio Bangladesh",
    "AI song generator Bangladesh",
    
    // Writing & Content (Competitor Association)
    "Jasper AI Bangladesh",
    "Jasper alternative Bangladesh",
    "Copy AI Bangladesh",
    "AI writer Bangladesh",
    "AI content writer Bangladesh",
    "AI copywriter Bangladesh",
    "Bangla AI writer",
    "Bengali AI writer",
    "AI blog writer Bangladesh",
    "AI article writer Bangladesh",
    "Grammarly AI Bangladesh",
    "AI writing assistant Bangladesh",
    
    // Coding (Competitor Association)
    "GitHub Copilot Bangladesh",
    "Copilot alternative Bangladesh",
    "AI coding Bangladesh",
    "AI code generator Bangladesh",
    "Cursor AI Bangladesh",
    "Replit AI Bangladesh",
    "AI programming Bangladesh",
    
    // Automation (Competitor Association)
    "Zapier alternative Bangladesh",
    "n8n alternative Bangladesh",
    "Make alternative Bangladesh",
    "AI automation Bangladesh",
    "AI workflow Bangladesh",
    "AI agents Bangladesh",
    "AI bot Bangladesh",
    
    // Chatbot (Competitor Association)
    "AI chatbot Bangladesh",
    "ChatBot Bangladesh",
    "AI assistant Bangladesh",
    "Virtual assistant Bangladesh",
    "AI chat Bangladesh",
    
    // Payment Keywords (Critical for Bangladesh)
    "AI bKash",
    "AI bKash payment",
    "AI Nagad",
    "AI Nagad payment",
    "AI Rocket payment",
    "AI subscription bKash",
    "AI without credit card Bangladesh",
    "AI without international card",
    "AI local payment Bangladesh",
    "AI BDT payment",
    "AI Taka payment",
    
    // Price/Affordability Keywords
    "Cheap AI Bangladesh",
    "Affordable AI Bangladesh",
    "Free AI Bangladesh",
    "AI subscription Bangladesh",
    "AI pricing Bangladesh",
    "Best AI price Bangladesh",
    "Low cost AI Bangladesh",
    "Budget AI Bangladesh",
    
    // Student Keywords
    "AI for students Bangladesh",
    "Student AI Bangladesh",
    "AI homework help Bangladesh",
    "AI assignment help Bangladesh",
    "AI study Bangladesh",
    "AI learning Bangladesh",
    "BUET AI",
    "DU AI",
    "Dhaka University AI",
    "NSU AI",
    "BRAC University AI",
    "IUT AI",
    "CUET AI",
    "RUET AI",
    "KUET AI",
    "University AI Bangladesh",
    "College AI Bangladesh",
    "HSC AI Bangladesh",
    "SSC AI Bangladesh",
    
    // Professional Keywords
    "AI for freelancers Bangladesh",
    "Upwork AI Bangladesh",
    "Fiverr AI Bangladesh",
    "Freelancer AI Bangladesh",
    "AI for business Bangladesh",
    "AI for marketing Bangladesh",
    "AI for entrepreneurs Bangladesh",
    "AI for startups Bangladesh",
    
    // Location Keywords
    "AI Dhaka",
    "AI Chittagong",
    "AI Sylhet",
    "AI Rajshahi",
    "AI Khulna",
    "AI Barishal",
    "AI Rangpur",
    "AI Mymensingh",
    "AI BD",
    
    // Bengali/Bangla Keywords
    "AI Bangla",
    "AI Bengali",
    "Bangla AI",
    "Bengali AI",
    "AI বাংলা",
    "বাংলা AI",
    "এআই বাংলাদেশ",
    "চ্যাটজিপিটি বাংলাদেশ",
    
    // Use Case Keywords
    "AI content creation Bangladesh",
    "AI social media Bangladesh",
    "AI marketing Bangladesh",
    "AI SEO Bangladesh",
    "AI translation Bangladesh",
    "AI summarizer Bangladesh",
    "AI research Bangladesh",
    "AI presentation Bangladesh",
    "AI email writer Bangladesh",
    "AI resume Bangladesh",
    "AI cover letter Bangladesh",
    
    // Comparison Keywords
    "ChatGPT vs Claude Bangladesh",
    "Best AI model Bangladesh",
    "AI comparison Bangladesh",
    "Which AI is best Bangladesh",
    "Top 10 AI Bangladesh",
    "Best AI tools 2024 Bangladesh",
    "Best AI tools 2025 Bangladesh",
    "Best AI tools 2026 Bangladesh",
    
    // Long-tail Keywords
    "How to use AI in Bangladesh",
    "How to pay for ChatGPT in Bangladesh",
    "How to access Claude in Bangladesh",
    "AI tools that accept bKash",
    "AI subscription with mobile banking",
    "All AI in one place Bangladesh",
    "Multiple AI models one subscription",
    "Unified AI platform Bangladesh",
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
    canonical: "https://onebrain.app",
    languages: {
      'en-BD': 'https://onebrain.app',
      'bn-BD': 'https://onebrain.app/bn',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://onebrain.app",
    siteName: "OneBrain - Best AI Platform in Bangladesh",
    title: "OneBrain | ChatGPT, Claude, Gemini, Midjourney Alternative + AI Agents | Bangladesh",
    description:
      "Bangladesh's #1 AI platform. ChatGPT, Claude, Gemini, DeepSeek, DALL-E, Midjourney alternative, Sora, AI Agents in one subscription. Pay with bKash, Nagad. Best ChatGPT alternative Bangladesh.",
    images: [
      {
        url: "https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png",
        width: 1200,
        height: 630,
        alt: "OneBrain - ChatGPT Claude Gemini Midjourney Alternative Bangladesh - Pay with bKash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneBrain | Best ChatGPT & Midjourney Alternative in Bangladesh",
    description:
      "ChatGPT, Claude, Gemini, DeepSeek, DALL-E, Sora + AI Agents. Pay with bKash/Nagad. Best AI for students, freelancers & businesses in Bangladesh.",
    images: ["https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png"],
    creator: "@onebrain_app",
  },
  icons: {
    icon: "/assets/DXlogo.png",
    apple: "/assets/DXlogo.png",
    shortcut: "/assets/DXlogo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const themeColor = "#030205";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        
   <head>
  {/* Preconnect to CDN for faster asset loading */}
  <link rel="preconnect" href="https://digitx-storage.blr1.cdn.digitaloceanspaces.com" />
  <link rel="dns-prefetch" href="https://digitx-storage.blr1.cdn.digitaloceanspaces.com" />
  <link rel="preconnect" href="https://digitxevents.com" />
  <link rel="dns-prefetch" href="https://digitxevents.com" />
  
  {/* JSON-LD Structured Data for SEO */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "OneBrain",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Bangladesh's first unified AI platform providing access to ChatGPT, Claude, Gemini, DeepSeek and AI Agents workflow builder. Pay with bKash, Nagad.",
        "url": "https://onebrain.app",
        "author": {
          "@type": "Organization",
          "name": "DigitX LLC",
          "url": "https://digitxgroup.com"
        },
        "provider": {
          "@type": "Organization",
          "name": "OneBrain",
          "url": "https://onebrain.app",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Level 8, MTB Building, Software Technology Park",
            "addressLocality": "Jashore",
            "postalCode": "7400",
            "addressCountry": "BD"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+880-1988121220",
            "contactType": "customer service",
            "availableLanguage": ["English", "Bengali"]
          }
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "BDT",
          "lowPrice": "0",
          "highPrice": "1999",
          "offerCount": "4"
        },
        "featureList": [
          "ChatGPT Access",
          "Claude AI Access",
          "Gemini AI Access",
          "DeepSeek AI Access",
          "AI Image Generation",
          "AI Video Generation",
          "AI Audio Generation",
          "AI Agents Workflow Builder",
          "AI Automation",
          "bKash Payment",
          "Nagad Payment",
          "Rocket Payment",
          "No International Card Required"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "2500",
          "bestRating": "5",
          "worstRating": "1"
        }
      })
    }}
  />

  {/* Organization Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "OneBrain",
        "url": "https://onebrain.app",
        "logo": "https://onebrain.app/assets/oneBrainLogo.svg",
        "description": "Bangladesh's #1 AI Platform - Access all top AI models in one subscription",
        "foundingDate": "2024",
        "founders": [
          {
            "@type": "Organization",
            "name": "DigitX LLC"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 8, MTB Building, Software Technology Park",
          "addressLocality": "Jashore",
          "postalCode": "7400",
          "addressCountry": "BD"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+880-1988121220",
          "contactType": "customer service",
          "email": "support@onebrain.app",
          "availableLanguage": ["English", "Bengali"]
        },
        "sameAs": [
          "https://facebook.com/onebrain",
          "https://twitter.com/onebrain_app"
        ]
      })
    }}
  />

  {/* FAQ Schema - Comprehensive for SEO */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is OneBrain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OneBrain is Bangladesh's first unified AI platform that provides access to all top AI models like ChatGPT, Claude, Gemini, DeepSeek, Grok, Llama, Perplexity, and Mistral in one subscription. It also includes AI image generation (DALL-E, Midjourney alternative), AI video generation (Sora, Runway alternative), AI audio, and AI Agents workflow builder for automation."
            }
          },
          {
            "@type": "Question",
            "name": "How can I pay for OneBrain in Bangladesh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can pay with bKash, Nagad, Rocket, or bank transfer. No international credit card is required. OneBrain is the only AI platform in Bangladesh that accepts local mobile banking payments."
            }
          },
          {
            "@type": "Question",
            "name": "What AI models are available on OneBrain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OneBrain provides access to 50+ AI models including ChatGPT (GPT-4, GPT-4o), Claude (Claude 3 Opus, Sonnet), Gemini Pro, DeepSeek V3, Grok, Llama 3, Perplexity, Mistral, Qwen for chat. For images: DALL-E 3, Flux, Stable Diffusion. For video: Sora, Runway, Kling, Veo. For audio: Suno, Udio, ElevenLabs alternatives."
            }
          },
          {
            "@type": "Question",
            "name": "Is OneBrain a ChatGPT alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, OneBrain is the best ChatGPT alternative in Bangladesh. It includes ChatGPT Plus features and also gives you access to Claude, Gemini, and other AI models. You can pay with bKash instead of needing an international credit card."
            }
          },
          {
            "@type": "Question",
            "name": "Is OneBrain a Midjourney alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, OneBrain provides AI image generation capabilities similar to Midjourney, DALL-E, and Stable Diffusion. You can generate stunning AI art and images with local Bangladesh payment methods like bKash and Nagad."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use OneBrain for AI video generation like Sora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, OneBrain includes AI video generation tools similar to Sora, Runway ML, Kling, and Pika Labs. Create professional AI videos with text-to-video technology, all payable with bKash in Bangladesh."
            }
          },
          {
            "@type": "Question",
            "name": "What are AI Agents on OneBrain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Agents is OneBrain's visual workflow builder that lets you automate repetitive tasks without coding. It's similar to n8n, Zapier, or Make.com but simpler and included in your subscription. Automate emails, social media, data processing, and more."
            }
          },
          {
            "@type": "Question",
            "name": "How much does OneBrain cost in Bangladesh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OneBrain offers plans starting from free tier to Pro plans at ৳499-1999/month. This is significantly cheaper than paying for ChatGPT Plus ($20), Claude Pro ($20), and Midjourney ($10) separately which would cost over ৳5000/month."
            }
          },
          {
            "@type": "Question",
            "name": "Can students use OneBrain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! OneBrain is perfect for students in Bangladesh. Students from BUET, DU, NSU, BRAC, IUT, and other universities use OneBrain for assignments, research, coding help, and content creation. We offer affordable pricing for students."
            }
          },
          {
            "@type": "Question",
            "name": "Is OneBrain good for freelancers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Bangladeshi freelancers on Upwork, Fiverr, and Freelancer.com use OneBrain for content writing, image generation, coding assistance, and client work. It's the most affordable way to access premium AI tools for freelancing."
            }
          }
        ]
      })
    }}
  />

  {/* Product Schema for Rich Snippets */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "OneBrain AI Platform",
        "description": "All-in-one AI platform with ChatGPT, Claude, Gemini, DeepSeek, AI image generation, AI video, and AI Agents. Best AI platform in Bangladesh.",
        "brand": {
          "@type": "Brand",
          "name": "OneBrain"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "BDT",
          "lowPrice": "0",
          "highPrice": "1999",
          "offerCount": "4",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Rahim Ahmed"
            },
            "reviewBody": "Best AI platform in Bangladesh. Finally I can use ChatGPT and Claude with bKash payment!"
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Fatima Khan"
            },
            "reviewBody": "As a freelancer, OneBrain saves me so much money. All AI tools in one place with local payment."
          }
        ]
      })
    }}
  />

  {/* WebSite Schema for Sitelinks Search Box */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "OneBrain",
        "alternateName": ["OneBrain AI", "OneBrain Bangladesh", "ওয়ানব্রেইন"],
        "url": "https://onebrain.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://onebrain.app/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      })
    }}
  />

  {/* BreadcrumbList Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://onebrain.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Chat",
            "item": "https://ai.onebrain.app"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "API Service",
            "item": "https://onebrain.app/api-service"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Pricing",
            "item": "https://onebrain.app/#pricing"
          }
        ]
      })
    }}
  />
  
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
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
