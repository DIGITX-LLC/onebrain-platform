"use client";
import React from 'react';
import Link from 'next/link';
import ButtonAnimatedGradient from './ButtonAnimatedGradient';


export default function BlogDetailsSeven() {
  return (
    <div className="min-h-screen bg-[#030205] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030205]/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
                alt="OneBrain Logo"
                className="h-8"
              />
            </Link>
            <Link href="/blog">
              <ButtonAnimatedGradient
                text="Back to Blog"
                gradientFrom="#0f1747"
                gradientTo="#0f1747"
                borderColor="#b2b8f6"
                className="w-[135px] h-[40px] rounded-full font-normal"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        <article className="prose prose-lg prose-invert mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Buy Sora 2 & Sora 2 Pro in Bangladesh — Only on OneBrain with 10+ Free AI Tools
          </h1>

          <div className="mb-12">
            <div className="details5-hero-wrapper" style={{ height: '200px' }}>
              <img
                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Chatgpt-in-Bangladesh-5.png"
                alt="ChatGPT Premium Models in Bangladesh"
                className="details5-hero-image w-full h-full rounded-2xl"
                style={{
                  height: '200px',
                  maxHeight: '200px',
                  width: '100%',
                  borderRadius: '1rem'
                }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">
            Buy Sora 2 & Sora 2 Pro in Bangladesh — Only on OneBrain with 10+ Free AI Tools.
            </p>

           <div>
            <h1 className='font-bold'>Meta Description:</h1>
             <p className="text-gray-300">
              Buy Sora 2 (699 Taka) and Sora 2 Pro (1,999 Taka) exclusively on OneBrain in Bangladesh! Get 10+ premium AI tools free for text, image, audio, and video generation.
            </p>
           </div>


            <p className="text-gray-300">The future of content creation, Sora 2 and <span>Sora 2 Pro are now available exclusively on OneBrain in Bangladesh.</span> These advanced AI models, powered by OpenAI, turn your text or images into professional videos in just a few clicks.</p>
            <p>In 2025, one thing is clear — <span>AI video generation</span> is the next big thing in content creation. From YouTube Shorts to TikTok and Instagram Reels, videos are now the language of the internet. But for most Bangladeshi creators, producing high-quality videos can be expensive, time-consuming, and technically challenging.</p>
            
            <p>
               That’s why the arrival of <span>Sora AI</span> — available exclusively on OneBrain — is a total game changer. This powerful AI video generator lets <span>you turn text prompts into professional-grade videos</span> in just minutes.
 
            </p>

            <p>Let’s explore why Sora is creating so much buzz — and how Bangladeshi creators can use it to create smarter, faster, and cheaper.</p>

            <div>
                <h1>What Is Sora AI?</h1>

                <p>Sora is an AI-powered text-to-video generator developed to make storytelling easier for everyone — from individual creators to marketing teams.
                You simply type a scene description or script, and Sora automatically generates a full video — complete with visuals, movements, and cinematic effects</p>

                <p><span>Sora</span> is an <span>AI-powered text-to-video generator</span> developed to make storytelling easier for everyone — from individual creators to marketing teams. <br />
                You simply type a scene description or script, and Sora automatically generates a full video — complete with visuals, movements, and cinematic effects</p>

                <p>Whether you’re creating educational content, social media clips, or promo videos, Sora gives you the tools to bring your ideas to life — no camera, no editing software, and no experience needed.</p>

                <p>On OneBrain, you can access Sora 2 and Sora 2 Pro, two of the most advanced versions available for Bangladeshi users.</p>

                
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
