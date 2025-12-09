"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OpenAIAchievement() {
  return (
    <div className="relative w-full mb-16">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto bg-[#0F0F13] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Inner Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1B2E] border border-white/10 text-sm text-gray-300 w-fit shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Historic Milestone • 2025
            </div>
            
            <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                First from Bangladesh at <br/>
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">OpenAI DevDay</span>
                </h2>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                OneBrain made history as the <span className="text-gray-200 font-medium">first-ever AI startup from Bangladesh</span> invited to OpenAI's prestigious DevDay in San Francisco.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Our team represented the nation on the global stage and had the honor of meeting <span className="text-white font-medium">Sam Altman</span>, discussing the future of AI in South Asia.
                </p>
            </div>

            <div className="pt-2 space-y-4">
               <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2">
                      <span>📍</span> San Francisco, CA
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2">
                      <span>🚀</span> OpenAI HQ
                  </div>
               </div>

               {/* Press Links Section */}
               <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">Featured Coverage:</p>
                     <div className="flex flex-wrap gap-3">
                         <a href="https://www.prothomalo.com/technology/artificial-intelligence/a60t8txt5p" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs hover:bg-white/10 hover:text-white transition-colors">
                             📰 Prothom Alo Feature
                         </a>
                     </div>
               </div>
            </div>
          </div>

             {/* Visual/Image Side */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
             {/* Upload your image to 'frontend/public/assets/' and update the name here */}
             <Image 
               src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/Historic-%20Milestone.svg" 
              
               alt="OneBrain Team at OpenAI DevDay 2025" 
               fill
               priority
               className="object-cover transition-transform duration-700 group-hover:scale-105"
               onError={(e) => {
                   // Fallback if image doesn't exist yet
                   e.currentTarget.src = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop";
               }}
             />
             
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                   <p className="text-white font-bold text-xl mb-1">Meeting the Visionaries</p>
                   <p className="text-gray-400 text-sm">OneBrain x OpenAI • DevDay 2025</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

