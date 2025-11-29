"use client";
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import Link from "next/link";
import Image from "next/image";
import DynamicButton from './DynamicButton';
import { Mail } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why Choose OneBrain's Token System?",
      answer: `
        <ul class="list-disc space-y-2 pl-5">
          <li>No artificial limits: Tokens work as universal credits, letting you spend on exactly what you need</li>
          <li>Easy to understand: Clear token costs per image/video help you plan your usage smartly</li>
          <li>Mix and match: Spend tokens on a blend of chat, images, and videos every month without worrying about overages or caps</li>
          <li>Transparent pricing: What you pay directly correlates to how much content you can create</li>
        </ul>
      `
    },
    { question: "Can OneBrain Allows Free Use?", answer: "Yes, OneBrain Allows user to use free by signing up." },
    {
      question: "What is included in the BDT 699/month plan?",
      answer: `
        The 699tk plan unlocks all premium features:
        <ul class="list-disc space-y-2 pl-5">
          <li>Unlimited chat with every model (ChatGPT 5, Grok 4, Claude Opus, etc.)</li>
          <li>Advanced image generators</li>
          <li>Video AI tools</li>
          <li>Audio AI</li>
          <li>The Humanizer</li>
        </ul>
      `
    },
    {
      question: "How is the 699tk plan different from the 299tk plan?",
      answer: `
        <ul class="list-disc space-y-2 pl-5">
          <li>299tk plan → Limited to chat models only, no video/audio AI, no Humanizer, fewer image tools</li>
          <li>699tk plan → Includes everything in the 299tk plan plus advanced image, video, audio, and humanizer tools with no lock or extra token cost</li>
        </ul>
      `
    },
    { 
      question: "Do I get ChatGPT 5 and Grok 4 in the 299tk plan?",
      answer: "No. These advanced models are exclusive to the 699tk plan."
    },
    { 
      question: "Does the 699tk plan include video generation?",
      answer: `Yes ✅. The 699tk plan includes KlingAI, RumwayML, Hailuo AI, and Wan 2.2 for video generation. The 299tk plan does not support video at all.`
    },
    { 
      question: "Does the 699tk plan include audio generation?",
      answer: `Yes ✅. You get Elevenlabs for realistic voices and Udio AI for music/voice creation. The 299tk plan has no audio support.`
    },
    {
      question: "What image tools do I get in 699tk vs 299tk?",
      answer: `
        <ul class="list-disc space-y-2 pl-5">
          <li>299tk → GPT's Image, Flux</li>
          <li>699tk → GPT's Image, Flux, Google Nano Banana, Kontext Pro, Kontext Upscaler (better quality + HD upscaling)</li>
        </ul>
      `
    },
    { 
      question: "What is the Humanizer and is it included in the 299tk plan?",
      answer: "The Humanizer makes AI output more natural and human-like. It is only available in the 699tk plan."
    },
    { 
      question: "Who should choose the 699tk plan?",
      answer: "If you are a content creator, professional, or business needing advanced chat models, video, image, and audio tools without restrictions, the 699tk plan is the best choice. The 299tk plan is better suited for basic chat-only use."
    }
  ];

  return (
    <section id="faqSection" className="py-4 px-6 container mx-auto text-white">
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* Left Side (FAQ Introduction) */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Frequently Asked <br/> <span className="text-gray-400">Questions</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-light leading-relaxed">
            Find answers to common questions about OneBrain's features, pricing, and capabilities.
          </p>
          <div className="mt-4 flex flex-col w-full gap-4">
            <a
              href="https://facebook.com/groups/2238159246577852/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group"
            >
              <div className="flex items-center justify-between w-full bg-[#1A1B2E] border border-white/10 rounded-xl px-5 py-4 hover:bg-[#232438] hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10">
                        <Image src="/assets/Facebook.svg" alt="facebook" width={20} height={20} className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                      </div>
                      <span className="font-medium text-gray-200 group-hover:text-white">Community Support</span>
                  </div>
                  <IoIosArrowForward className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="mailto:info@onebrain.app"
              className="w-full group"
            >
              <div className="flex items-center justify-between w-full bg-[#1A1B2E] border border-white/10 rounded-xl px-5 py-4 hover:bg-[#232438] hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10">
                        <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                      </div>
                      <span className="font-medium text-gray-200 group-hover:text-white">Email Support</span>
                  </div>
                  <IoIosArrowForward className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Side (FAQ Section) */}
        <div className="lg:col-span-8 flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-white/5 bg-[#0F0F13] hover:border-white/10 transition-colors duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-white bg-transparent hover:bg-white/5 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center gap-4 text-base md:text-lg font-medium text-gray-200">
                  {openIndex === index ? (
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <IoIosArrowDown className="w-4 h-4" />
                      </div>
                  ) : (
                      <div className="w-6 h-6 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                          <IoIosArrowForward className="w-4 h-4 text-gray-500" />
                      </div>
                  )}
                  {faq.question}
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5 mx-5 mt-2">
                  {/* If answer contains HTML list, render safely */}
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  );
}
