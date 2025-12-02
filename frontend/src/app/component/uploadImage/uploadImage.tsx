import { ArrowUpRight, Video, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function UploadImage() {

  return (
    <section className="max-w-7xl mx-auto font-sans px-4 sm:px-6 lg:px-8">
        {/* Header / Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
            
            {/* Left Text Content */}
            <div className="space-y-8">
               <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                    <Video className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-medium text-gray-200 tracking-wide">Cinematic Video Studio</h2>
               </div>

               <div className="space-y-6">
                <h1 className="font-bold text-4xl lg:text-6xl leading-tight">
                    <span className="text-white">From Words</span><br/>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">to Worlds</span>
                </h1>
                <p className="font-light text-lg lg:text-xl text-gray-400 leading-relaxed max-w-lg">
                    Access the industry's most powerful video models including <span className="text-gray-200">Sora, Veo, RunwayML, Kling, Hailuo, Wan,</span> and <span className="text-gray-200">Litetricks</span>.
                </p>
                <p className="text-gray-500 text-base leading-relaxed">
                    Whether for commercial production or hobbyist creation, explore affordable models for every level. Create cinematic, animated, or photorealistic videos with ease.
                </p>
               </div>

               {/* Feature Box */}
               <div className="rounded-2xl bg-[#1A1B2E] p-6 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl -z-10 rounded-full" />
                
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-purple-300 mb-1">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Auto-Enhanced</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Music, sound effects, and dialogue are automatically generated to make every scene complete and immersive.
                        </p>
                    </div>
                    <div className="mt-2">
                        {/* <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
                            <ArrowUpRight className="h-5 w-5" />
                        </button> */}
                        <a 
                             href="https://ai.onebrain.app/login" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                        <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
                                <ArrowUpRight className="h-5 w-5" />
                            </button>
                        </a>

                    </div>
                </div>
               </div>
            </div>

            {/* Right Video Grid */}
            <div className="relative grid grid-cols-2 gap-3 p-3 rounded-3xl border border-white/10 bg-[#0F0F13] shadow-2xl">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-purple-500/5 blur-2xl -z-10 rounded-3xl" />

                <div className="flex flex-col gap-3 mt-8">
                    <div className="relative rounded-xl overflow-hidden border border-white/5 group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <video src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video1.mp4" className="w-full h-[160px] object-cover" autoPlay loop muted controls={false} playsInline></video>
                    </div>
                    <div className="relative rounded-xl overflow-hidden border border-white/5 group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <video src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video2.mp4" className="w-full h-[240px] object-cover" autoPlay loop muted controls={false} playsInline></video>
                    </div>
                </div>

                <div className="flex flex-col gap-3 mb-8">
                    <div className="relative rounded-xl overflow-hidden border border-white/5 group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <video src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video3.mp4" className="w-full h-[240px] object-cover" autoPlay loop muted controls={false} playsInline></video>
                    </div>
                    <div className="relative rounded-xl overflow-hidden border border-white/5 group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <video src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video4.mp4" className="w-full h-[160px] object-cover" autoPlay loop muted controls={false} playsInline></video>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
