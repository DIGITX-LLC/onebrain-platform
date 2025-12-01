import { ArrowUpRight, Image as ImageIcon, Palette } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ImageStudio() {
  return (
    <section className="max-w-7xl mx-auto font-sans px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Right Image Grid */}
            <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4 p-4 rounded-3xl border border-white/10 bg-[#0F0F13] shadow-2xl">
                    <div className="absolute inset-0 bg-blue-500/5 blur-2xl -z-10 rounded-3xl" />
                    
                    <div className="relative h-40 rounded-xl overflow-hidden border border-white/10 group bg-[#0A0A0F]">
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <Image 
                                src={'/assets/models/ImageX White.png'}
                                alt="OpenAI ImageX" 
                                width={120}
                                height={120}
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                            <span className="text-xs font-medium text-white">OpenAI ImageX</span>
                        </div>
                    </div>

                    <div className="relative h-40 rounded-xl overflow-hidden border border-white/10 group bg-[#0A0A0F]">
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <Image 
                                src={'/assets/models/veo3-black.png'}
                                alt="Google Nano Banana Pro" 
                                width={120}
                                height={120}
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                            <span className="text-xs font-medium text-white">Google Nano Banana Pro</span>
                        </div>
                    </div>

                    <div className="relative h-40 rounded-xl overflow-hidden border border-white/10 group bg-[#0A0A0F]">
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <Image 
                                src={'/assets/models/SeeDream 4.0 Logo.png'}
                                alt="Seedream" 
                                width={120}
                                height={120}
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                            <span className="text-xs font-medium text-white">Seedream</span>
                        </div>
                    </div>

                    <div className="relative h-40 rounded-xl overflow-hidden border border-white/10 group bg-[#0A0A0F]">
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <Image 
                                src={'/assets/models/flux-w.svg'}
                                alt="Flux" 
                                width={120}
                                height={120}
                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                            <span className="text-xs font-medium text-white">Flux</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left Text Content */}
            <div className="space-y-8 order-1 lg:order-2">
               <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                    <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-medium text-gray-200 tracking-wide">Next-Gen Image Studio</h2>
               </div>

               <div className="space-y-6">
                <h1 className="font-bold text-4xl lg:text-6xl leading-tight">
                    <span className="text-white">Visualize</span><br/>
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">Anything</span>
                </h1>
                <p className="font-light text-lg lg:text-xl text-gray-400 leading-relaxed max-w-lg">
                    Unleash your creativity with the world's most advanced image generation models.
                </p>
                
                <div className="flex flex-wrap gap-3">
                    {["OpenAI ImageX", "Google Nano Banana Pro", "Seedream", "Flux"].map((model, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                            {model}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 text-base leading-relaxed">
                    From photorealistic rendering to stylized art, access OpenAI powered ImageX, Google's latest Nano Banana Pro, Seedream, and Flux all in one place.
                </p>
               </div>

               <a 
                   href="https://ai.onebrain.app/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors cursor-pointer"
               >
                   Start Generating <ArrowUpRight className="w-4 h-4" />
               </a>
            </div>
        </div>
    </section>
  );
}
