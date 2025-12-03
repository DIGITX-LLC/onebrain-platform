"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface ModernHeroOrbitProps {
  logos?: { src: string; alt: string }[];
}

const defaultLogos = [
  { src: "/assets/meta.svg", alt: 'Meta' },
  { src: "/assets/models/grok.svg", alt: 'Grok' },
  { src: "/assets/models/deepseek.svg", alt: 'Deepseek' },
  { src: "/assets/models/Anthropic Ai.svg", alt: 'Claude' },
  { src: "/assets/models/qwen.svg", alt: 'Qwen' },
  { src: "/assets/models/gemini.svg", alt: 'Gemini' },
  { src: "/assets/models/chatgpt.svg", alt: 'GPT' },
  { src: "/assets/models/perplexity.svg", alt: 'Perplexity' },
  { src: "/assets/models/mistral.svg", alt: 'Mistral' },
];

export default function ModernHeroOrbit({ logos = defaultLogos }: ModernHeroOrbitProps) {
  // Only use first 8 logos for the circle to keep it symmetric
  // const activeLogos = logos.slice(0, 8);
  const activeLogos = logos.slice(0, logos.length);
  
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
      {/* Outer Glow Ring - Subtle Pulse */}
      <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl animate-pulse-slow opacity-50" />

      {/* Rotating Ring Container */}
      <div className="relative w-full h-full animate-[spin_60s_linear_infinite]">
        {/* Orbit Path */}
        <div className="absolute inset-0 rounded-full border border-white/10 border-dashed opacity-30" />
        
        {/* Inner Solid Ring */}
        <div className="absolute inset-[15%] rounded-full border border-white/5" />

        {/* Logos */}
        {activeLogos.map((logo, i) => {
          // const angle = (i / 8) * 2 * Math.PI;
          const angle = (i / activeLogos.length) * 2 * Math.PI; // distribute 8 items
          const radius = 50; // 50% from center (edge of container)
          
          // Position calculation percentages
          const left = 50 + Math.cos(angle) * radius;
          const top = 50 + Math.sin(angle) * radius;

          return (
            <div
              key={i}
              className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 -ml-6 -mt-6 sm:-ml-8 sm:-mt-8 md:-ml-10 md:-mt-10"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            >
              {/* Counter-rotate container to keep icons upright */}
              <div className="w-full h-full animate-[spin_60s_linear_infinite_reverse] flex items-center justify-center">
                <div className="relative w-full h-full group">
                  {/* Icon Backdrop */}
                  <div className="absolute inset-0 bg-[#1A1B2E] rounded-2xl border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-white/10" />
                  
                  {/* Icon Image */}
                  <div className="absolute inset-2 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-md brightness-0 invert opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Element - OneBrain Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-[40%] h-[40%]">
          {/* Center Glow */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl" />
          
          {/* Glass Container */}
          <div className="relative w-full h-full rounded-full bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl shadow-black/50">
             <Image 
                className="w-[70%] h-[70%] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" 
                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/OpenAI_Playground_2025-05-06_at_12.09.18_1__1_-removebg-preview.png" 
                alt="OneBrain"
                width={200}
                height={200}
                priority
              />
          </div>
        </div>
      </div>
    </div>
  );
}

