"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Share2, ArrowLeft } from 'lucide-react';
import Footer from '../Footer';

// Placeholder for ButtonAnimatedGradient
// const ButtonAnimatedGradient = ({ text, gradientFrom, gradientTo, borderColor, className }) => (
//   <button
//     className={className}
//     style={{
//       background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
//       border: `1px solid ${borderColor}`,
//     }}
//   >
//     {text}
//   </button>
// );

// Simple debounce function for scroll performance
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), wait);
//   };
// };

export default function BlogDetailsTwo() {
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
                    {/* <Image 
                        src="https://digitxevents.com/wp-content/uploads/2025/04/blog_cover-2.png"
                        alt="ChatGPT vs. DeepSeek: Which AI Chatbot Is Right for You?"
                        fill
                        className="object-cover"
                    /> */}

                    <Image 
                        src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/Blog%20Poster%20(1).png"
                        alt="ChatGPT vs. DeepSeek: Which AI Chatbot Is Right for You?"
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

                    <h1 className="text-3xl md:text-5xl mt-10 font-bold text-white mb-8 leading-tight">
                    ChatGPT vs. DeepSeek: Which AI Chatbot Is Right for You?
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <section className="mb-8">
              <p className="text-gray-300 leading-relaxed">
                AI chatbots have become essential tools in personal and professional settings, transforming how we communicate, create, and solve problems. Two leading AI chatbots are ChatGPT, developed by OpenAI, and DeepSeek, developed by DeepSeek, a Chinese AI company. While both have strong features, they differ in pricing, functionality, and security. This comparison explores these differences to help you choose the right AI assistant.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Both ChatGPT and DeepSeek excel as user-friendly AI chatbots designed to assist with a wide variety of tasks, from drafting emails to solving technical problems. However, they have key differences that set them apart. ChatGPT is known for its robust features and polished user experience, while DeepSeek stands out for its free access and customizability.
              </p>
            </section>
            <section className="mb-8 text-gray-300">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">AI Models: Both Have Strong Offerings</h2>
              <p className="text-gray-300 leading-relaxed">
                Both platforms feature state-of-the-art AI models designed for various tasks. However, their usage and performance vary in some aspects.
              </p>
              <h3 className="text-xl font-semibold text-gray-300 mt-6 mb-4">ChatGPT Models</h3>
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed">
                <li>
                  <strong className="text-gray-300">GPT-4o</strong>: ChatGPT’s model is well-suited backs like general language generation and reasoning tasks, making it a versatile tool for many types of work.
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-300 mt-6 mb-4">DeepSeek Models</h3>
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed"> {/* Added pl-6 to fix padding */}
                <li>
                  <strong className="text-gray-300">DeepSeek R-2</strong>: Comparable to GPT models for text-based tasks.
                </li>
                <li>
                  <strong className="text-gray-300">DeepSeek Reasoning Models</strong>: Similar to OpenAI’s o1 for advanced reasoning tasks.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                DeepSeek’s models are comparable to ChatGPT’s in many ways. However, DeepSeek offers the added benefit of allowing users to download models and run them locally. This gives tech-savvy users more control, a feature not available with ChatGPT.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Despite some model differences, both platforms perform equally well for everyday tasks, with specialized research tasks being the only area where performance may significantly differ.
              </p>
            </section>
            <section className="mb-8 text-gray-300">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">ChatGPT: A More Polished Experience</h2>
              <p className="text-gray-300 leading-relaxed">
                One major advantage of ChatGPT is its level of refinement. It offers a wealth of features that make it an all-around, highly effective AI assistant:
              </p>
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed mt-4">
                <li>ChatGPT can understand and process images, which is crucial for professionals working with visual data.</li>
                <li>ChatGPT enables voice-based interaction and real-time vision-based assistance using your camera.</li>
                <li>Users can personalize ChatGPT’s behavior and memory, tailoring its responses to individual needs across sessions.</li>
                <li>ChatGPT integrates with tools like Gmail, Slack, and Zapier, making it useful across multiple platforms for automating workflows.</li>
                <li>A collaborative workspace for writing and coding, ideal for team projects.</li>
                <li>ChatGPT allows users to create custom models for specific tasks.</li>
                <li>Available for both Windows and Mac, providing versatility across devicess.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                In contrast, DeepSeek offers fewer advanced features. While its technology is impressive, the platform lacks image processing, voice features, and advanced collaborative tools. This makes DeepSeek feel more basic compared to the feature-rich ChatGPT.
              </p>
            </section>
            <section className="mb-8 text-gray-300">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">DeepSeek: More Accessible and Cost-Effective</h2>
              <p className="text-gray-300 leading-relaxed">
                One of DeepSeek’s standout features is its free access. While ChatGPT Plus costs $20/month for enhanced functionality, DeepSeek offers its full suite of models without any cost. This makes it an ideal choice for users on a budget. However, DeepSeek may have some limitations, such as daily message caps, and the free version doesn’t offer as many advanced features as ChatGPT.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Another key advantage of DeepSeek is that it allows users to run models locally, offering more control and customization, which is particularly appealing to developers or those with technical expertise. This is something ChatGPT does not provide.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                While DeepSeek offers impressive functionality, it has a few drawbacks:
              </p>
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed mt-4">
                <li>DeepSeek’s servers may experience downtime, affecting the reliability of the service.</li>
                <li>Based in China, DeepSeek operates under different data privacy regulations, which may raise concerns for users handling sensitive data. In contrast, ChatGPT provides enterprise-level security, making it a more secure choice for such cases.</li>
              </ul>
            </section>
            <section className="mb-8 text-gray-300">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">Which Is Better: DeepSeek or ChatGPT?</h2>
              <p className="text-gray-300 leading-relaxed">
                The choice between DeepSeek and ChatGPT depends largely on your priorities:
              </p>
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed mt-4">
                <li>
                  <strong className="text-gray-300">DeepSeek</strong>: Perfect for users who want free access to powerful AI models and local control over the technology. If you’re budget-conscious or need more flexibility in model usage, DeepSeek is an excellent option.
                </li>
                <li>
                  <strong className="text-gray-300">ChatGPT</strong>: Offers a more polished, feature-rich, and secure experience. With advanced features like image support, voice interactions, and integrations with other tools, it is a more comprehensive solution for individuals or teams who need a reliable AI assistant.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong className="text-gray-300">Conclusion</strong>: DeepSeek excels in terms of affordability and local access, making it an attractive choice for casual users or those with technical expertise. However, if you’re looking for a more professional, feature-complete, and secure AI assistant, ChatGPT is the better option.
              </p>
              
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




