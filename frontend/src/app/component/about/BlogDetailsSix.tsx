
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
                 src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Nano%20Banana%20in%20Bangladesh%20(4).jpg"
                alt="Nano Banana AI Bangladesh"
                  className="details5-hero-image w-full h-full rounded-2xl"
                 style={{
                   height: "450px",
                   maxHeight: "450px",
                    width: "100%",
                   borderRadius: "1rem",
                      }}
                      /> */}
                    
                    <Image 
                        src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Nano%20Banana%20in%20Bangladesh%20(4).jpg"
                        alt="Nano Banana AI Bangladesh"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] to-transparent opacity-80" />
                  
                </div>

                <div className="p-8 md:p-12 -mt-20 relative z-10">
                  
                <div className="space-y-6 text-gray-300">
                <h1 className="text-3xl md:text-5xl mt-10 font-bold text-white mb-8 leading-tight">
                    What is Nano Banana AI?
                    </h1>

<p className="text-gray-300">
  The future of smart content creation is here — and it’s powered by Nano Banana AI.
  Whether you’re a student, marketer, designer, or content creator, Nano Banana helps you write, design, and create visually stunning content with the help of advanced artificial intelligence.
</p>

<p className="text-gray-300">
  And when you buy Nano Banana AI via OneBrain in Bangladesh, you unlock the Creator Pack for just ৳699, which includes Nano Banana AI, 15,00,000 Pro Tokens, and full access to dozens of premium AI tools for text, image, video, and audio — all bundled together for free.
</p>

<p className="text-gray-300">
  This makes it the most powerful and cost-effective AI solution in Bangladesh, allowing creators to produce complete multimedia content from one platform.
</p>


<h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4"><span className='bg-yellow-500 text-black'>🚀What is Nano Banana AI?</span></h2>

<p className="text-gray-300">
  <strong>Nano Banana AI</strong> is an advanced generative AI tool that allows you to create engaging content, visuals, and ideas instantly. <br />
  It’s built for creators who need fast, accurate, and creative results without spending hours editing or designing.

</p>

 <h3 className="text-xl text-gray-300 font-semibold">🔑 Key Features:</h3>
<ul className="list-disc pl-6 space-y-2">
  <li> <strong className='text-gray-300'>AI Writing Assistant:</strong>Generate blog posts, captions, ad copy, and ideas within seconds</li>
  <li> <strong className='text-gray-300'>Image Enhancement:</strong>  Restore, edit, or generate high-quality images from text.</li>
  <li> <strong className='text-gray-300'>Creative Prompt :</strong> Get unique and ready-to-use prompts for social media or branding.</li>
  <li> <strong className='text-gray-300'>Bangla & English :</strong>Works fluently in both Bangla and English.</li>
  <li> <strong className='text-gray-300'>Integration with Other AI Tools:</strong> Combine Nano Banana outputs with video, audio, and chat models.
  </li>
</ul>

<p className="text-gray-300">
  From bloggers to agencies, everyone can use Nano Banana to create professional-quality digital content with minimal effort.
</p>


<h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4">💡 Why Choose Nano Banana from OneBrain?</h2>

<p>
  Subscribing to <strong>Nano Banana AI via OneBrain</strong> gives you much more than just one AI tool — you get a complete creative studio.
</p>

<h1 className='font-bold text-gray-300 text-xl'>🔹 Key Benefits:</h1>
<ul className="list-disc pl-6 space-y-2">
  <li> <strong className='text-gray-300'>Affordable pricing:</strong>The Creator Pack is only ৳699, offering full Nano Banana access and more.
 </li>
  <li> <strong className='text-gray-300'>All-in-one AI access:</strong>  Includes text, image, video, and audio tools — all in one subscription.
   </li>
  <li> <strong className='text-gray-300'>15,00,000 Pro Tokens:</strong>  Freedom to explore and experiment without usage limits.</li>
  <li> <strong className='text-gray-300'>Bangladesh-Friendly Payments:</strong>  Pay using <strong>bKash, Nagad, or international cards.</strong></li>
  <li> <strong>Instant access:</strong> Start creating right after payment — no complicated setup needed.
  </li>
</ul>
<p>This makes <strong>OneBrain</strong> the most affordable and complete AI content platform in Bangladesh.</p>


 <h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4">🎨 What You Can Do with Nano Banana via OneBrain</h2>
  <p>With your Creator Pack (৳699), you can:</p>
<ul className="list-disc pl-6 space-y-2">
  <li>✍️ <strong className='text-gray-300'>Generate Blogs & Captions:</strong> Instantly produce professional writing for websites or marketing.</li>
  <li>🧠  <strong className='text-gray-300'>Create AI Prompts:</strong> Get optimized prompts for design, coding, or creative writing.</li>
  <li>🖼️ <strong className='text-gray-300'>Enhance or Restore Images: </strong>Fix blurry, damaged, or low-resolution photos automatically.</li>
  <li>🎬 <strong className='text-gray-300'>Combine Multimedia Content:</strong> Integrate visuals with voice, video, and music using other included AI tools.</li>
  <li>🚀 <strong className='text-gray-300'>Experiment Freely: </strong>Use 15,00,000 Pro Tokens to test and explore every model inside OneBrain.
 </li>
</ul>
<p>Every Nano Banana user automatically gains access to dozens of free AI tools that make complete content creation easier than ever</p>


<h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4">🧠 AI Tools Included in the Creator Pack</h2>
 <p>Buying Nano Banana AI via OneBrain gives you access to a full range of AI models across multiple categories — <strong>text, image, video, and audio.</strong></p>
<h3 className="text-xl text-gray-300 font-semibold">📝 Text & Chat Models</h3>
<p>,<strong>ChatGPT, Claude, Gemini, Qwen, DeepSeek, Perplexity AI</strong> — write blogs, code faster, summarize text, generate essays, or optimize SEO content.
</p>
<ul className="list-disc pl-6 space-y-2">
  <li>AI research & comparison between models (e.g., ChatGPT vs DeepSeek).</li>
<li>Smart prompts for writing, editing, and translation.</li>
<li>AI chatbot builder for Bangla & English support.</li>
</ul>

<h3 className="text-xl text-gray-300 font-semibold mt-6">🖼️ Image Tools</h3>
<p><strong className='text-gray-300'>Nano Banana & Kontext Restore:</strong> Enhance, repair, and generate new visuals instantly.
<strong className='text-gray-300'>Grok AI & Gemini Banana AI:</strong> Create marketing visuals, thumbnails, or social media designs.
<strong className='text-gray-300'>Editing Tools:</strong> Auto-color correction, restoration, and creative enhancement for digital use. <br /> <br />
Perfect for vlog editing workflows, brand visuals, and personal content creation</p>

<h3 className="text-xl text-gray-300 font-semibold mt-6">🎬 Video Tools</h3>
<p><strong className='text-gray-300'>Runway ML, Hailuo AI, VEO3, Sedance, Wan AI:</strong> Convert text to video or animation without expensive software.</p>
<ul className="list-disc pl-6 space-y-2">
  <li>Add motion effects and transitions.</li>
  <li>Create YouTube videos, explainers, or reels effortlessly.</li>
  <li>Produce watermark-free professional videos.</li>
</ul>
 
<h3 className="text-xl text-gray-300 font-semibold mt-6">🎧 Audio & Music Tools</h3>
<p><strong className='text-gray-300'>ElevenLabs AI:</strong> Clone voices or generate studio-quality text-to-speech. <br />
<strong className='text-gray-300'>Audio AI:</strong> Create AI-generated background music, songs, or jingles. <br />
<strong className='text-gray-300'>Audio Enhancers:</strong> Improve sound clarity for podcasts and presentations. <br />
 Integrate your Nano Banana text and visuals with AI voice and music tools for complete multimedia projects. <br />
  </p>

<h2 className="text-xl lg:text-2xl  text-gray-300 font-bold mt-8 mb-4">🔄 Unlimited Chat & Attachments</h2>
<p>Even after using your Pro Tokens, <strong>OneBrain</strong> continues to offer <strong>unlimited chat access</strong> with AI models and file attachments — ensuring you can keep creating without restrictions.</p>
 
<h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4">🏆 Extended Benefits of the Creator Pack</h2>
<ul className="list-disc pl-6 space-y-2">
<li>💼 Complete multimedia AI suite under one subscription</li>
<li>💸 Affordable price — only ৳699 for all premium tools</li>
<li>⚡ Fast and scalable content production</li>
<li>🎓 Ideal for students, freelancers, and businesses</li>
<li>🌐 All-in-one creative convenience via OneBrain</li>
</ul>

<h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4">💳 How to Buy Nano Banana AI in Bangladesh</h2>
<p className='text-bold'>Step-by-Step Guide:</p>
<ol className="list-decimal pl-6 space-y-2">
<li><strong className='text-gray-300'>Visit:</strong><Link href="https://onebrain.app" className="text-blue-400 underline">OneBrain.app</Link></li>
<li><strong className='text-gray-300'>Sign Up:</strong>Create your OneBrain account using email or phone.</li>
<li><strong className='text-gray-300'>Select:</strong>The <strong>Creator Pack (৳699)</strong> — includes Nano Banana + 15,00,000 Pro Tokens</li>
<li><strong className='text-gray-300'>Pay Securely:</strong>via <strong>bKash, Nagad, or international</strong> cards.</li>
<li><strong className='text-gray-300'>Start Creating:</strong> Get instant access to <strong>Nano Banana AI</strong> and all other included tools.
</li>
</ol>

<h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4">🧾 Nano Banana Price in Bangladesh</h2>

<table className="table-auto w-full text-gray-300 border border-gray-700">
  <thead>
    <tr className="bg-gray-800">
      <th className="p-3 border border-gray-700">Plan</th>
      <th className="p-3 border border-gray-700">Duration</th>
      <th className="p-3 border border-gray-700">Features</th>
      <th className="p-3 border border-gray-700">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-3 border border-gray-700">Free Plan</td>
      <td className="p-3 border border-gray-700">Lifetime</td>
      <td className="p-3 border border-gray-700">Basic Access</td>
      <td className="p-3 border border-gray-700">৳0</td>
    </tr>
    <tr>
      <td className="p-3 border border-gray-700">Creator(Premium) Pack</td>
      <td className="p-3 border border-gray-700">Monthly</td>
      <td className="p-3 border border-gray-700">All tools + 15,00,000 tokens</td>
      <td className="p-3 border border-gray-700">৳699</td>
    </tr>
    <tr>
      <td className="p-3 border border-gray-700">Pro Plan</td>
      <td className="p-3 border border-gray-700">Yearly</td>
      <td className="p-3 border border-gray-700">Exclusive updates</td>
      <td className="p-3 border border-gray-700">৳3000–৳3500</td>
    </tr>
  </tbody>
</table>

 


<h2 className="text-xl lg:text-2xl text-gray-300 font-bold mt-8 mb-4">✅ Final Thought</h2>

<p className='text-gray-300'>
  For creators, marketers, and students in Bangladesh, <strong>Nano Banana AI via OneBrain</strong> is the <strong>smartest and most affordable AI choice.</strong>
</p>

<p className='text-gray-300'>
  You get <strong>Nano Banana AI , 15,00,000 Pro Tokens</strong>, and <strong>10+ premium AI tools</strong> for text, image, video & audio — all in one plan.
</p>

<p className="font-semibold text-gray-300">
  Start today at 👉{" "}
  <Link href="https://onebrain.app" className="text-blue-400 underline">
    onebrain.app
  </Link>{" "}
 <br /> and unlock your all-in-one AI creative studio with <strong>Nano Banana AI —</strong>
 <strong> Your ideas, your visuals, your creativity — powered by AI.</strong>

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
            </article>
        </div>
        
      </main>

      

      {/* Footer */}
      <Footer />
    </div>
  );
}







