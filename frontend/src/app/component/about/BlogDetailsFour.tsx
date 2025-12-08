"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Share2, ArrowLeft } from 'lucide-react';
import Footer from '../Footer';


export default function BlogDetailsFour() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'OneBrain Launches Llama 3.3: Comparing with Grok 3',
          text: 'Check out this comparison of Llama 3.3 and Grok 3 AI models by OneBrain!',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#030205] text-white selection:bg-blue-500/30">
      
      {/* Navigation Header */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 px-2 sm:px-4 flex z-50 items-center justify-between w-[95%] max-w-7xl transition-all duration-500 ease-in-out`}
        style={{
          top: isSticky ? "16px" : isMobile ? "20px" : "2rem",
        }}
      >
        <div className={`
          px-2 sm:px-4 py-3 flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-500 ease-in-out
          ${(isSticky || isMobile || isOpen) 
            ? "glass-card shadow-2xl shadow-black/50 bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10" 
            : "bg-transparent border border-transparent"}
        `}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-10">
              <Image
                src="/assets/oneBrainLogo.svg"
                alt="OneBrain Logo"
                width={200}
                height={40}
                className="h-6 w-[120px] pl-2 xs:h-7 xs:w-[140px] sm:h-8 sm:w-[160px] md:h-10 md:w-[200px]"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center">
                 <ul className={`flex items-center gap-1 lg:gap-2 rounded-full p-1 transition-all duration-300 ${
                    (isSticky) 
                      ? "bg-transparent border-transparent" 
                      : "bg-white/5 border border-white/5 backdrop-blur-sm"
                  }`}>
                     {[
                        { name: "AI Models", href: "/#featuresSection" },
                        { name: "Pricing", href: "/#oneBrainPromoSection" },
                        { name: "Updates", href: "/#updatesSection" },
                        { name: "Contact Us", href: "/#faqSection" },
                     ].map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 block">
                                {item.name}
                            </Link>
                        </li>
                     ))}
                     <li>
                        <Link href="/blog" className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-white bg-white/10 shadow-inner block">
                            Blog
                        </Link>
                     </li>
                 </ul>

                 {/* Sign In */}
                 <div className="ml-4 pl-4 border-l border-white/10">
                    <a href="https://ai.onebrain.app/login" className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-[#1A1B2E] border border-blue-500/30 rounded-full hover:bg-[#232438] hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">Sign In</span>
                    </a>
                 </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
            <div className="absolute top-full right-0 mt-3 w-60 mx-3 sm:mx-4 bg-[#1a1f3a]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-40">
                <ul className="py-3">
                    {[
                        { name: "AI Models", href: "/#featuresSection" },
                        { name: "Pricing", href: "/#oneBrainPromoSection" },
                        { name: "Updates", href: "/#updatesSection" },
                        { name: "Contact Us", href: "/#faqSection" },
                        { name: "Blog", href: "/blog" },
                    ].map((item) => (
                        <li key={item.name} className="px-5 py-1">
                             <Link href={item.href} onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-xl font-medium text-sm">
                                {item.name}
                             </Link>
                        </li>
                    ))}
                     <div className="h-px bg-white/20 mx-5 my-3"></div>
                     <li className="px-5 py-1">
                        <a href="https://ai.onebrain.app/login" className="block w-full text-center px-4 py-3 bg-[#1A1B2E] border border-white/10 text-white hover:bg-[#232438] rounded-xl font-medium text-sm">
                            Sign In
                        </a>
                     </li>
                </ul>
            </div>
        )}
      </div>

      {/* Main Content Section */}
      <main className="relative pt-32 pb-20 px-6">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Blog
            </Link>

            <article className="bg-[#0F0F13] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {/* Cover Image */}
                <div className="relative h-[300px] md:h-[400px] w-full">
                    <Image 
                        src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Chatgpt-in-Bangladesh-5.png"
                alt="ChatGPT Premium Models in Bangladesh"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] to-transparent opacity-80" />
                </div>

                <div className="p-8 md:p-12 -mt-20 relative z-10">
                    {/* <div className="flex flex-wrap gap-4 text-xs font-medium text-blue-400 mb-4">
                        <span className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">Events</span>
                        <span className="text-gray-500 flex items-center">• April 10, 2025</span>
                        <span className="text-gray-500 flex items-center">• By Admin</span>
                    </div> */}

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    How to Buy ChatGPT Premium Models in BD?
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <div className="space-y-6">
            <p className="text-gray-300">
              Buy ChatGPT-4, 4.1 nano & ChatGPT-5 in Bangladesh with OneBrain. Pay in BDT, start instantly, and use Bangla prompts—compare plans and buy today.
            </p>

            <p className="text-gray-300">
              Are you looking for the best ChatGPT model to boost productivity, create amazing content, or power your business in Bangladesh?
              You're in the right place. At OneBrain, we make it simple for anyone in Bangladesh to access the world's most advanced AI—ChatGPT and its many models—without complicated setups or international payments.
            </p>

            <h2 className=" text-xl lg:text-2xl  font-bold mt-8 mb-4">Why Choose OneBrain for ChatGPT in Bangladesh?</h2>
            <p className="text-gray-300">Your time is valuable, and the right platform matters. Here's why Bangladeshi users trust OneBrain:</p>
            
            <ul className="list-disc pl-6 space-y-4 text-gray-300">
              <li><strong>Premium Models at Your Fingertips</strong> – Get instant access to ChatGPT-4o, ChatGPT-4.1 nano, mini, and the latest ChatGPT-5 with updates as future models arrive.</li>
              <li><strong>Local Convenience</strong> – No VPNs or foreign cards. Use ChatGPT directly in Bangladesh.</li>
              <li><strong>Bangla-Friendly Features</strong> – From ChatGPT prompts in Bangla to a complete ChatGPT Bangla tutorial, OneBrain supports your language and workflow.</li>
              <li><strong>Affordable Plans</strong> – Compare ChatGPT pricing, including the newest ChatGPT 4 price, ChatGPT Plus price, ChatGPT yearly subscription, and ChatGPT Pro subscription—all shown in BDT.</li>
              <li><strong>Guided Upgrades</strong> – Looking to buy ChatGPT Plus in Bangladesh, manage your subscription, or grab the best ChatGPT deals? OneBrain makes the process simple and walks you through each step.</li>
            </ul>

            <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-4">What You Can Do with ChatGPT on OneBrain</h2>
            <p className="text-gray-300">OneBrain isn't just about access—it's about possibilities. Here are some of the most popular ways people in Bangladesh use ChatGPT every day:</p>

            <ul className="list-disc pl-6 space-y-4 text-gray-300">
              <li><strong>Create and Edit Content</strong> – Craft perfect Bangla blog posts, polish writing with a quick grammar check, or generate unique ChatGPT prompts for photo editing and other creative projects.</li>
              <li><strong>Teach and Learn</strong> – Teachers prepare lessons and assignments, while students use ChatGPT for research, study guides, grammar checks, and practice exercises to improve their learning.</li>
              <li><strong>Grow Your Business</strong> – Entrepreneurs write ads, plan marketing campaigns, and brainstorm new ideas.</li>
              <li><strong>Explore Advanced AI</strong> – Experiment with tools like the ChatGPT agent for automation, try fun prompts such as ChatGPT Ghibli AI, or test exciting new features like ChatGPT 4.1 nano, available free as they roll out.</li>
            </ul>

            <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-4">Creative ChatGPT Prompts You Should Try</h2>
            <p className="text-gray-300">Here are some trending ChatGPT prompts Bangladesh users love:</p>

            <ul className="list-disc pl-6 space-y-4 text-gray-300">
              <li><strong>ChatGPT Prompt for Photo Editing:</strong> "Suggest 10 unique Photoshop photo editing ideas for Instagram."</li>
              <li><strong>ChatGPT Grammar Check:</strong> "Check grammar and improve this paragraph for a Bangla blog."</li>
              <li><strong>ChatGPT Image Edit Prompt:</strong> "Create a Ghibli-style AI art description for a Dhaka street view."</li>
              <li><strong>ChatGPT Ghibli AI Prompt:</strong> "Generate a dreamy Studio Ghibli-inspired village scene description."</li>
            </ul>

            <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-4">How to Buy ChatGPT in Bangladesh (Step-by-Step)</h2>
            <p className="text-gray-300">Getting started with OneBrain is fast and easy:</p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>Sign up at OneBrain.</li>
              <li>Choose the plan you want.</li>
              <li>Pay securely in BDT using local payment methods (no VPN or foreign card).</li>
              <li>Get instant access to ChatGPT-4, ChatGPT-4.1, ChatGPT-5 and other models.</li>
            </ol>

            <p className="text-gray-300">No technical headaches, no confusing payment steps—just smarter AI whenever you need it.</p>

            <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-4">Experience Smarter AI Today</h2>
            <p className="text-gray-300">
              Your creativity, productivity, and business deserve the best. Get started with OneBrain to unlock easy and affordable ChatGPT buy BD deals, 
              experiment with a ChatGPT image edit prompt, or enjoy the powerful features of ChatGPT-4 and ChatGPT-5 and many more models —all tailored for Bangladesh.
            </p>
          </div>
                        
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
                            >
                                <Share2 size={18} />
                                <span>Share this Article</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
      </main>

      

      {/* Footer */}
      <Footer />
    </div>
  );
}


{/* <div className="container mx-auto px-6 pt-24 pb-16">
        <article className="prose prose-lg prose-invert mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            How to Buy ChatGPT Premium Models in BD?
          </h1>

          <div className="mb-12">
            <div className="details4-hero-wrapper" style={{ height: '450px' }}>
              <img
                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Chatgpt-in-Bangladesh-5.png"
                alt="ChatGPT Premium Models in Bangladesh"
                className="details4-hero-image w-full h-full rounded-2xl"
                style={{
                  height: '450px',
                  maxHeight: '450px',
                  width: '100%',
                  borderRadius: '1rem'
                }}
              />
            </div>
          </div>

          
        </article>
      </div> */}
