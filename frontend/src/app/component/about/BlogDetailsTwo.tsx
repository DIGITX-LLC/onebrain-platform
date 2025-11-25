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

export default function BlogDetailsTwo() {
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
      if (!isMobile) setIsOpen(false); // Close menu on desktop
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
      title: 'ChatGPT vs. DeepSeek: Which AI Chatbot Is Right for You?',
      text: 'Compare ChatGPT and DeepSeek to find the best AI chatbot for your needs!',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert('Link copied to clipboard!');
      }).catch((err) => {
        console.error('Clipboard copy failed:', err);
      });
    }
  };

  // Navigation items with corrected routes
  const navItems = [
    { to: '/models', label: 'AI Models' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/updates', label: 'Brain Upgrading Log' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen font-sans">
      <title>ChatGPT vs. DeepSeek: Which AI Chatbot Is Right for You? | OneBrain</title>

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

      {/* Main Content Section */}
      <main className="relative pt-24">
        {/* Background Image with Blur */}
        <div
          className="w-full h-[60vh] bg-cover bg-center " // Changed h-64 to h-[50vh] for full height effect
          style={{
            backgroundImage: `url('https://digitxevents.com/wp-content/uploads/2025/04/blog_cover-2.png')`,
          }}
          loading="lazy"
        ></div>

        {/* Content Overlay */}
        <div className="relative px-6 py-12">
          <div className="bg-base shadow-lg rounded-lg p-8 w-full max-w-full mx-auto"> {/* Adjusted to full width */}
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              ChatGPT vs. DeepSeek: Which AI Chatbot Is Right for You?
            </h1>
            <section className="mb-8">
              <p className="text-gray-400 leading-relaxed">
                AI chatbots have become essential tools in personal and professional settings, transforming how we communicate, create, and solve problems. Two leading AI chatbots are ChatGPT, developed by OpenAI, and DeepSeek, developed by DeepSeek, a Chinese AI company. While both have strong features, they differ in pricing, functionality, and security. This comparison explores these differences to help you choose the right AI assistant.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Both ChatGPT and DeepSeek excel as user-friendly AI chatbots designed to assist with a wide variety of tasks, from drafting emails to solving technical problems. However, they have key differences that set them apart. ChatGPT is known for its robust features and polished user experience, while DeepSeek stands out for its free access and customizability.
              </p>
            </section>
            <section className="mb-8 text-gray-400">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">AI Models: Both Have Strong Offerings</h2>
              <p className="text-gray-400 leading-relaxed">
                Both platforms feature state-of-the-art AI models designed for various tasks. However, their usage and performance vary in some aspects.
              </p>
              <h3 className="text-xl font-semibold text-gray-400 mt-6 mb-4">ChatGPT Models</h3>
              <ul className="list-disc pl-6 text-gray-400 leading-relaxed">
                <li>
                  <strong className="text-gray-400">GPT-4o</strong>: ChatGPT’s model is well-suited backs like general language generation and reasoning tasks, making it a versatile tool for many types of work.
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-400 mt-6 mb-4">DeepSeek Models</h3>
              <ul className="list-disc pl-6 text-gray-400 leading-relaxed"> {/* Added pl-6 to fix padding */}
                <li>
                  <strong className="text-gray-400">DeepSeek R-2</strong>: Comparable to GPT models for text-based tasks.
                </li>
                <li>
                  <strong className="text-gray-400">DeepSeek Reasoning Models</strong>: Similar to OpenAI’s o1 for advanced reasoning tasks.
                </li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                DeepSeek’s models are comparable to ChatGPT’s in many ways. However, DeepSeek offers the added benefit of allowing users to download models and run them locally. This gives tech-savvy users more control, a feature not available with ChatGPT.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Despite some model differences, both platforms perform equally well for everyday tasks, with specialized research tasks being the only area where performance may significantly differ.
              </p>
            </section>
            <section className="mb-8 text-gray-400">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">ChatGPT: A More Polished Experience</h2>
              <p className="text-gray-400 leading-relaxed">
                One major advantage of ChatGPT is its level of refinement. It offers a wealth of features that make it an all-around, highly effective AI assistant:
              </p>
              <ul className="list-disc pl-6 text-gray-400 leading-relaxed mt-4">
                <li>ChatGPT can understand and process images, which is crucial for professionals working with visual data.</li>
                <li>ChatGPT enables voice-based interaction and real-time vision-based assistance using your camera.</li>
                <li>Users can personalize ChatGPT’s behavior and memory, tailoring its responses to individual needs across sessions.</li>
                <li>ChatGPT integrates with tools like Gmail, Slack, and Zapier, making it useful across multiple platforms for automating workflows.</li>
                <li>A collaborative workspace for writing and coding, ideal for team projects.</li>
                <li>ChatGPT allows users to create custom models for specific tasks.</li>
                <li>Available for both Windows and Mac, providing versatility across devicess.</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                In contrast, DeepSeek offers fewer advanced features. While its technology is impressive, the platform lacks image processing, voice features, and advanced collaborative tools. This makes DeepSeek feel more basic compared to the feature-rich ChatGPT.
              </p>
            </section>
            <section className="mb-8 text-gray-400">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">DeepSeek: More Accessible and Cost-Effective</h2>
              <p className="text-gray-400 leading-relaxed">
                One of DeepSeek’s standout features is its free access. While ChatGPT Plus costs $20/month for enhanced functionality, DeepSeek offers its full suite of models without any cost. This makes it an ideal choice for users on a budget. However, DeepSeek may have some limitations, such as daily message caps, and the free version doesn’t offer as many advanced features as ChatGPT.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Another key advantage of DeepSeek is that it allows users to run models locally, offering more control and customization, which is particularly appealing to developers or those with technical expertise. This is something ChatGPT does not provide.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                While DeepSeek offers impressive functionality, it has a few drawbacks:
              </p>
              <ul className="list-disc pl-6 text-gray-400 leading-relaxed mt-4">
                <li>DeepSeek’s servers may experience downtime, affecting the reliability of the service.</li>
                <li>Based in China, DeepSeek operates under different data privacy regulations, which may raise concerns for users handling sensitive data. In contrast, ChatGPT provides enterprise-level security, making it a more secure choice for such cases.</li>
              </ul>
            </section>
            <section className="mb-8 text-gray-400">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">Which Is Better: DeepSeek or ChatGPT?</h2>
              <p className="text-gray-400 leading-relaxed">
                The choice between DeepSeek and ChatGPT depends largely on your priorities:
              </p>
              <ul className="list-disc pl-6 text-gray-400 leading-relaxed mt-4">
                <li>
                  <strong className="text-gray-400">DeepSeek</strong>: Perfect for users who want free access to powerful AI models and local control over the technology. If you’re budget-conscious or need more flexibility in model usage, DeepSeek is an excellent option.
                </li>
                <li>
                  <strong className="text-gray-400">ChatGPT</strong>: Offers a more polished, feature-rich, and secure experience. With advanced features like image support, voice interactions, and integrations with other tools, it is a more comprehensive solution for individuals or teams who need a reliable AI assistant.
                </li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong className="text-gray-400">Conclusion</strong>: DeepSeek excels in terms of affordability and local access, making it an attractive choice for casual users or those with technical expertise. However, if you’re looking for a more professional, feature-complete, and secure AI assistant, ChatGPT is the better option.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-600 focus:outline-none"
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