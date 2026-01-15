"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, 
  ArrowRight, Check, Copy, 
  ChevronRight, CreditCard,
  Globe, AlertTriangle, XCircle, CheckCircle,
  Code, Rocket, Users, Building2
} from "lucide-react";

// Animated code block component
const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
      <div className="relative bg-[#0D0D12] rounded-2xl border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <span className="text-xs text-gray-500 ml-2 font-mono">{language}</span>
          </div>
          <button 
            onClick={copyToClipboard}
            className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        <pre className="p-5 overflow-x-auto text-sm">
          <code className="text-gray-300 font-mono leading-relaxed">{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Story section component
const StorySection = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function OneAPIPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const sampleCode = `import requests

# Simple API call to OneAPI
response = requests.post(
    "https://api.onebrain.app/v1/chat/completions",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    json={
        "model": "chatgpt",  # or claude, gemini, deepseek
        "messages": [
            {"role": "user", "content": "Hello from Dhaka!"}
        ]
    }
)

print(response.json())`;

  const models = [
    { name: "ChatGPT", src: "/assets/models/chatgpt.svg" },
    { name: "Claude", src: "/assets/models/claude.svg" },
    { name: "Gemini", src: "/assets/models/gemini.svg" },
    { name: "Grok", src: "/assets/models/grok.svg" },
    { name: "DeepSeek", src: "/assets/models/deepseek.svg" },
    { name: "Llama", src: "/assets/models/llama.svg" },
    { name: "Qwen", src: "/assets/models/qwen.svg" },
    { name: "Mistral", src: "/assets/models/mistral.svg" },
  ];

  // Helper function to get model icon based on feature text
  const getModelIcon = (feature: string) => {
    const lowerFeature = feature.toLowerCase();
    
    if (lowerFeature.includes("gpt") || lowerFeature.includes("chatgpt") || lowerFeature.includes("openai")) {
      return "/assets/models/chatgpt.svg";
    } else if (lowerFeature.includes("claude") || lowerFeature.includes("anthropic")) {
      return "/assets/models/cloude-White.svg";
    } else if (lowerFeature.includes("gemini") || lowerFeature.includes("google")) {
      return "/assets/models/gemini.svg";
    } else if (lowerFeature.includes("grok") || lowerFeature.includes("x ai")) {
      return "/assets/models/grok.svg";
    } else if (lowerFeature.includes("deepseek")) {
      return "/assets/models/deepseek.svg";
    } else if (lowerFeature.includes("llama")) {
      return "/assets/models/llama.svg";
    } else if (lowerFeature.includes("qwen")) {
      return "/assets/models/qwen.svg";
    } else if (lowerFeature.includes("mistral")) {
      return "/assets/models/mistral.svg";
    }
    return null;
  };

  const pricingTiers = [
    {
      name: "Learner",
      price: "৳999",
      period: "/Monthly",
      credit: "TK999.00 Credit",
      features: [
        "Access to Nano/Flash Models",
        "Gpt-4.1 Nano & Mini",
        "Google Gemini 2.5 Flash",
        "Deepseek Chat & R1",
        "X ai Grok 4 Fast",
        "Valid for 30 Days"
      ],
      cta: "Get Started",
      popular: false,
      badge: null
    },
    {
      name: "Builder",
      price: "৳2,999",
      period: "/Monthly",
      credit: "TK2999.00 Credit",
      features: [
        "Includes all Learner Models, Plus:",
        "Anthropic Claude Haiku & Sonnet",
        "OpenAI GPT-5.2 Chat",
        "Google Gemini 2.5 Pro",
        "Valid for 30 Days"
      ],
      cta: "Get Started",
      popular: false,
      badge: null
    },
    {
      name: "Startup",
      price: "৳7,999",
      period: "/Monthly",
      credit: "TK7999.00 Credit",
      features: [
        "Includes all Builder Models, Plus:",
        "OpenAI GPT-5.2 & 5.1 Codex",
        "Google Gemini 3 Pro Preview",
        "X ai Grok 4",
        "Never Expires"
      ],
      cta: "Get Started",
      popular: false,
      badge: null
    },
    {
      name: "Enterprise",
      price: "৳24,999",
      period: "/Monthly",
      credit: "TK24999.00 Credit",
      features: [
        "Includes all Startup Models",
        "Enterprise Usage Limits",
        "Never Expires",
        "Priority Support"
      ],
      cta: "Get Started",
      popular: false,
      badge: "ACTIVE"
    }
  ];


  return (
    <main className='bg-[#030205] w-full min-h-screen text-white selection:bg-white/20 overflow-x-hidden relative' itemScope itemType="https://schema.org/WebPage">
      
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <div className={`w-full max-w-7xl rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          isSticky 
            ? "glass-card bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50" 
            : "bg-transparent"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10 flex items-center gap-2 md:gap-3">
            <Image
              src="/assets/oneBrainLogo.svg"
              alt="OneBrain Logo"
              width={160}
              height={32}
              className="h-6 w-auto md:h-8"
            />
            <div className="h-6 md:h-8 w-px bg-gray-700"></div>
            <span className="text-lg md:text-xl font-medium text-gray-400 mt-1">OneAPI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('the-problem')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              The Problem
            </button>
            <button onClick={() => scrollToSection('the-solution')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              The Solution
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Pricing
            </button>
            
            <a 
              href={`${process.env.NEXT_PUBLIC_LOGIN_URL || 'https://ai.onebrain.app'}/api/login`}
              className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-[#1A1B2E] border border-white/10 rounded-full hover:bg-[#232438] hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get API Key
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white p-2 hover:bg-white/5 rounded-full transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-4 left-4 z-50 bg-[#1A1B2E]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden"
        >
          <button onClick={() => scrollToSection('the-problem')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors">The Problem</button>
          <button onClick={() => scrollToSection('the-solution')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors">The Solution</button>
          <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors">Pricing</button>
          <div className="h-px bg-white/10 my-2"></div>
          <a 
          href={`${process.env.NEXT_PUBLIC_LOGIN_URL || 'https://ai.onebrain.app'}/api/login`}
           className="block w-full text-center px-4 py-3 text-white bg-[#1A1B2E] border border-white/10 rounded-xl font-medium hover:bg-[#232438]">Get API Key</a>
        </motion.div>
      )}

      {/* ==================== CHAPTER 1: THE HOOK ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <StorySection>
            {/* Main Headline */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6" itemProp="headline">
              <span className="text-gray-300 drop-shadow-md">You Build AI Apps.</span>
              <span className="block mt-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-700 text-transparent bg-clip-text pb-2 drop-shadow-sm">We Handle the Rest.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-10" itemProp="description">
              The first unified AI API platform built for Bangladeshi developers. 
              Access every major AI model. Pay in <span className="text-gray-400 font-medium">Taka</span>.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a 
                href={`${process.env.NEXT_PUBLIC_LOGIN_URL || 'https://ai.onebrain.app'}/api/login`}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#1A1B2E] text-gray-200 border border-white/10 px-8 font-medium transition-all duration-300 hover:bg-[#232438] hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] focus:outline-none"
              >
                <span className="mr-2">Start Building Today</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button 
                onClick={() => scrollToSection('the-problem')}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/5 bg-white/[0.03] px-8 font-medium text-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:text-gray-200 hover:border-white/10"
              >
                Read Our Story
              </button>
            </div>

            {/* Scroll indicator */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-600"
            >
              <ChevronRight className="w-6 h-6 rotate-90 mx-auto" />
            </motion.div>
          </StorySection>
        </div>
      </section>

      {/* ==================== CHAPTER 2: THE PROBLEM ==================== */}
      <section id="the-problem" className="py-24 md:py-32 border-t border-white/5" aria-labelledby="problem-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <StorySection className="text-center mb-20">
            <span className="text-gray-600 font-medium tracking-wider uppercase text-sm mb-4 block">Chapter 1</span>
            <h2 id="problem-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Struggle of Building AI in Bangladesh
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every Bangladeshi developer building with AI knows this pain...
            </p>
          </StorySection>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <StorySection>
              <div className="p-8 rounded-3xl glass-card border border-white/5 group hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">"My Card Got Declined... Again"</h3>
                <p className="text-gray-400 leading-relaxed">
                  OpenAI, Anthropic, Google — none of them accept Bangladeshi cards. 
                  You need a dual-currency card, a friend abroad, or expensive workarounds just to get started.
                </p>
              </div>
            </StorySection>

            <StorySection>
              <div className="p-8 rounded-3xl glass-card border border-white/5 group hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">"Managing 5 Different API Keys"</h3>
                <p className="text-gray-400 leading-relaxed">
                  ChatGPT for chat, Claude for analysis, Gemini for vision... 
                  Each provider has different docs, different billing, different rate limits. It's chaos.
                </p>
              </div>
            </StorySection>

            <StorySection>
              <div className="p-8 rounded-3xl glass-card border border-white/5 group hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">"$20 Feels Like ৳5,000"</h3>
                <p className="text-gray-400 leading-relaxed">
                  When you're a student in Dhaka or a freelancer in Chittagong, 
                  paying $20/month for each AI service adds up fast. It's not sustainable.
                </p>
              </div>
            </StorySection>

            <StorySection>
              <div className="p-8 rounded-3xl glass-card border border-white/5 group hover:border-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <XCircle className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">"No Local Support When Things Break"</h3>
                <p className="text-gray-400 leading-relaxed">
                  When your API stops working at 2 AM before a deadline, 
                  good luck getting help from a US-based support team that's asleep.
                </p>
              </div>
            </StorySection>
          </div>

          {/* The Question */}
          <StorySection className="text-center">
            <div className="p-8 md:p-12 rounded-3xl glass-card max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed">
                "Why is it so hard to build AI products in Bangladesh?"
              </p>
              <p className="text-gray-500 mt-4">
                — Every developer we talked to
              </p>
            </div>
          </StorySection>
        </div>
      </section>

      {/* ==================== CHAPTER 3: THE SOLUTION ==================== */}
      <section id="the-solution" className="py-24 md:py-32 bg-[#0A0A0F]/50 border-y border-white/5" aria-labelledby="solution-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <StorySection className="text-center mb-20">
            <span className="text-gray-600 font-medium tracking-wider uppercase text-sm mb-4 block">Chapter 2</span>
            <h2 id="solution-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
              So We Built <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">OneAPI</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A single API that gives you access to every major AI model. Built for developers everywhere in Bangladesh.
            </p>
          </StorySection>

          {/* Solution Points */}
          <div className="space-y-8 mb-20">
            <StorySection>
              <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-3xl glass-card border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-8 h-8 text-white/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Pay in Taka. No Card Hassle.</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    bKash, Nagad, Rocket, bank transfer — pay however you want. 
                    No international card needed. No currency conversion headaches. 
                    Just simple, local payments.
                  </p>
                </div>
              </div>
            </StorySection>

            <StorySection>
              <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-3xl glass-card border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Code className="w-8 h-8 text-white/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">One API. Every Model.</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    ChatGPT, Claude, Gemini, DeepSeek, Llama, Mistral — all through one endpoint. 
                    Switch models by changing one parameter. No new SDKs, no new documentation to learn.
                  </p>
                </div>
              </div>
            </StorySection>

            <StorySection>
              <div className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-3xl glass-card border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-white/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Support That Speaks Your Language</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Our team is based in Dhaka. We understand your timezone, your challenges, 
                    and we're here when you need us — in Bangla or English.
                  </p>
                </div>
              </div>
            </StorySection>
          </div>

          {/* Model Logos */}
          <StorySection className="text-center">
            <p className="text-gray-600 text-sm uppercase tracking-widest mb-8">All the models you need</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {models.map((model, i) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                    <Image src={model.src} alt={model.name} width={32} height={32} className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{model.name}</span>
                </motion.div>
              ))}
            </div>
          </StorySection>
        </div>
      </section>

      {/* ==================== CHAPTER 4: HOW IT WORKS ==================== */}
      <section className="py-24 md:py-32" aria-labelledby="howto-heading" id="how-it-works">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <StorySection className="text-center mb-16">
            <span className="text-gray-600 font-medium tracking-wider uppercase text-sm mb-4 block">Chapter 3</span>
            <h2 id="howto-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start in 3 Minutes
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              No complex setup. No waiting for approvals. Just code.
            </p>
          </StorySection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <StorySection>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Sign Up & Get Your Key</h3>
                    <p className="text-gray-400">Create an account, add credit via bKash/Nagad, and get your API key instantly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Copy the Code</h3>
                    <p className="text-gray-400">Use our OpenAI-compatible endpoint. If you've used ChatGPT's API before, you already know how.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Build Something Amazing</h3>
                    <p className="text-gray-400">Switch between models, scale your app, and focus on what matters — your product.</p>
                  </div>
                </div>
              </div>
            </StorySection>

            <StorySection>
              <CodeBlock code={sampleCode} language="python" />
            </StorySection>
          </div>
        </div>
      </section>

      {/* ==================== CHAPTER 5: WHO'S USING IT ==================== */}
      <section className="py-24 md:py-32 bg-[#0A0A0F]/50 border-y border-white/5" aria-labelledby="audience-heading" id="use-cases">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <StorySection className="text-center mb-16">
            <span className="text-gray-600 font-medium tracking-wider uppercase text-sm mb-4 block">Chapter 4</span>
            <h2 id="audience-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
              Built for Builders Like You
            </h2>
          </StorySection>

          <div className="grid md:grid-cols-3 gap-6">
            <StorySection>
              <div className="p-8 rounded-3xl glass-card border border-white/5 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Students & Learners</h3>
                <p className="text-gray-500">
                  Building your first AI project for university? 
                  Start with our affordable plans and learn without breaking the bank.
                </p>
              </div>
            </StorySection>

            <StorySection>
              <div className="p-8 rounded-3xl glass-card border border-white/5 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Startups & Founders</h3>
                <p className="text-gray-500">
                  Launching an AI-powered product? 
                  Scale from prototype to production without worrying about API management.
                </p>
              </div>
            </StorySection>

            <StorySection>
              <div className="p-8 rounded-3xl glass-card border border-white/5 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agencies & Enterprises</h3>
                <p className="text-gray-500">
                  Building AI solutions for clients? 
                  Get dedicated support, volume pricing, and enterprise-grade reliability.
                </p>
              </div>
            </StorySection>
          </div>
        </div>
      </section>

      {/* ==================== CHAPTER 6: PRICING ==================== */}
      <section id="pricing" className="py-24 md:py-32" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <StorySection className="text-center mb-16">
            <span className="text-gray-600 font-medium tracking-wider uppercase text-sm mb-4 block">Chapter 5</span>
            <h2 id="pricing-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pricing That Makes Sense
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              No hidden fees. No surprises. Just honest pricing in Taka.
            </p>
          </StorySection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {pricingTiers.map((tier, i) => (
              <StorySection key={i}>
                <div className={`relative p-6 rounded-2xl border transition-all duration-300 glass-card group overflow-hidden h-full flex flex-col ${
                  tier.badge ? "border-white/40 bg-gradient-to-br from-white/15 to-white/5" : "border-white/10"
                }`}>
                  {tier.badge && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-gray-500 rounded-full text-xs font-bold text-white hidden">
                      {tier.badge}
                    </div>
                  )}
                  
                  {/* Header: Title and Price on same line */}
                  <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    <div className="text-right shrink-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-white">{tier.price}</span>
                      </div>
                      <span className="text-xs text-gray-400">{tier.period}</span>
                    </div>
                  </div>

                  {/* Credit Section */}
                  <div className="relative z-10 mb-6 px-4 py-3 rounded-full bg-white/3 border border-gray-900">
                    <p className="text-sm font-semibold text-white text-center">{tier.credit}</p>
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href={`${process.env.NEXT_PUBLIC_LOGIN_URL || 'https://ai.onebrain.app'}/api/login`}
                    className={`relative z-10 block w-full py-2.5 rounded-full font-medium text-center text-sm transition-all mb-6 ${
                      tier.badge
                        ? "bg-white/10 text-white border border-white/20 hover:bg-white/15" 
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {tier.cta}
                  </a>

                  {/* Features List */}
                  <ul className="relative z-10 space-y-3 mb-6 flex-grow">
                    {tier.features.map((feature, j) => {
                      const modelIcon = getModelIcon(feature);
                      return (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed">
                          {modelIcon ? (
                            <div className="mt-0.5 w-4 h-4 rounded  shrink-0 group-hover:bg-white/10 transition-colors flex items-center justify-center">
                              <Image src={modelIcon} alt="model" width={12} height={12} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                            </div>
                          ) : (
                            <div className="mt-0.5 p-0.5 rounded-full bg-white/5 border border-white/10 shrink-0 group-hover:bg-white/10 transition-colors">
                              <Check className="w-3 h-3 text-gray-400 group-hover:text-gray-300 transition-colors" />
                            </div>
                          )}
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </StorySection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CHAPTER 7: THE CALL ==================== */}
      <section className="py-24 md:py-32 border-t border-white/5" aria-labelledby="cta-heading" id="get-started">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <StorySection className="text-center">
            <div className="p-12 md:p-16 rounded-3xl glass-card overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                Your AI Journey Starts Here
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Join hundreds of Bangladeshi developers who are building the future with AI. 
                No more payment barriers. No more complexity. Just build.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <a 
                  href={`${process.env.NEXT_PUBLIC_LOGIN_URL || 'https://ai.onebrain.app'}/api/login`}
                  className="group/btn w-full sm:w-auto px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  Get Your API Key
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="mailto:support@onebrain.app"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-gray-400 border border-white/5 bg-white/[0.03] rounded-full hover:bg-white/5 hover:text-gray-200 transition-all"
                >
                  Talk to Us
                </a>
              </div>

              <p className="text-gray-600 text-sm mt-8 relative z-10">
                Questions? WhatsApp us at +880 1988121220
              </p>
            </div>
          </StorySection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 bg-[#030205] relative overflow-hidden" role="contentinfo">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.02] rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block">
                <Image
                  src="/assets/oneBrainLogo.svg"
                  alt="OneBrain"
                  width={180}
                  height={40}
                  className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <div className="h-6 w-px bg-gray-700"></div>
              <span className="text-sm font-medium text-gray-400">OneAPI</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <a href="mailto:support@onebrain.app" className="hover:text-white transition-colors">Support</a>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>© 2026 OneBrain. A Product of</span>
                  <a
                    href="https://digitxgroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/DIGITX.svg"
                      alt="DigitX"
                      width={60}
                      height={16}
                      className="h-4 w-auto"
                    />
                  </a>
                </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
