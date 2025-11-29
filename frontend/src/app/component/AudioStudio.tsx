import { ArrowUpRight, Mic, Waves } from "lucide-react";
import React from "react";

export default function AudioStudio() {
  return (
    <section className="max-w-7xl mx-auto font-sans px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1A1B2E] to-[#0F0F13] border border-white/10 p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-8">
                   <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                        <Mic className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-medium text-gray-200 tracking-wide">Audio & Voice Studio</h2>
                   </div>

                   <div className="space-y-6">
                    <h1 className="font-bold text-4xl lg:text-5xl leading-tight">
                        <span className="text-white">Speak to the</span><br/>
                        <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-transparent bg-clip-text">World</span>
                    </h1>
                    <p className="font-light text-lg lg:text-xl text-gray-400 leading-relaxed max-w-lg">
                        Professional voice synthesis and audio generation powered by <span className="text-gray-200 font-medium">ElevenLabs</span>.
                    </p>
                    
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-md">
                        <div className="flex items-center gap-3 mb-2">
                            <Waves className="w-5 h-5 text-orange-400" />
                            <span className="text-gray-200 font-medium">Native Bangla Support</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Generate natural-sounding Bangla speech with authentic accents and intonations. Perfect for content creation, storytelling, and accessibility.
                        </p>
                    </div>
                   </div>
                </div>

                {/* Visual/Interactive Element */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md aspect-video bg-[#0A0A0F] rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center group">
                        <div className="absolute inset-0 bg-orange-500/5 blur-3xl -z-10 rounded-full" />
                        
                        {/* Audio Wave Visualization */}
                        <div className="flex gap-1 items-center h-32">
                            {[45, 67, 32, 89, 54, 76, 43, 88, 35, 92, 61, 28, 74, 59, 83, 47, 66, 39, 81, 55].map((height, i) => (
                                <div 
                                    key={i}
                                    className="w-2 bg-gradient-to-t from-orange-500 to-yellow-500 rounded-full animate-pulse"
                                    style={{
                                        height: `${height}%`,
                                        animationDelay: `${i * 0.1}s`,
                                        animationDuration: '1.5s'
                                    }}
                                />
                            ))}
                        </div>
                        
                        <div className="absolute bottom-4 right-4 text-xs text-gray-500 font-mono">Powered by ElevenLabs</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
