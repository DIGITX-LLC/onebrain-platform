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

export default function BlogDetailsOne() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

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

  // Share functionality
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Comparing Llama 3.3, GPT-4o, and Grok 3',
        text: 'Check out this detailed comparison of Llama 3.3, GPT-4o, and Grok 3 AI models!',
        url: typeof window !== 'undefined' ? window.location.href : '',
      });
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  // Navigation items
  const navItems = [
    { to: '/about', label: 'AI Models' },
    { to: '/about', label: 'Pricing' },
    { to: '/about', label: 'Brain Upgrading Log' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen font-sans">
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
          className={`flex text-sm transition-all duration-300 ${
            showBurgerMenu
              ? `absolute top-full right-0 w-60 flex-col items-start py-4 border border-gray-300 shadow-lg text-white font-bold rounded-lg ${
                  isOpen ? 'flex bg-white/10 backdrop-blur-[7px]' : 'hidden'
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
          className="w-full h-[60vh] bg-cover bg-center "
          style={{
            backgroundImage: `url('https://digitxevents.com/wp-content/uploads/2025/04/2-4.png')`,
          }}
        ></div>

        {/* Content Overlay */}
        <div className="relative px-6 py-12">
          <div className="bg-base shadow-lg rounded-lg p-8 w-full max-w-full mx-auto">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Comparing Llama 3.3, GPT-4o, and Grok 3: AI Models Head-to-Head
            </h1>
            <section className="mb-8">
              <p className="text-gray-400 leading-relaxed">
                The AI landscape is evolving rapidly, with models like Meta’s Llama 3.3, OpenAI’s GPT-4o, and xAI’s Grok 3 pushing boundaries in performance, efficiency, and versatility. Llama 3.3 offers open-source flexibility, GPT-4o excels in multimodal capabilities, and Grok 3 prioritizes advanced reasoning. This blog compares these three models, exploring their strengths, benchmarks, and ideal use cases to help you choose the best fit for your needs.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">Llama 3.3 Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Meta’s Llama 3.3 is a powerful open-source multilingual large language model featuring 70 billion parameters. Pre-trained and instruction-tuned, it’s engineered for high efficiency and scalability. Utilizing state-of-the-art methods, the model is capable of tackling a wide variety of tasks and has been trained on a massive dataset of over 15 trillion tokens.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                As an auto-regressive model built on an enhanced transformer architecture, Llama 3.3 delivers impressive results across multiple benchmarks. It achieves this while maintaining low training costs through smart resource management. The model supports extended context windows and is equipped with sophisticated reasoning abilities, enabling it to handle complex and detailed tasks. While primarily designed for processing text inputs, it can also manage structured data, making it highly adaptable for different use cases.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">GPT-4o Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Introduced in May 2024, GPT-4o represents OpenAI’s most advanced flagship multimodal model to date, engineered to be the fastest and most cost-efficient high-performance solution currently available. GPT-4o demonstrates exceptional capabilities in processing and generating content across multiple modalities, including text, audio, and imagery. This multimodal proficiency enables the model to interpret and respond to both linguistic and visual inputs, facilitating more natural and intuitive user interactions. For example, it can accurately translate a menu from an image, provide historical context for the cuisine, and offer personalized recommendations.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                With substantial improvements in computational efficiency, GPT-4o delivers significantly faster response times while operating at a lower cost. Within the API, it is twice as fast and priced at half the cost of GPT-4-turbo, making it highly suitable for deployment at scale. Moreover, GPT-4o features an enhanced neural architecture that allows it to follow complex instructions more effectively and sustain coherent context over extended dialogues. This advancement reduces the likelihood of misinterpretation and enhances the relevance of its responses.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">Grok 3 Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                Grok 3, developed by xAI, is a sophisticated large language model optimized for advanced reasoning, math, coding, and real-time data analysis. With capabilities like DeepSearch, it excels at processing large datasets, debugging code, and generating insights across domains like finance and science. While less customizable than open-source models like Llama 3.3, Grok 3 prioritizes speed and reliability for complex problem-solving.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Grok 3’s strength lies in its ability to handle intricate tasks requiring deep understanding, making it ideal for applications where quick, accurate decisions are critical. Its architecture supports extended context and coherent responses, positioning it as a strong contender in the AI landscape.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">Benchmark Comparison</h2>
              <p className="text-gray-400 leading-relaxed">
                To understand how Llama 3.3, GPT-4o, and Grok 3 stack up, we’ve compiled benchmark data for key metrics. Note that Grok 3 data is limited here, as some benchmarks are proprietary or unavailable.
              </p>
              <table className="w-full text-left border-collapse mt-4 text-gray-400 ">
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
            <section className="mb-8 text-gray-400 ">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">Comparison Insights</h2>
              <p className="text-gray-400 leading-relaxed">
                Each model shines in distinct areas, making the best choice dependent on your specific use case:
              </p>
              <ul className="list-disc pl-6 text-gray-400 leading-relaxed mt-4">
                <li>
                  <strong className='text-gray-400 '>GPT-4o</strong>: Excels in benchmarks like HumanEval (90.2%) and MMLU
                  (88.7%), showcasing strong reasoning and code generation. Its multimodal capabilities
                  make it ideal for applications involving text, images, and audio, such as translating
                  visual content or building interactive assistants. However, it underperforms in
                  specialized domains like MATH (75.9%) and GPQA (53.6%), where other models edge out.
                </li>
                <li>
                  <strong className='text-gray-400 '>Llama 3.3</strong>: Performs exceptionally well on MATH (77%) and IFEval
                  (92.1%), highlighting its problem-solving and instruction-following strengths. Its
                  open-source nature and 70B parameter efficiency make it perfect for customizable,
                  cost-effective solutions. However, it trails slightly in HumanEval (88.4%) and GPQA
                  (50.5%) compared to GPT-4o.
                </li>
                <li>
                  <strong className='text-gray-400 '>Grok 3</strong>: While benchmark data is limited here, Grok 3’s focus on
                  reasoning and real-time analysis makes it a strong contender for complex tasks like
                  financial modeling or scientific research. Unlike Llama 3.3, it’s not open-source,
                  but its DeepSearch and context retention rival GPT-4o’s coherence in extended
                  dialogues.
                </li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong className='text-gray-400 '>Conclusion</strong>: Choose GPT-4o for multimodal and scalable applications,
                Llama 3.3 for flexible, open-source projects, or Grok 3 for reasoning-intensive tasks
                requiring speed and depth. Evaluate your priorities—cost, customization, or
                specialization—to pick the right model.
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