"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Share2, ArrowLeft } from 'lucide-react';
import Footer from '../Footer';

export default function BlogDetails() {
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
                        { name: "Mobile App", href: "/#mobileAppSection" },
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
                        { name: "Mobile App", href: "/#mobileAppSection" },
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
                        src="https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png"
                        alt="Llama 3.3 vs Grok 3"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] to-transparent opacity-80" />
                </div>

                <div className="p-8 md:p-12 -mt-20 relative z-10">
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-blue-400 mb-4">
                        <span className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">Events</span>
                        <span className="text-gray-500 flex items-center">• April 10, 2025</span>
                        <span className="text-gray-500 flex items-center">• By Admin</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        OneBrain Launches Llama 3.3: Comparing with Grok 3
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <section className="mb-8">
                            <p>
                                OneBrain has just launched Llama 3.3, bringing faster performance and smarter reach. Llama 3.3 is a smart language model capable of assisting with tasks like chatting, coding, and creating synthetic data. Meanwhile, Grok 3 has made significant improvements in reasoning, math, coding, and world knowledge. Let’s compare these two models to determine which one is the best.
                            </p>
                            <p className="mt-4">
                                Llama 3.3 is a new language model. Although smaller than its predecessors, it still delivers strong performance, making it an excellent choice for a wide range of projects. It also supports multiple languages, such as English, Spanish, Hindi, and German, making it adaptable for global use. On the other hand, Grok 3 is a large language model offering features like advanced reasoning, knowledge retrieval, and text summarization.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Brief on Llama 3.3</h2>
                            <p>
                                This is an open-source model, which means it's free for anyone to use, modify, or improve. It's perfect for a wide range of tasks, like general text generation, chatbots, or content creation. Since it's open-source, you can also adjust it to your specific needs if you have the technical ability. Llama 3.3 is highly flexible and can be used for many different applications, but it may not be as specialized in handling complex problems or analyzing large amounts of real-time data. The latest update of Llama 3.3 was released on Dec 6, 2024.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Brief on Grok 3</h2>
                            <p>
                                Grok 3 is a sophisticated tool designed to handle challenging and intricate tasks, making it ideal for solving problems that demand a deep understanding or involve large datasets. In financial analysis, Grok 3 can quickly process numbers, spot patterns, and generate predictions, enabling businesses to make quick, informed choices. On the other hand, it doesn’t offer as much customization as some other tools, such as Llama 3.3, which may be important for tasks that require a high degree of personalization. Nevertheless, Grok 3 is exceptionally effective in situations that prioritize quick, reliable problem-solving.
                            </p>
                            <p className="mt-4">
                                In short, Grok 3 is a powerful, fast, and dependable solution for tackling complex challenges that need rapid analysis and decision-making, though it may not be as customizable as some other options.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Comparing Llama 3.3 and Grok 3</h2>
                            <p>
                                When comparing Llama 3.3 and Grok 3, both are powerful AI models with distinct strengths. The best choice depends on your specific needs and use case. Here's a quick breakdown:
                            </p>
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">Llama 3.3 Capabilities</h3>
                            <p>
                                Llama 3.3 is designed to tackle a variety of tasks involving text generation, language translation, content summarization, multilingual research, and applications that require contextually accurate text in different languages. It can also support coding and software development. Here's a more detailed breakdown of the areas where Llama 3.3 can be applied:
                            </p>
                            <h4 className="text-lg font-bold text-white mt-4 mb-2">Content Creation & Communication</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Llama 3.3 can be utilized to create chatbots and virtual assistants that handle customer queries and offer assistance in several languages.</li>
                                <li>It helps in generating articles, blog posts, marketing copy, and other written content.</li>
                                <li>The model can summarize lengthy articles, reports, or research papers into clear and concise versions.</li>
                                <li>Thanks to its multilingual capabilities, Llama 3.3 is ideal for translating text between languages.</li>
                            </ul>
                            <h4 className="text-lg font-bold text-white mt-4 mb-2">Coding & Software Development</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Llama 3.3 can assist developers with tasks such as generating code, debugging issues, and comprehending complex codebases.</li>
                                <li>The model can automate specific software development processes, enhancing overall productivity.</li>
                            </ul>
                            <h4 className="text-lg font-bold text-white mt-4 mb-2">Research & Education</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Researchers can use Llama 3.3 to analyze large datasets and generate insights across various languages and fields.</li>
                                <li>Educational platforms can integrate Llama 3.3 to create personalized learning experiences for students around the world.</li>
                                <li>Llama 3.3 can generate synthetic data to train and test AI models.</li>
                                <li>The model can be used to build applications that provide answers to questions and deliver valuable information.</li>
                            </ul>
                            <h3 className="text-xl font-bold text-white mt-6 mb-2">Grok 3 Capabilities</h3>
                            <p>
                                Grok 3, with its advanced reasoning and DeepSearch capabilities, is designed to tackle a wide range of challenges across various domains, including complex coding, scientific research, and real-time data analysis. It can also assist with tasks such as debugging code and analyzing market trends. Here’s a closer look at the types of problems Grok 3 can address:
                            </p>
                            <h4 className="text-lg font-bold text-white mt-4 mb-2">Technical and Research-Driven Tasks</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Grok 3 can efficiently generate sophisticated code and swiftly identify and fix errors, thanks to its enhanced speed and reasoning capabilities.</li>
                                <li>With its DeepSearch technology, Grok 3 helps researchers process extensive datasets and formulate accurate hypotheses across fields like chemistry, physics, and biology.</li>
                                <li>Grok 3 excels at tackling complex mathematical equations and deconstructing intricate problems.</li>
                                <li>It can analyze market price fluctuations in real-time and predict trends, supporting financial analysts in refining their investment strategies.</li>
                            </ul>
                        </section>
                        
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
