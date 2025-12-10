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

export default function BlogDetailsOne() {
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
                        src="https://digitxevents.com/wp-content/uploads/2025/04/2-4.png"
                        alt="Comparing Llama 3.3, GPT-4o, and Grok 3: AI Models Head-to-Head"
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
                    Comparing Llama 3.3, GPT-4o, and Grok 3: AI Models Head-to-Head
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <section className="mb-8">
              <p className="text-gray-300 leading-relaxed">
                The AI landscape is evolving rapidly, with models like Meta’s Llama 3.3, OpenAI’s GPT-4o, and xAI’s Grok 3 pushing boundaries in performance, efficiency, and versatility. Llama 3.3 offers open-source flexibility, GPT-4o excels in multimodal capabilities, and Grok 3 prioritizes advanced reasoning. This blog compares these three models, exploring their strengths, benchmarks, and ideal use cases to help you choose the best fit for your needs.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">Llama 3.3 Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Meta’s Llama 3.3 is a powerful open-source multilingual large language model featuring 70 billion parameters. Pre-trained and instruction-tuned, it’s engineered for high efficiency and scalability. Utilizing state-of-the-art methods, the model is capable of tackling a wide variety of tasks and has been trained on a massive dataset of over 15 trillion tokens.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                As an auto-regressive model built on an enhanced transformer architecture, Llama 3.3 delivers impressive results across multiple benchmarks. It achieves this while maintaining low training costs through smart resource management. The model supports extended context windows and is equipped with sophisticated reasoning abilities, enabling it to handle complex and detailed tasks. While primarily designed for processing text inputs, it can also manage structured data, making it highly adaptable for different use cases.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">GPT-4o Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Introduced in May 2024, GPT-4o represents OpenAI’s most advanced flagship multimodal model to date, engineered to be the fastest and most cost-efficient high-performance solution currently available. GPT-4o demonstrates exceptional capabilities in processing and generating content across multiple modalities, including text, audio, and imagery. This multimodal proficiency enables the model to interpret and respond to both linguistic and visual inputs, facilitating more natural and intuitive user interactions. For example, it can accurately translate a menu from an image, provide historical context for the cuisine, and offer personalized recommendations.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                With substantial improvements in computational efficiency, GPT-4o delivers significantly faster response times while operating at a lower cost. Within the API, it is twice as fast and priced at half the cost of GPT-4-turbo, making it highly suitable for deployment at scale. Moreover, GPT-4o features an enhanced neural architecture that allows it to follow complex instructions more effectively and sustain coherent context over extended dialogues. This advancement reduces the likelihood of misinterpretation and enhances the relevance of its responses.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">Grok 3 Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Grok 3, developed by xAI, is a sophisticated large language model optimized for advanced reasoning, math, coding, and real-time data analysis. With capabilities like DeepSearch, it excels at processing large datasets, debugging code, and generating insights across domains like finance and science. While less customizable than open-source models like Llama 3.3, Grok 3 prioritizes speed and reliability for complex problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Grok 3’s strength lies in its ability to handle intricate tasks requiring deep understanding, making it ideal for applications where quick, accurate decisions are critical. Its architecture supports extended context and coherent responses, positioning it as a strong contender in the AI landscape.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">Benchmark Comparison</h2>
              <p className="text-gray-300 leading-relaxed">
                To understand how Llama 3.3, GPT-4o, and Grok 3 stack up, we’ve compiled benchmark data for key metrics. Note that Grok 3 data is limited here, as some benchmarks are proprietary or unavailable.
              </p>
              <table className="w-full text-left border-collapse mt-4 text-gray-300 ">
                <thead>
                  <tr className="bg-black-100">
                    <th className="border p-2">Benchmark</th>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">GPT-4o</th>
                    <th className="border p-2">Llama 3.3</th>
                    <th className="border p-2">Grok 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">MMLU</td>
                    <td className="border p-2">
                      Massive Multitask Language Understanding: Tests knowledge across 57 subjects including math, history, law, and more
                    </td>
                    <td className="border p-2">88.7%</td>
                    <td className="border p-2">88.5%</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border p-2">MMLU-Pro</td>
                    <td className="border p-2">
                      A more robust MMLU benchmark with complex reasoning-focused questions
                    </td>
                    <td className="border p-2">74.68%</td>
                    <td className="border p-2">75.9%</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border p-2">MMMU</td>
                    <td className="border p-2">
                      Massive Multitask Multimodal Understanding: Tests across text, audio, images, and videos
                    </td>
                    <td className="border p-2">69.1%</td>
                    <td className="border p-2">N/A</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border p-2">HellaSwag</td>
                    <td className="border p-2">A challenging sentence completion benchmark</td>
                    <td className="border p-2">N/A</td>
                    <td className="border p-2">N/A</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border p-2">HumanEval</td>
                    <td className="border p-2">Evaluates code generation and problem-solving capabilities</td>
                    <td className="border p-2">90.2%</td>
                    <td className="border p-2">88.4%</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border p-2">MATH</td>
                    <td className="border p-2">
                      Tests mathematical problem-solving abilities across various difficulty levels
                    </td>
                    <td className="border p-2">75.9%</td>
                    <td className="border p-2">77%</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border p-2">GPQA</td>
                    <td className="border p-2">
                      Tests PhD-level knowledge in physics, chemistry, and biology requiring domain expertise
                    </td>
                    <td className="border p-2">53.6%</td>
                    <td className="border p-2">50.5%</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border p-2">IFEval</td>
                    <td className="border p-2">
                      Tests model’s ability to follow explicit formatting instructions and maintain consistency
                    </td>
                    <td className="border p-2">N/A</td>
                    <td className="border p-2">92.1%</td>
                    <td className="border p-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="mb-8 text-gray-300 ">
              <h2 className="text-2xl font-semibold text-gray-300 mb-4">Comparison Insights</h2>
              <p className="text-gray-300 leading-relaxed">
                Each model shines in distinct areas, making the best choice dependent on your specific use case:
              </p>
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed mt-4">
                <li>
                  <strong className='text-gray-300 '>GPT-4o</strong>: Excels in benchmarks like HumanEval (90.2%) and MMLU
                  (88.7%), showcasing strong reasoning and code generation. Its multimodal capabilities
                  make it ideal for applications involving text, images, and audio, such as translating
                  visual content or building interactive assistants. However, it underperforms in
                  specialized domains like MATH (75.9%) and GPQA (53.6%), where other models edge out.
                </li>
                <li>
                  <strong className='text-gray-300 '>Llama 3.3</strong>: Performs exceptionally well on MATH (77%) and IFEval
                  (92.1%), highlighting its problem-solving and instruction-following strengths. Its
                  open-source nature and 70B parameter efficiency make it perfect for customizable,
                  cost-effective solutions. However, it trails slightly in HumanEval (88.4%) and GPQA
                  (50.5%) compared to GPT-4o.
                </li>
                <li>
                  <strong className='text-gray-300 '>Grok 3</strong>: While benchmark data is limited here, Grok 3’s focus on
                  reasoning and real-time analysis makes it a strong contender for complex tasks like
                  financial modeling or scientific research. Unlike Llama 3.3, it’s not open-source,
                  but its DeepSearch and context retention rival GPT-4o’s coherence in extended
                  dialogues.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong className='text-gray-300 '>Conclusion</strong>: Choose GPT-4o for multimodal and scalable applications,
                Llama 3.3 for flexible, open-source projects, or Grok 3 for reasoning-intensive tasks
                requiring speed and depth. Evaluate your priorities—cost, customization, or
                specialization—to pick the right model.
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










