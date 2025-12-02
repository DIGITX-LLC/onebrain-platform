"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

export default function Vo3TrendingSection() {
    return (
        <section className="relative max-w-7xl mx-auto font-sans px-4 sm:px-6 lg:px-8">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center"
                >

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                        <span className="text-gray-200">Top Chat Models,</span>
                        <span className="block mt-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 text-transparent bg-clip-text pb-2">
                            Evolved for Bangladesh
                        </span>
                    </h1>
                    
                    <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-8 border-l-2 border-white/10 pl-6 py-1">
                        Experience ChatGPT, Claude, Gemini, DeepSeek, Llama, Mistral, Perplexity, Qwen & Grok.
                    </h3>

                    <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                        <p className="text-lg md:text-xl font-light">
                            Unlock the true potential of <span className="text-gray-300 font-medium">Generative AI</span> for study, work, and creativity. Switch instantly between ChatGPT, Claude, Gemini, DeepSeek, Llama, Mistral, Perplexity, Qwen, and Grok to get the best answer for every question.
                        </p>
                        
                        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                            <strong className="text-gray-200 block mb-4">Why OneBrain is More Powerful than Single-Model Apps:</strong>
                            <ul className="space-y-3 text-base">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-white/10 rounded-full shrink-0 border border-white/10">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span><span className="text-gray-300 font-medium">Universal Personal Memory</span> across ALL models.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-white/10 rounded-full shrink-0 border border-white/10">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span><span className="text-gray-300 font-medium">Access All Giants</span> – Use ChatGPT for writing, Claude for coding, and Gemini for analysis.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-white/10 rounded-full shrink-0 border border-white/10">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span><span className="text-gray-300 font-medium">Create Images & Videos</span> directly in any chat flow.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-white/10 rounded-full shrink-0 border border-white/10">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span><span className="text-gray-300 font-medium">Local Payments</span> (Bkash, Nagad) – No dual currency card needed.</span>
                                </li>
                            </ul>
                        </div>

                        <p>
                            From flawless Bangla content to advanced reasoning, OneBrain gives you the best of every world. Subscribe easily and stay ahead of the curve.
                        </p>
                    </div>
                </motion.div>

                {/* Right Video Card */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative perspective-1000"
                >
                    {/* Main App Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F0F13] shadow-2xl shadow-black/50 group">
                        
                        {/* Window Header */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center px-4 z-20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
                            </div>
                            <div className="mx-auto text-[10px] uppercase tracking-widest text-gray-600 font-semibold">OneBrain Workspace</div>
                        </div>

                        {/* Video Content */}
                        <div className="pt-10 relative bg-[#1A1B2E]">
                             <video 
                                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Chatgpt%20Home%20page%20.mp4" 
                                className="w-full h-[400px] lg:h-[500px] object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                                autoPlay
                                loop
                                muted
                                controls={false}
                                playsInline
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-transparent z-10 pointer-events-none" />
                        </div>

                        {/* Mock Chat Interface Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-4 shadow-lg transform transition-transform duration-500 group-hover:translate-y-1">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                                    <Sparkles className="w-5 h-5 text-blue-300" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-2 w-3/4 bg-white/10 rounded-full animate-pulse" />
                                    <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back Glow */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
