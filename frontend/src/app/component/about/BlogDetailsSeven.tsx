"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Share2, ArrowLeft } from 'lucide-react';
import Footer from '../Footer';

export default function BlogDetailsSeven() {
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
                {/* <img
              src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Elevenlab%20in%20Bangladesh%20(2).jpg"
              alt="ElevenLabs Bangladesh"
              className="w-full rounded-2xl"
              style={{ maxHeight: "450px", objectFit: "cover" }}

            /> */}
             <Image 
                        src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Elevenlab%20in%20Bangladesh%20(2).jpg"
                       alt="ElevenLabs Bangladesh"
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
                    ElevenLabs AI: Text-to-Speech, Voice Clone & Pricing in BD
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="text-gray-300">
            <strong>Meta:</strong> Buy ElevenLabs AI in Bangladesh – clone voices,
            convert text-to-speech, and access 10+ free AI tools for video, music, and
            image creation via OneBrain.
          </p>

          <div className="space-y-6 mt-10">

            <p className="text-gray-300">
              The future of content creation is here, and it sounds human. ElevenLabs AI
              is the ultimate tool for creators, educators, marketers, and businesses who
              want high-quality, human-like voiceovers, voice cloning, and studio-level
              text-to-speech — all in one platform.
            </p>

            <p className="text-gray-300">
              The game-changer? When you buy ElevenLabs AI via{" "}
              <Link href="https://onebrain.app" className="text-blue-400 underline">
                OneBrain
              </Link>{" "}
              in Bangladesh, you unlock the Creator Pack for just ৳699, which includes
              ElevenLabs AI, <strong>15,00,000 Pro Tokens</strong>, and full access to
              dozens of premium AI tools for text, image, video, and audio — all included
              for free.
            </p>

            <p className="text-gray-300">
              This makes it the most powerful and cost-effective AI solution in
              Bangladesh, allowing creators to produce complete multimedia content from one
              platform.
            </p>

            <h2 className="text-xl lg:text-2xl text-gray-300 font-bold">What is ElevenLabs AI?</h2>

            <p className="text-gray-300">
              ElevenLabs AI is a cutting-edge voice generation platform designed for
              creators who need professional-quality audio quickly and efficiently.
            </p>
             <p>Key features include:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Text-to-Speech Conversion: Turn any text into natural, expressive, human-like speech instantly.</li>
              <li>Voice Cloning: Clone existing voices or create custom AI voices.</li>
              <li>Multi-Language Support: Bangla, Hindi, Urdu, English.</li>
              <li>Popular Voices & Customization: Adam and more.</li>
              <li>Accent Flexibility: British, American, and others.</li>
            </ul>
            <p>Whether you’re a YouTuber, podcaster, teacher, or freelancer, ElevenLabs lets you produce studio-quality audio without expensive recording equipment.</p>

            <h2 className="text-xl lg:text-2xl text-gray-300 font-bold">Why Choose ElevenLabs from OneBrain?</h2>
              <p>Subscribing to ElevenLabs via OneBrain is the smartest choice in Bangladesh:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Affordable Pricing:The Creator Pack is only ৳699, giving you full access to ElevenLabs’ world-class features.</li>
              <li>Full AI Suite for Free:Beyond ElevenLabs, you get access to dozens of premium AI tools, including text, image, video, and audio models.</li>
              <li>15,00,000 Pro Tokens: Experiment freely with a massive number of AI tasks without worrying about limitations.
               </li>
              <li>All-in-One Platform: No need for multiple subscriptions — OneBrain consolidates voice, text, image, video, and music AI tools in one plan.
                </li>
            </ul>
            <p>This makes OneBrain the ultimate platform for AI content creators in Bangladesh, combining cost-effectiveness, convenience, and professional tools.
           </p>

            
            <h2 className="text-xl lg:text-2xl text-gray-300 font-bold">What You Can Do with ElevenLabs via OneBrain</h2>
              <p>With the Creator Pack at just ৳699, you can:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Clone Voices or Create Custom AI Voices: Produce content in Bangla, Hindi, Urdu, or British accent with natural, human-like tones.
              </li>
              <li>

                 Convert Text into Speech: Transform articles, scripts, blogs, and presentations into expressive voiceovers.
             </li>
              <li>Generate Voiceovers for Multimedia: Use in videos, reels, podcasts, e-learning content, or presentations.</li>
              <li>Experiment Freely with Pro Tokens: Utilize 15,00,000 Pro Tokens across ElevenLabs and other AI tools to unlock your creative potential.
              </li>
              <li>Combine Multimedia Assets: Integrate voice with video, images, and music to produce complete professional projects.</li>
              <li>Access All-In-One AI Tools for Free: While your focus may be ElevenLabs, you automatically get dozens of AI tools for text, image, video, and music included at no extra cost.


             </li>
            </ul>

          
            <h2 className="text-xl lg:text-2xl text-gray-300 font-bold">All-Inclusive AI Suite Included in the Creator Pack</h2>
            <p>Beyond ElevenLabs, the Creator Pack gives you access to a full range of AI tools across categories. Here’s what you can do with them:</p>
            <h3 className="text-xl font-semibold text-gray-300">Text & Chat AI Tools</h3>
            
             <ul className="list-disc pl-6 space-y-2">
                <li>ChatGPT, Claude, Gemini, Qwen, Grok, DeepSeek, Perplexity — writing, coding,
              essays, research.</li>
              <li>Virtual Agent AI & Chatbots: Build AI chatbots in Bangla or English for websites, support systems, or customer service.</li>
              <li>Prompt-Based Tools: Use ready-made prompts for photo editing, coding, creative writing, or content enhancement.</li>
              <li>AI Research & Comparison: Compare AI models to select the best AI for specific needs, like ChatGPT vs DeepSeek vs Perplexity.</li>
              </ul>
            

            <h3 className="text-xl font-semibold text-gray-300">Image AI Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nano Banana & Kontext Restore: Repair blurry or damaged images, enhance photos, and restore old images.</li>
              <li>Grok AI & Gemini Banana AI: Generate creative visuals, social media graphics, and marketing images from text prompts.</li>
              <li>Photo Editing Prompts: Improve images with AI suggestions for color correction, style transfer, and design enhancement.
              </li>
              <li>Workflow Support: Perfect for vlog editing workflows, thumbnails, and creative media projects.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-300">Video AI Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Runway ML, Hailuo AI, VEO3, Sedance, Wan AI: Convert text to video, create animations, and produce professional-quality video content.
              </li>
              <li>AI Video Editing: Add effects, transitions, and motion graphics quickly.</li>
              <li>Text-to-Video AI: Create explainer videos, tutorials, or social media content without expensive equipment.
              </li>
              <li>Watermark-Free Output: Some tools allow video creation without watermark, ideal for creators starting out.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-300">Audio & Music AI Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>ElevenLabs AI: Generate human-like voiceovers, clone voices, or create custom AI voices.
              </li>
              <li>Udio AI: Turn text into music tracks, jingles, or background scores.
              </li>
              <li>Humanizer & Audio Enhancers: Make AI-generated speech sound more natural for podcasts, reels, and presentations.
              </li>
              <li>Multimedia Integration: Combine audio, video, and images to produce complete multimedia projects.
              </li>
            </ul>
            <p>All of these AI tools are included for free with the Creator Pack, giving you a complete AI creative studio under one subscription.</p>

           
            <h2 className="text-xl lg:text-2xl text-gray-300 font-bold">Unlimited Chat & Attachments</h2>
            <p className="text-gray-300">
              Even after using your Pro Tokens, OneBrain provides unlimited chat and file attachments with advanced AI models, allowing you to continue creating without limits.
            </p>

         
            <h2 className="text-xl lg:text-2xl text-gray-300 font-bold">Extended Benefits of the Creator Pack</h2>

            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Complete Multimedia AI Suite: Tools for text, audio, image, video, and music creation.</li>
              <li>Affordable Access: All premium AI tools bundled in one plan for just ৳699.</li>
              <li>Time-Saving: Produce professional content quickly and efficiently.</li>
              <li>Scalable Projects: Work on multiple tasks and media types simultaneously</li>
              <li>All-in-One Convenience: No need for multiple subscriptions — everything in one place.</li>
            </ul>

            
            <h2 className="text-xl  lg:text-2xl text-gray-300 font-bold">How to Buy ElevenLabs and Price in Bangladesh</h2>

            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>Visit OneBrain: Go to <Link href="https://onebrain.app" className="text-blue-400 underline">onebrain.app</Link></li>
              <li>Sign Up: Register using email and phone number.</li>
              <li>Select the Creator Pack: Priced at ৳699, includes ElevenLabs AI, 15,00,000 Pro Tokens, and the full AI suite.)</li>
              <li>Pay Securely: Local and international payment options available</li>
              <li>Start Creating: Instant access to ElevenLabs AI and all included AI tools for voice, video, image, and music content.</li>
            </ol>

            
            <h2 className="text-xl lg:text-2xl text-gray-300 font-bold">Final Thought</h2>

            <p className="text-gray-300">
             For professional-quality AI voiceovers and complete multimedia content in Bangladesh, buying ElevenLabs via OneBrain is the smartest choice.

            </p>

            <p className="text-gray-300">
              For just ৳699, you get:
            </p>
             <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>ElevenLabs AI for voice cloning and text-to-speech
               </li>
              <li>15,00,000 Pro Tokens for extensive AI usage
              </li>
              <li>Full access to text, image, video, and audio AI tools for free</li>
            </ul>

             <p>OneBrain bundles everything in one subscription, allowing creators to experiment, innovate, and scale content effortlessly.
            </p>     
            <p className="font-semibold text-gray-300">
              Start creating today at{" "}
              <Link href="https://onebrain.app" className="text-blue-400 underline">
                onebrain.app
              </Link> <br />
                and unlock ElevenLabs + 15,00,000 Pro Tokens + Max AI Unlimited with dozens of premium AI tools free. Your content, your voice, your creativity — all powered by AI.

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




// <div className="container mx-auto px-6  text-gray-300 pt-24 pb-16">
//         <article className="prose prose-lg prose-invert mx-auto">

        
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-300 text-center">
//             ElevenLabs AI: Text-to-Speech, Voice Clone & Pricing in BD
//           </h1>

          
//           <div className="mb-10">
//             <img
//               src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Elevenlab%20in%20Bangladesh%20(2).jpg"
//               alt="ElevenLabs Bangladesh"
//               className="w-full rounded-2xl"
//               style={{ maxHeight: "450px", objectFit: "cover" }}
//             />
//           </div>

          
          
//         </article>
//       </div>
