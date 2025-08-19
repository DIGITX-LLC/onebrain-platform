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

export default function BlogDetails() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const handleResize = () => {
      setShowBurgerMenu(window.innerWidth < 768);
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

  // Share functionality
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'OneBrain Launches Llama 3.3: Comparing with Grok 3',
        text: 'Check out this comparison of Llama 3.3 and Grok 3 AI models by OneBrain!',
        url: typeof window !== 'undefined' ? window.location.href : '',
      });
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 border border-gray-700 rounded-full px-4 py-2 flex items-center justify-between w-[85%] max-w-3xl z-20 transition-all duration-300
          ${isSticky
            ? "fixed top-2 shadow-lg bg-white/10 backdrop-blur-[7px]"
            : "absolute bg-transparent"
          }`}
        style={{
          top: isSticky ? "10px" : "1.5rem",
          transition: "top 0.3s ease-in-out",
        }}
      >
 <Link href="/about">
          <img
            src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
            alt="OneBrain Logo"
            className="h-6"
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
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
              onClick={showBurgerMenu ? closeMenu : undefined}
            >
              AI Models
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
              onClick={showBurgerMenu ? closeMenu : undefined}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
              onClick={showBurgerMenu ? closeMenu : undefined}
            >
              Brain Upgrading Log
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
              onClick={showBurgerMenu ? closeMenu : undefined}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
              onClick={showBurgerMenu ? closeMenu : undefined}
            >
              Contact Us
            </Link>
          </li>
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
          className=" w-full h-[60vh] bg-cover bg-center "
          style={{
            backgroundImage: `url('https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png')`,
          }}
        ></div>

        {/* Content Overlay */}
        <div className="relative px-6 py-12">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-full mx-auto">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              OneBrain Launches Llama 3.3: Comparing with Grok 3
            </h1>
            <div className="flex space-x-4 text-gray-500 text-sm mb-6">
              <span>AUTHOR: admin</span>
              <span>PUBLISHED ON: April 10, 2025</span>
              <span>PUBLISHED IN: Events</span>
            </div>
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                OneBrain has just launched Llama 3.3, bringing faster performance and smarter reach. Llama 3.3 is a smart language model capable of assisting with tasks like chatting, coding, and creating synthetic data. Meanwhile, Grok 3 has made significant improvements in reasoning, math, coding, and world knowledge. Let’s compare these two models to determine which one is the best.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Llama 3.3 is a new language model. Although smaller than its predecessors, it still delivers strong performance, making it an excellent choice for a wide range of projects. It also supports multiple languages, such as English, Spanish, Hindi, and German, making it adaptable for global use. On the other hand, Grok 3 is a large language model offering features like advanced reasoning, knowledge retrieval, and text summarization.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Brief on Llama 3.3</h2>
              <p className="text-gray-700 leading-relaxed">
                This is an open-source model, which means it's free for anyone to use, modify, or improve. It's perfect for a wide range of tasks, like general text generation, chatbots, or content creation. Since it's open-source, you can also adjust it to your specific needs if you have the technical ability. Llama 3.3 is highly flexible and can be used for many different applications, but it may not be as specialized in handling complex problems or analyzing large amounts of real-time data. The latest update of Llama 3.3 was released on Dec 6, 2024.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Brief on Grok 3</h2>
              <p className="text-gray-700 leading-relaxed">
                Grok 3 is a sophisticated tool designed to handle challenging and intricate tasks, making it ideal for solving problems that demand a deep understanding or involve large datasets. In financial analysis, Grok 3 can quickly process numbers, spot patterns, and generate predictions, enabling businesses to make quick, informed choices. On the other hand, it doesn’t offer as much customization as some other tools, such as Llama 3.3, which may be important for tasks that require a high degree of personalization. Nevertheless, Grok 3 is exceptionally effective in situations that prioritize quick, reliable problem-solving.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                In short, Grok 3 is a powerful, fast, and dependable solution for tackling complex challenges that need rapid analysis and decision-making, though it may not be as customizable as some other options.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comparing Llama 3.3 and Grok 3</h2>
              <p className="text-gray-700 leading-relaxed">
                When comparing Llama 3.3 and Grok 3, both are powerful AI models with distinct strengths. The best choice depends on your specific needs and use case. Here's a quick breakdown:
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Llama 3.3 Capabilities</h3>
              <p className="text-gray-700 leading-relaxed">
                Llama 3.3 is designed to tackle a variety of tasks involving text generation, language translation, content summarization, multilingual research, and applications that require contextually accurate text in different languages. It can also support coding and software development. Here's a more detailed breakdown of the areas where Llama 3.3 can be applied:
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Content Creation & Communication</h4>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>Llama 3.3 can be utilized to create chatbots and virtual assistants that handle customer queries and offer assistance in several languages.</li>
                <li>It helps in generating articles, blog posts, marketing copy, and other written content.</li>
                <li>The model can summarize lengthy articles, reports, or research papers into clear and concise versions.</li>
                <li>Thanks to its multilingual capabilities, Llama 3.3 is ideal for translating text between languages.</li>
              </ul>
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Coding & Software Development</h4>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>Llama 3.3 can assist developers with tasks such as generating code, debugging issues, and comprehending complex codebases.</li>
                <li>The model can automate specific software development processes, enhancing overall productivity.</li>
              </ul>
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Research & Education</h4>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>Researchers can use Llama 3.3 to analyze large datasets and generate insights across various languages and fields.</li>
                <li>Educational platforms can integrate Llama 3.3 to create personalized learning experiences for students around the world.</li>
                <li>Llama 3.3 can generate synthetic data to train and test AI models.</li>
                <li>The model can be used to build applications that provide answers to questions and deliver valuable information.</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Grok 3 Capabilities</h3>
              <p className="text-gray-700 leading-relaxed">
                Grok 3, with its advanced reasoning and DeepSearch capabilities, is designed to tackle a wide range of challenges across various domains, including complex coding, scientific research, and real-time data analysis. It can also assist with tasks such as debugging code and analyzing market trends. Here’s a closer look at the types of problems Grok 3 can address:
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Technical and Research-Driven Tasks</h4>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>Grok 3 can efficiently generate sophisticated code and swiftly identify and fix errors, thanks to its enhanced speed and reasoning capabilities.</li>
                <li>With its DeepSearch technology, Grok 3 helps researchers process extensive datasets and formulate accurate hypotheses across fields like chemistry, physics, and biology.</li>
                <li>Grok 3 excels at tackling complex mathematical equations and deconstructing intricate problems.</li>
                <li>It can analyze market price fluctuations in real-time and predict trends, supporting financial analysts in refining their investment strategies.</li>
              </ul>
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