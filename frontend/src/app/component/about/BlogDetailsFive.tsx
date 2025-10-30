"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

type ButtonAnimatedGradientProps = {
  text: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  className?: string;
};

// Placeholder ButtonAnimatedGradient (same as your previous pages)
const ButtonAnimatedGradient: React.FC<ButtonAnimatedGradientProps> = ({ text, gradientFrom, gradientTo, borderColor, className }) => (
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

// Simple debounce for scroll performance
const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return (...args: any[]) => {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function BlogDetailsSora2() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is Sora 2 and Sora 2 Pro?",
      answer:
        "Sora 2 generates videos from text or images, and Sora 2 Pro has advanced features for longer, higher-quality videos.",
    },
    {
      question: "How does Sora 2 help content creators?",
      answer:
        "It turns text and images into professional videos quickly and easily.",
    },
    {
      question: "How do I create a video using Sora AI?",
      answer:
        "Enter your text or upload an image, click generate, and download the video.",
    },
    {
      question: "Where can I buy Sora 2 & Sora 2 Pro in Bangladesh?",
      answer:
        "They are only available on OneBrain in Bangladesh.",
    },
    {
      question: "What is included in the Creator Pack?",
      answer:
        "Sora 2 and 10+ free premium AI tools for text, video, audio, and images.",
    },
    {
      question: "How much does the Creator Pack cost?",
      answer: "Just ৳699 for all tools in one plan.",
    },
    {
      question: "How quickly can I start using Sora 2 & Sora 2 Pro?",
      answer: "You get instant access after signing up and paying.",
    },
    {
      question: "How do I start using Sora 2 & Sora 2 Pro?",
      answer:
        "Sign up on onebrain.app, pay for the Creator Pack for Sora 2 and Performance Pack for Sora 2 Pro and start creating.",
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
      title: "Buy Sora 2 & Sora 2 Pro in Bangladesh — Only on OneBrain",
      text: "Get Sora 2 (699 Taka) and Sora 2 Pro (1,999 Taka) with 10+ free premium AI tools on OneBrain.",
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
          Buy Sora 2 & Sora 2 Pro in Bangladesh — Only on OneBrain with 10+ Free AI Tools
        </title>
        <meta
          name="description"
          content="Buy Sora 2 (699 Taka) and Sora 2 Pro (1,999 Taka) exclusively on OneBrain in Bangladesh! Get 10+ premium AI tools free for text, image, audio, and video generation."
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
          {/* Hero (no photo per instruction, subtle gradient block) */}
          <div className="relative w-full h-[40vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          </div>

          <div className="relative px-6 py-12">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-full mx-auto">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                Buy Sora 2 & Sora 2 Pro in Bangladesh — Only on OneBrain with 10+ Free AI Tools
              </h1>

              {/* Intro */}
              <section className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  The future of content creation, Sora 2 and Sora 2 Pro are now available exclusively on
                  <a
                    href="https://www.onebrain.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    OneBrain
                  </a>
                  in Bangladesh. These advanced AI models, powered by OpenAI, turn your text or images into professional videos in just a few clicks. Whether you’re a content creator, marketer, educator, or business professional, Sora AI gives you the tools to produce high-quality, eye-catching videos without expensive equipment or complex software.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Sora AI empowers creators to:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
                  <li>Make engaging explainer videos that simplify complex ideas</li>
                  <li>Create attention-grabbing social media content instantly</li>
                  <li>Produce marketing campaigns with professional visuals and effects</li>
                  <li>Develop educational and training videos that captivate and teach effectively</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  With Sora 2 and Sora 2 Pro, professional video creation is accessible, affordable, and hassle-free. Fast, stunning videos are now entirely in your hands — powered by Sora AI.
                </p>
              </section>

              {/* What is Sora 2 & Sora 2 Pro */}
              <section className="mb-8 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">What is Sora 2 &amp; Sora 2 Pro?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Sora AI is OpenAI's video generation model that creates realistic videos from text prompts. It can now also produce synchronized audio, including dialogue, sound effects, and music in minutes. Perfect for bloggers, educators, marketers, and freelancers, Sora 2 simplifies the process of turning ideas into polished content.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Sora 2 Pro</strong> builds on this with enhanced rendering, longer video duration, and premium AI features, making it ideal for high-quality campaigns, professional presentations, and large-scale multimedia projects.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  <li><strong>Text-to-Video:</strong> Instantly convert scripts, articles, or blog posts into dynamic videos</li>
                  <li><strong>AI Image-to-Video:</strong> Turn images into professional videos using intelligent AI prompts</li>
                  <li><strong>High-Quality Output:</strong> Suitable for YouTube, social media, marketing campaigns, and presentations</li>
                  <li><strong>User-Friendly Interface:</strong> Easy for both beginners and professionals</li>
                  <li><strong>OpenAI-Powered Intelligence:</strong> Accurate, creative, and context-aware video generation</li>
                  <li><strong>Fast & Efficient:</strong> Create professional videos much faster than traditional editing methods</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Whether you’re a YouTuber, marketer, teacher, or freelancer, Sora AI makes video creation fast, simple, and visually stunning.
                </p>
              </section>

              {/* Comparison Table */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Sora 2 vs Sora 2 Pro: Feature Comparison</h2>
                <p className="text-gray-700 leading-relaxed">
                  Not sure which version is right for you? The table below highlights key differences in features, video quality, customization options, and advanced capabilities.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold border-b">Feature</th>
                        <th className="px-4 py-3 text-left font-semibold border-b">Sora 2</th>
                        <th className="px-4 py-3 text-left font-semibold border-b">Sora 2 Pro</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Resolution", "Up to 1280×720 (HD)", "Up to 1792×1024 (HD), higher resolutions"],
                        ["Video Quality", "Standard quality for most use cases", "Professional-grade, cinematic-quality"],
                        ["Performance", "Great for rapid generation & prototyping", "Optimized for stable, commercial use"],
                        [
                          "Target Audience",
                          "Creators, social media, prototypes, education",
                          "Advertisers, filmmakers, marketing professionals",
                        ],
                        [
                          "Use Cases",
                          "Quick production, social content, product demos",
                          "High-res commercials, ads, professional films",
                        ],
                        ["Audio-Visual Sync", "Standard synchronization", "Enhanced synchronization for pro results"],
                      ].map(([feature, basic, pro]) => (
                        <tr key={feature} className="odd:bg-white even:bg-gray-50">
                          <td className="px-4 py-3 align-top border-t">{feature}</td>
                          <td className="px-4 py-3 align-top border-t">{basic}</td>
                          <td className="px-4 py-3 align-top border-t">{pro}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Buy on OneBrain */}
              <section className="mb-8 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">
                  Buy Sora 2 &amp; Sora 2 Pro in Bangladesh — Affordable, Personal, and All-in-One!
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Looking for Sora 2 or Sora 2 Pro at the best price in Bangladesh? OneBrain is your ultimate destination. Not only do you get access to OpenAI-powered video generation, you also unlock 10+ premium AI tools for text, image, audio, and video — all in one platform.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Why choose OneBrain?</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  <li><strong>Affordable Pricing:</strong> Sora 2 for 699 Taka, Sora 2 Pro for 1,999 Taka</li>
                  <li><strong>Exclusive Access:</strong> The only platform in Bangladesh offering Sora 2 &amp; Sora 2 Pro</li>
                  <li><strong>All-in-One Platform:</strong> Create text, image, audio, and video content without multiple subscriptions</li>
                  <li><strong>Fully Personal Accounts:</strong> No sharing, no privacy concerns</li>
                  <li><strong>Privacy Assured:</strong> Your projects and data remain secure</li>
                  <li><strong>Zero Hassle:</strong> Instant access after purchase; no waiting, no complicated setups</li>
                  <li><strong>Experiment Freely:</strong> Thousands of Pro Tokens and unlimited chat & attachments with advanced AI models</li>
                </ul>
              </section>

              {/* Packs/Pricing */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Plans &amp; Pricing</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-xl font-semibold">Creator Pack — <span className="font-bold">৳699</span></h3>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
                      <li>Includes <strong>Sora 2</strong> — AI text-to-video and image-to-video</li>
                      <li>
                        Access to 10+ premium AI tools: ChatGPT Premium, Gemini Premium, DeepSeek, Claude, Llama, Grok,
                        Perplexity, Qwen, Mistral
                      </li>
                      <li>Trending tools: Nano Banana, Kontext Restore, Runway ML, Hailuo, Seedance, VGen, ElevenLabs, Udio AI, Humanizer</li>
                      <li><strong>15,00,000 Pro Tokens</strong> usable across all AI models</li>
                      <li>Unlimited chat & attachments even after Pro Tokens are used</li>
                      <li>Ideal for videos, social media content, marketing materials, and multimedia projects</li>
                      <li>All tools accessible from one dashboard</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="text-xl font-semibold">Performance Pack — <span className="font-bold">৳1,999</span></h3>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
                      <li>Includes <strong>Sora 2 Pro</strong> — faster rendering and up to 4K output</li>
                      <li>
                        Everything in Creator Pack: Sora 2, ChatGPT Premium, Gemini Premium, DeepSeek, Claude, Llama,
                        Grok, Perplexity, Qwen, Mistral, Nano Banana, Kontext Restore, Runway ML, Hailuo, Seedance, VGen,
                        ElevenLabs, Udio AI, Humanizer
                      </li>
                      <li>Additional tools: <strong>KlingAI All Models</strong> for advanced video generation</li>
                      <li><strong>45,00,000 Pro Tokens</strong> usable across all AI models</li>
                      <li>Unlimited chat & attachments even after Pro Tokens are finished</li>
                      <li>Designed for professional creators, agencies, and filmmakers</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* What you can do */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What You Can Do with Sora AI via OneBrain</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  <li><strong>Convert Text into Videos:</strong> Turn articles, scripts, or blog posts into engaging videos</li>
                  <li><strong>Generate Videos from Images:</strong> Use images as references for professional video creation</li>
                  <li><strong>Experiment with Premium AI Tools:</strong> Access 10+ AI tools to enhance your workflow</li>
                  <li><strong>Produce Multimedia Projects:</strong> Combine text, video, and audio for social media, presentations, or campaigns</li>
                </ul>
              </section>

              {/* Free tools included */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Free AI Tools Included in the Packs</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  <li><strong>Text & Chat AI:</strong> ChatGPT, Claude, Gemini, Qwen, Grok, DeepSeek</li>
                  <li><strong>Video AI:</strong> Runway ML, Hailuo, Seedance, VGen, KlingAI</li>
                  <li><strong>Audio & Music AI:</strong> ElevenLabs AI, Udio AI</li>
                  <li><strong>Image & Graphics AI:</strong> Nano Banana, Kontext Restore, Gemini Banana AI</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  All tools come free with the packs, creating a complete multimedia AI studio in one subscription.
                </p>
              </section>

              {/* How to buy */}
                <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Where and How to Buy Sora 2 &amp; Sora 2 Pro in Bangladesh</h2>
        <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
          <li>Visit <a className="text-blue-600 hover:underline font-semibold" href="https://onebrain.app" target="_blank" rel="noopener noreferrer">OneBrain</a>.</li>
           <li>Sign up using your email and phone number</li>
           <li>Click on Try Pro button on the bottom left corner</li>
          <li>Select your pack: Creator Pack (৳699) or Performance Pack (৳1,999)</li>
          <li>Pay securely — local and international options like <strong>bKash</strong>, <strong>Nagad</strong>, and <strong>VISA</strong> are supported</li>
          <li>Start creating — instant access to Sora AI and the full suite of AI tools</li>
        </ol>
      </section>

              {/* FAQs */}
              <section className="mb-8 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="text-sm text-gray-500 mb-2">Showing {faqItems.length} FAQ items</div>
                <div className="flex flex-col gap-3">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                          type="button"
                          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        aria-expanded={openFAQ === index}
                        aria-controls={`faq-${index}`}
                        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex items-center justify-between"
                      >
                          <span className="font-medium text-gray-800">{index + 1}. {item.question}</span>
                        {openFAQ === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>

                      <div
                        id={`faq-${index}`}
                        className={`p-4 text-gray-700 border-t border-gray-200 ${openFAQ === index ? 'block' : 'hidden'}`}
                      >
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final Thought */}
              <section className="mt-8 text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Final Thought</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you are looking for hassle-free, fully personal, and secure AI tools, OneBrain is your ultimate choice for Sora 2 and Sora 2 Pro in Bangladesh. For professional-quality AI video creation, buying Sora 2 & Sora 2 Pro via OneBrain is the smartest decision:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2 space-y-2">
                  <li><strong>Sora 2 (৳699)</strong> — AI text-to-video and image-to-video generation</li>
                  <li><strong>Sora 2 Pro (৳1,999)</strong> — Advanced features for higher-quality, longer videos</li>
                  <li><strong>10+ premium AI tools</strong> included in each pack</li>
                  <li>OneBrain’s all-in-one platform for text, image, audio, and video creation</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Start creating today at <a className="text-blue-600 hover:underline font-semibold" href="https://www.onebrain.app" target="_blank" rel="noopener noreferrer">onebrain.app</a> and unlock Sora 2, Sora 2 Pro, and 10+ premium AI tools — all with your chosen plan, fully personal, secure, and hassle-free.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
