"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu, X, Share2, ChevronDown, ChevronUp } from "lucide-react";

// Placeholder ButtonAnimatedGradient
type ButtonAnimatedGradientProps = {
  text: React.ReactNode | string;
  gradientFrom: string;
  gradientTo: string;
  borderColor?: string;
  className?: string;
};

const ButtonAnimatedGradient: React.FC<ButtonAnimatedGradientProps> = ({
  text,
  gradientFrom,
  gradientTo,
  borderColor = "#000",
  className = "",
}) => (
  <button
    className={className}
    style={{
      background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      border: `1px solid ${borderColor}`,
    }}
  >
    {text}
  </button>
);

// Debounce utility
const debounce = <T extends (...args: any[]) => any>(func: T, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function BlogDetailsElevenLabs() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is ElevenLabs AI?",
      answer:
        "ElevenLabs AI is a cutting-edge voice generation platform for professional-quality audio, including voice cloning, custom AI voices, and text-to-speech.",
    },
    {
      question: "How does ElevenLabs help content creators?",
      answer:
        "It allows you to produce human-like voiceovers quickly for videos, podcasts, e-learning, and multimedia content.",
    },
    {
      question: "Can I create voices in Bangla, Hindi, Urdu, or English?",
      answer: "Yes, ElevenLabs supports multiple languages and accents including British and American.",
    },
    {
      question: "Where can I buy ElevenLabs in Bangladesh?",
      answer: "Only via OneBrain, bundled with 10+ free AI tools and 15,00,000 Pro Tokens.",
    },
    {
      question: "What is included in the Creator Pack?",
      answer:
        "ElevenLabs AI, 15,00,000 Pro Tokens, and access to dozens of premium AI tools for text, image, video, and audio.",
    },
    {
      question: "How much does the Creator Pack cost?",
      answer: "৳699 in Bangladesh for all included tools.",
    },
    {
      question: "Can I continue using AI tools after Pro Tokens?",
      answer: "Yes, OneBrain provides unlimited chat and attachments even after Pro Tokens are used.",
    },
    {
      question: "How do I start using ElevenLabs AI?",
      answer:
        "Sign up on onebrain.app, purchase the Creator Pack, and get instant access to ElevenLabs and all included AI tools.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: `Q: ${item.question}`,
      acceptedAnswer: { "@type": "Answer", text: `A: ${item.answer}` },
    })),
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = debounce(() => setIsSticky(window.scrollY > 50), 100);
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setShowBurgerMenu(isMobile);
      if (!isMobile) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleShare = async () => {
    const shareData = {
      title: "ElevenLabs AI: Voice Cloning with 10+ Free AI Tools in Bangladesh",
      text: "Buy ElevenLabs AI in Bangladesh – clone voices, convert text-to-speech, and access 10+ free AI tools via OneBrain.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      navigator.clipboard
        .writeText(shareData.url)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Clipboard copy failed:", err));
    }
  };

  const navItems = [
    { to: "/models", label: "AI Models" },
    { to: "/pricing", label: "Pricing" },
    { to: "/updates", label: "Brain Upgrading Log" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <Head>
        <title>
          ElevenLabs AI: Voice Cloning with 10+ Free AI Tools in Bangladesh
        </title>
        <meta
          name="description"
          content="Buy ElevenLabs AI in Bangladesh – clone voices, convert text-to-speech, and access 10+ free AI tools for video, music, and image creation via OneBrain"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen font-sans">
        {/* Navbar */}
        <nav
          className={`fixed left-1/2 transform -translate-x-1/2 border border-gray-700 rounded-full px-4 py-2 flex items-center justify-between w-[85%] max-w-3xl z-20 transition-all duration-300 ${
            isSticky ? "top-2 shadow-lg bg-white/10 backdrop-blur-[7px]" : "top-6 bg-transparent"
          }`}
        >
          <Link href="/about">
            <img
              src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
              alt="OneBrain Logo"
              className="h-6"
              onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}
            />
          </Link>
          <div className="flex items-center">
            {showBurgerMenu && (
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>

          <ul
            className={`flex text-sm transition-all duration-300 ${
              showBurgerMenu
                ? `absolute top-full right-0 w-60 flex-col items-start py-4 border border-gray-300 shadow-lg text-white font-bold rounded-lg ${
                    isOpen ? "flex bg-white/10 backdrop-blur-[7px]" : "hidden"
                  }`
                : "flex gap-2 text-gray-300 items-center"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
                  onClick={showBurgerMenu ? closeMenu : undefined}
                  aria-current={
                    typeof window !== "undefined" && window.location.pathname === item.to
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {!showBurgerMenu && (
              <li>
                <Link href="/login">
                  <ButtonAnimatedGradient
                    text="Sign-In"
                    gradientFrom="#0f1747"
                    gradientTo="#0f1747"
                    borderColor="#b2b8f6"
                    className="w-[135px] h-[40px] rounded-full font-normal block"
                  />
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="relative pt-24">
          <div className="relative w-full h-[40vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-700 to-blue-800" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          </div>

          <div className="relative px-6 py-12">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-full mx-auto">
              <h1 className="text-4xl font-bold text-purple-900 mb-4">
                ElevenLabs AI: Voice Cloning with 10+ Free AI Tools in Bangladesh
              </h1>

              {/* Intro */}
              <section className="mb-8 text-gray-700">
                <p>
                  The future of content creation is here, and it sounds human. ElevenLabs AI is the ultimate tool for creators, educators, marketers, and businesses who want high-quality, human-like voiceovers, voice cloning, and studio-level text-to-speech — all in one platform.
                </p>
                <p className="mt-4">
                  The game-changer? When you buy ElevenLabs AI via <a href="https://www.onebrain.app" className="text-blue-600 hover:underline font-semibold">OneBrain</a> in Bangladesh, you unlock the Creator Pack for just ৳699, which includes ElevenLabs AI, 15,00,000 Pro Tokens, and full access to dozens of premium AI tools for text, image, video, and audio — all included for free.
                </p>
                <p className="mt-4">
                  This makes it the most powerful and cost-effective AI solution in Bangladesh, allowing creators to produce complete multimedia content from one platform.
                </p>
              </section>

              {/* What is ElevenLabs AI */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What is ElevenLabs AI?</h2>
                <p className="text-gray-700 leading-relaxed">
                  ElevenLabs AI is a cutting-edge voice generation platform designed for creators who need professional-quality audio quickly and efficiently.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Text-to-Speech Conversion:</strong> Turn any text into natural, expressive, human-like speech instantly.</li>
                  <li><strong>Voice Cloning:</strong> Clone existing voices or create custom AI voices for storytelling, content, or branding.</li>
                  <li><strong>Multi-Language Support:</strong> Work in Bangla, Hindi, Urdu, and English seamlessly.</li>
                  <li><strong>Popular Voices & Customization:</strong> Use pre-built voices like Adam, or craft your own signature AI voice.</li>
                  <li><strong>Accent Flexibility:</strong> Add British, American, or other accents to make your content sound professional.</li>
                </ul>
              </section>

              {/* Why Choose */}
              <section className="mb-8 text-gray-700">
                <h2 className="text-2xl font-semibold mb-4">Why Choose ElevenLabs from OneBrain?</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Affordable Pricing:</strong> Creator Pack for ৳699 for full access to ElevenLabs features.</li>
                  <li><strong>Full AI Suite for Free:</strong> Dozens of premium AI tools included for text, image, video, and audio.</li>
                  <li><strong>15,00,000 Pro Tokens:</strong> Experiment freely across AI tasks without limitations.</li>
                  <li><strong>All-in-One Platform:</strong> Voice, text, image, video, and music AI tools in one plan.</li>
                </ul>
              </section>

              {/* What You Can Do */}
              <section className="mb-8 text-gray-700">
                <h2 className="text-2xl font-semibold mb-4">What You Can Do with ElevenLabs via OneBrain</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clone Voices or Create Custom AI Voices in multiple languages and accents.</li>
                  <li>Convert Text into Speech for articles, scripts, blogs, or presentations.</li>
                  <li>Generate Voiceovers for videos, reels, podcasts, e-learning, or presentations.</li>
                  <li>Experiment Freely with Pro Tokens across ElevenLabs and other AI tools.</li>
                  <li>Combine Multimedia Assets: Integrate voice with video, images, and music.</li>
                  <li>Access All-In-One AI Tools for free while using ElevenLabs.</li>
                </ul>
              </section>

              {/* AI Suite */}
              <section className="mb-8 text-gray-700">
                <h2 className="text-2xl font-semibold mb-4">All-Inclusive AI Suite Included in the Creator Pack</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Text & Chat AI Tools:</strong> ChatGPT, Claude, Gemini, Qwen, Grok, DeepSeek, Perplexity AI for writing, coding, summarizing, and AI research.</li>
                  <li><strong>Image AI Tools:</strong> Nano Banana, Kontext Restore, Grok AI, Gemini Banana AI for image restoration, graphics, and creative visuals.</li>
                  <li><strong>Video AI Tools:</strong> Runway ML, Hailuo AI, VEO3, Sedance, Wan AI for text-to-video, animation, and editing.</li>
                  <li><strong>Audio & Music AI Tools:</strong> ElevenLabs AI, Udio AI, Humanizer & Audio Enhancers for professional voiceovers, music tracks, and audio optimization.</li>
                </ul>
              </section>

              {/* Unlimited Chat */}
              <section className="mb-8 text-gray-700">
                <h2 className="text-2xl font-semibold mb-4">Unlimited Chat & Attachments</h2>
                <p>
                  Even after using your Pro Tokens, OneBrain provides unlimited chat and file attachments with advanced AI models, allowing you to continue creating without limits.
                </p>
              </section>

              {/* Extended Benefits */}
              <section className="mb-8 text-gray-700">
                <h2 className="text-2xl font-semibold mb-4">Extended Benefits of the Creator Pack</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete Multimedia AI Suite: Text, audio, image, video, and music creation.</li>
                  <li>Affordable Access: Everything bundled in one plan for just ৳699.</li>
                  <li>Time-Saving: Produce professional content quickly and efficiently.</li>
                  <li>Scalable Projects: Work on multiple media types simultaneously.</li>
                  <li>All-in-One Convenience: No need for multiple subscriptions.</li>
                </ul>
              </section>

              {/* How to Buy */}
              <section className="mb-8 text-gray-700">
                <h2 className="text-2xl font-semibold mb-4">How to Buy ElevenLabs and Price in Bangladesh</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Visit <a href="https://www.onebrain.app" className="text-blue-600 hover:underline font-semibold">OneBrain</a>.</li>
                  <li>Sign Up with email and phone number.</li>
                  <li>Select the Creator Pack for ৳699, including ElevenLabs AI, 15,00,000 Pro Tokens, and full AI suite.</li>
                  <li>Pay securely using local and international methods.</li>
                  <li>Start creating instantly with ElevenLabs and all included AI tools.</li>
                </ol>
              </section>

              {/* FAQs */}
              <section className="mb-8 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                      >
                        <span className="font-medium">{item.question}</span>
                        {openFAQ === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openFAQ === index && (
                        <div className="p-4 text-gray-700 border-t border-gray-200">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Share */}
              <div className="mt-6">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-800 hover:text-purple-600 focus:outline-none"
                  aria-label="Share this article"
                >
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>

              {/* Final Thought */}
              <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Final Thought</h2>
                <p className="text-gray-700 leading-relaxed">
                  For professional-quality AI voiceovers and complete multimedia content in Bangladesh, buying ElevenLabs via OneBrain is the smartest choice.
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                  <li>ElevenLabs AI for voice cloning and text-to-speech</li>
                  <li>15,00,000 Pro Tokens for extensive AI usage</li>
                  <li>Full access to text, image, video, and audio AI tools for free</li>
                  <li>All-in-one subscription via OneBrain for effortless content creation</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Start creating today at <a href="https://www.onebrain.app" className="text-blue-600 hover:underline font-semibold">onebrain.app</a> and unlock ElevenLabs + 15,00,000 Pro Tokens + Max AI Unlimited with dozens of premium AI tools free. Your content, your voice, your creativity — all powered by AI.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
