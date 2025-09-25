"use client";
import { useState } from 'react';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import Link from "next/link";
import Image from "next/image";
import ButtonAnimatedGradient from './ButtonAnimatedGradient';
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
      question: "What is included in the BDT 299/ month plan?",
      answer: `
      For just BDT 299/ month, you get:
        <ul class="list-disc space-y-2 pl-5">
          <li>Unlimited text-only chats with OneBrain PRO (ChatGPT, Gemini, LLama, DeepSeek, Mistral)</li>
          <li>Unlimited DeepSearch (smarter search within conversations)</li>
          <li>Unlimited Attachment Uploads (PDFs, DOCX, TXT for AI assistance)</li>
          <li>Unlimited Thinking (advanced AI reasoning for deeper responses)</li>
        </ul>
      `
    },
    {
      question: "Do I get access to PRO models under the BDT 299 plan?",
      answer: `
        Yes! You also receive 600,000 PRO tokens every month, allowing you to use the latest PRO models, including features for image, video, and audio generation and analysis.
      `
    },
    { question: "What happens when I finish my 600,000 PRO tokens?", answer: `
      After using all your PRO tokens: </br>
        You still enjoy unlimited text chatting, DeepSearch, Attachment uploads, and Thinking features using our standard AI models, including ChatGPT, Gemini, LLama, DeepSeek, and Mistral.
To continue PRO model access, you can top up tokens or wait until your monthly reset.
      `},
    { question: "What is the difference between regular chat and PRO chat?", answer:  ` <ul class="list-disc space-y-2 pl-5">
      <li>Regular chat = Fast and smart standard models.</li>
      <li>PRO chat = Top-tier premium AI models offering richer, deeper, and even more accurate responses</li>
    </ul> 
    `},
    { question: "How do I know how many PRO tokens I have left?", answer: "Your remaining PRO tokens are clearly shown on your OneBrain Account Billing page, beside to your current package." },
    { question: "Will unused PRO tokens carry over to the next month?", answer: "No, PRO tokens reset monthly. Use them before your billing cycle renews!" },
    { question: "Can I upgrade to more PRO tokens if I need?", answer: "Definitely! You can buy extra PRO tokens by top-up anytime from your billing page." },
    { question: "Does unlimited chat include voice or image chat?", answer:  `<ul class="list-disc space-y-2 pl-5">
      <li class="pl-1">Yes, BDT 299 covers Image Generation but limited by pro tokens.</li>
      <li class="pl-1">Voice chat, image generation, or vision-based AI may require a separate upgrade or future plan.</li>
    </ul>
  ` },
  ];

  return (
    <section id="faqSection" className="py-16 px-6 container mx-auto text-white">
      <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
        
        {/* Left Side (FAQ Introduction) */}
        <div className="flex flex-col w-full items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-2 max-w-md">
            Should you have any further questions or encounter any difficulties, please feel free to join our community forum or reach out to us directly via email.
          </p>
          <div className="mt-6 lg:flex flex-col md:flex-row w-full gap-4 ">
            <a
              href="https://facebook.com/groups/2238159246577852/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full "
            >
              <DynamicButton
                label="Community Support"
                size="w-full h-[45px] mb-3 lg:mb-0 rounded-full font-normal p-0 text-sm flex items-center justify-center"
                icon={<Image src="/assets/Facebook.svg" alt="facebook" width={16} height={16} className="mr-2 w-4 h-4" />}
              />
            </a>

            <a
              href="mailto:info@onebrain.app"
              className="w-full"
            >
              <DynamicButton
                label="Email Support"
                size="w-full h-[45px] rounded-full font-normal p-0 text-sm flex items-center justify-center"
                icon={<Mail className="mr-2 w-4 h-4" />}
              />
            </a>
          </div>
        </div>

        {/* Right Side (FAQ Section) */}
        <div className="space-y-2 md:col-span-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-[#4a5aaa]  bg-gradient-to-l  from-black to-[#0E1747]  animate-border"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-white bg-transparent hover:bg-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center">
                  {openIndex === index ? <IoIosArrowDown className="mr-2" /> : <IoIosArrowForward className="mr-2" />}
                  {faq.question}
                </span>
              </button>

              {openIndex === index && (
                <div className="p-4 bg-gray-900 text-gray-300">
                  {/* If answer contains HTML list, render safely */}
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* OneBrain Promo Section */}
      <div  className="md:py-16 py-8 flex justify-center px-4 sm:px-6 lg:px-12 xl:px-0">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-full bg-gradient-to-b  from-black to-[#0E1747] border border-[#656FE2] shadow-[0_0_20px_rgba(157,167,216,0.5)] p-6 sm:p-10 rounded-2xl text-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(138,232,255,0.3)]">

          {/* Logo */}
          <Image
            src="/assets/oneBrainLogo.svg"
            alt="OneBrain Logo"
            width={224}
            height={80}
            className="mx-auto w-32 sm:w-40 md:w-56 transition-transform duration-300 hover:scale-110"
          />

          {/* Headline */}
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mt-6">
            Give yourself a smarter brain
          </h3>

          {/* Subtitle */}
          <p className="text-gray-400 mt-3 text-base sm:text-lg md:text-xl">
            Activate brain clusters, ignite thinking sparks. Your intelligent assistant, always here.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
  <Link href="https://ai.onebrain.app/login">
      <DynamicButton
      label="Free Trial"
      size="w-full h-[45px] rounded-full px-8 font-medium p-0 text-sm flex items-center justify-center"
    />
  </Link>

  <Link href="https://ai.onebrain.app/login">
  <DynamicButton
      label=""
      size="w-full h-[45px] rounded-full font-medium px-8  p-0 text-sm flex items-center justify-center"
              icon={
          <div className="flex items-center">
            <Image 
              src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/images-removebg-preview.png" 
              alt="Star Icon" 
              width={32} 
              height={32} 
              className="w-6 h-6 sm:w-4 sm:h-4 mr-2 object-contain" 
            />
            <div className="flex items-center gap-0">
              <span className="text-sm">Try</span>
              <Image 
                src="/assets/pro.svg" 
                alt="Try Pro" 
                width={32} 
                height={32} 
                className="w-8 h-8" 
              />
            </div>
          </div>
        }
    />

  </Link>
</div>

        </div>
      </div>

    </section>
  );
}
