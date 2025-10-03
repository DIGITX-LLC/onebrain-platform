"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Share2 } from 'lucide-react';

// Placeholder for ButtonAnimatedGradient
const ButtonAnimatedGradient = ({ text, gradientFrom, gradientTo, borderColor, className }) => (
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

// Simple debounce function for scroll performance
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function BlogDetailsFour() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = debounce(() => {
      setIsSticky(window.scrollY > 50);
    }, 100);

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setShowBurgerMenu(isMobile);
      if (!isMobile) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Share functionality with fallback
  const handleShare = async () => {
    const shareData = {
      title: 'How to Buy ChatGPT Premium Models in BD?',
      text: 'Get easy access to ChatGPT-4, ChatGPT-5 and more with local pricing and payment options in Bangladesh!',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert('Link copied to clipboard!');
      }).catch((err) => {
        console.error('Clipboard copy failed:', err);
      });
    }
  };

  const navItems = [
    { to: '/models', label: 'AI Models' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/updates', label: 'Brain Upgrading Log' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen font-sans">
      <title>How to Buy ChatGPT Premium Models in BD? | OneBrain</title>

      {/* Navbar */}
      <nav
        className={`fixed left-1/2 transform -translate-x-1/2 border border-gray-700 rounded-full px-4 py-2 flex items-center justify-between w-[85%] max-w-3xl z-20 transition-all duration-300
          ${isSticky
            ? 'top-2 shadow-lg bg-white/10 backdrop-blur-[7px]'
            : 'top-6 bg-transparent'
          }`}
      >
        <Link href="/about">
          <img
            src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
            alt="OneBrain Logo"
            className="h-6"
            onError={(e) => (e.target.src = '/fallback-logo.png')}
          />
        </Link>
        <div className="flex items-center">
          {showBurgerMenu && (
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        <ul
          className={`flex text-sm transition-all duration-300 ${showBurgerMenu
              ? `absolute top-full right-0 w-60 flex-col items-start py-4 border border-gray-300 shadow-lg text-white font-bold rounded-lg ${isOpen ? 'flex bg-white/10 backdrop-blur-[7px]' : 'hidden'
              }`
              : 'flex gap-2 text-gray-300 items-center'
            }`}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                href={item.to}
                className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
                onClick={showBurgerMenu ? closeMenu : undefined}
                aria-current={typeof window !== 'undefined' && window.location.pathname === item.to ? 'page' : undefined}
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
        <div className="relative w-full h-[60vh]">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://digitxevents.com/wp-content/uploads/2025/09/Chatgpt-in-Bangladesh-5.png')`,
    }}
  />

  {/* Blur overlay */}
  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

  {/* Optional foreground content */}
  
</div>


        <div className="relative px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-full mx-auto">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              How to Buy ChatGPT Premium Models in BD?
            </h1>

            <section className="mb-8">
  <p className="text-gray-700 leading-relaxed">
    Are you looking for the best ChatGPT model to boost productivity, create amazing content, or power your business in Bangladesh?
    You’re in the right place. At{' '}
    <a
      href="https://www.onebrain.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline font-semibold"
    >
      OneBrain
    </a>
    , we make it simple for anyone in Bangladesh to access the world’s most advanced AI—ChatGPT and its many models—without complicated setups or international payments.
  </p>
</section>


            <section className="mb-8 text-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Why Choose OneBrain for ChatGPT in Bangladesh?</h2>
              <p className="text-gray-700 leading-relaxed">
                Your time is valuable, and the right platform matters. Here’s why Bangladeshi users trust OneBrain:
              </p>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-4">
                <li><strong>Premium Models at Your Fingertips</strong> – Get instant access to ChatGPT-4o, ChatGPT-4.1 nano, mini, and the latest ChatGPT-5 with updates as future models arrive.</li>
                <li><strong>Local Convenience</strong> – No VPNs or foreign cards. Use ChatGPT directly in Bangladesh.</li>
                <li><strong>Bangla-Friendly Features</strong> – From ChatGPT prompts in Bangla to a complete ChatGPT Bangla tutorial, OneBrain supports your language and workflow.</li>
                <li><strong>Affordable Plans</strong> – Compare ChatGPT pricing, including the newest ChatGPT 4 price, ChatGPT Plus price, ChatGPT yearly subscription, and ChatGPT Pro subscription—all shown in BDT.</li>
                <li><strong>Guided Upgrades</strong> – Looking to buy ChatGPT Plus in Bangladesh, manage your subscription, or grab the best ChatGPT deals? OneBrain makes the process simple and walks you through each step.</li>
              </ul>
            </section>

            <section className="mb-8 text-gray-800">
              <h2 className="text-2xl font-semibold mb-4">What You Can Do with ChatGPT on OneBrain</h2>
              <p className="text-gray-700 leading-relaxed">
                OneBrain isn’t just about access—it’s about possibilities. Here are some of the most popular ways people in Bangladesh use ChatGPT every day:
              </p>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-4">
                <li>Create and Edit Content – Craft perfect Bangla blog posts, polish writing with a quick grammar check, or generate unique ChatGPT prompts for photo editing and other creative projects.</li>
                <li>Teach and Learn – Teachers prepare lessons and assignments, while students use ChatGPT for research, study guides, grammar checks, and practice exercises to improve their learning.</li>
                <li>Grow Your Business – Entrepreneurs write ads, plan marketing campaigns, and brainstorm new ideas.</li>
                <li>Explore Advanced AI – Experiment with tools like the ChatGPT agent for automation, try fun prompts such as ChatGPT Ghibli AI, or test exciting new features like ChatGPT 4.1 nano, available free as they roll out.</li>
              </ul>
            </section>

            <section className="mb-8 text-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Creative ChatGPT Prompts You Should Try</h2>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-4">
                <li>ChatGPT Prompt for Photo Editing: “Suggest 10 unique Photoshop photo editing ideas for Instagram.”</li>
                <li>ChatGPT Grammar Check: “Check grammar and improve this paragraph for a Bangla blog.”</li>
                <li>ChatGPT Image Edit Prompt: “Create a Ghibli-style AI art description for a Dhaka street view.”</li>
                <li>ChatGPT Ghibli AI Prompt: “Generate a dreamy Studio Ghibli-inspired village scene description.”</li>
              </ul>
            </section>

            <section className="mb-8 text-gray-800">
              <h2 className="text-2xl font-semibold mb-4">How to Buy ChatGPT in Bangladesh (Step-by-Step)</h2>
              <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mt-4">
  <li>
    Sign up at{' '}
    <a
      href="https://ai.onebrain.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      OneBrain
    </a>.
    </li>
    <li>Choose the plan you want.</li>
    <li>Pay securely in BDT using local payment methods (no VPN or foreign card).</li>
    <li>Get instant access to ChatGPT-4, ChatGPT-4.1, ChatGPT-5 and other models.</li>
    </ol>

              <p className="text-gray-700 leading-relaxed mt-4">
                No technical headaches, no confusing payment steps—just smarter AI whenever you need it.
              </p>
            </section>

            <section className="mb-8 text-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Experience Smarter AI Today</h2>
              <p className="text-gray-700 leading-relaxed">
                Your creativity, productivity, and business deserve the best. Get started with OneBrain to unlock easy and affordable ChatGPT buy BD deals, experiment with a ChatGPT image edit prompt, or enjoy the powerful features of ChatGPT-4 and ChatGPT-5 and many more models —all tailored for Bangladesh.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-800 hover:text-blue-600 focus:outline-none"
                  aria-label="Share this article"
                >
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
