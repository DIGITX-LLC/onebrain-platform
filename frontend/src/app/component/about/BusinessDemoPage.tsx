"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Palette, Globe, LayoutDashboard, Zap, ShieldCheck, CheckCircle, ArrowDown } from "lucide-react";

export default function BusinessDemoPage() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToBooking = () => {
    const element = document.getElementById('booking-calendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-[#030205] w-full min-h-screen text-white selection:bg-gray-500/30 overflow-x-hidden'>
      
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <div className="w-full max-w-7xl rounded-full glass-card bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-10 flex items-center gap-2">
              <Image
                src="/assets/oneBrainLogo.svg"
                alt="OneBrain Logo"
                width={200}
                height={40}
                className="h-6 w-[120px] pl-2 xs:h-7 xs:w-[140px] sm:h-8 sm:w-[160px] md:h-10 md:w-[200px]"
              />
              <div className="h-8 w-px bg-gray-700"></div>
              <span className="text-2xl font-medium text-gray-400 mt-2 -ml-1">for Business</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
                 <button onClick={scrollToBooking} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    Features
                 </button>
                 <button onClick={scrollToBooking} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    How it Works
                 </button>
                 
                 <button 
                    onClick={scrollToBooking}
                    className="px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                 >
                    Book Demo
                 </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white p-2">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-24 right-4 z-50 w-60 bg-[#1A1B2E] border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden">
            <button onClick={() => { scrollToBooking(); setIsOpen(false); }} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-xl">Book Demo</button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 container mx-auto text-center">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
         >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Launch Your Own <br />
                <span className="bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600 text-transparent bg-clip-text">Branded AI Platform</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                Scale your business with a fully white-labeled AI solution. Use your own logo, domain, and brand identity powered by OneBrain's enterprise infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                    onClick={scrollToBooking}
                    className="px-8 py-4 text-lg font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2"
                >
                    Book a Demo
                    <ArrowDown className="w-5 h-5" />
                </button>
                <p className="text-sm text-gray-500 mt-4 sm:mt-0">Schedule a session with our team.</p>
            </div>

            {/* Trusted by Logos */}
            <div className="mt-12 pt-8 border-t border-white/5 w-full">
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">Powered by World Class Models</p>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    <img src="/assets/chatgpt_slide.svg" alt="ChatGPT" className="h-5 md:h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
                    <img src="/assets/clude_slide.svg" alt="Claude" className="h-5 md:h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
                    <img src="/assets/gemini_slide.svg" alt="Gemini" className="h-5 md:h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
                    <img src="/assets/grok_slide.svg" alt="Grok" className="h-4 md:h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
                    <img src="/assets/deepski_slide.svg" alt="DeepSeek" className="h-5 md:h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
                    <img src="/assets/lama_slide.svg" alt="Llama" className="h-5 md:h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
                    <img src="/assets/about/Group-427323058.svg" alt="Mistral" className="h-4 md:h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>
         </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-[#0A0A0F] border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-8 rounded-3xl bg-[#030205] border border-white/10 hover:border-white/20 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Custom Branding</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Your platform, your rules. Upload your logo, set your primary colors, and customize the UI to match your brand identity perfectly.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-3xl bg-[#030205] border border-white/10 hover:border-white/20 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Custom Domain</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Host the platform on your own domain (e.g., ai.yourcompany.com). We handle the SSL and hosting; you keep the traffic.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-3xl bg-[#030205] border border-white/10 hover:border-white/20 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Instant Deployment</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Get up and running in minutes. Our turn-key solution means you can start onboarding users immediately without technical setup.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 container mx-auto px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Launch in 3 Simple Steps</h2>
            
            <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent -translate-x-1/2 hidden md:block"></div>
                <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:hidden"></div>

                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                    <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Select AI Models</h3>
                        <p className="text-gray-400">Choose from ChatGPT, Claude, Gemini, and others to power your platform. Mix and match based on your needs.</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-[#030205] border border-white/20 flex items-center justify-center text-xl font-bold text-white z-10 -translate-x-1/2 md:translate-x-[-50%]">1</div>
                    <div className="md:w-1/2 md:pl-12 order-3 md:order-2"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                    <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-[#030205] border border-white/20 flex items-center justify-center text-xl font-bold text-white z-10 -translate-x-1/2 md:translate-x-[-50%]">2</div>
                    <div className="md:w-1/2 md:pl-12 order-3 md:order-2">
                        <h3 className="text-2xl font-bold text-white mb-2">Apply Branding</h3>
                        <p className="text-gray-400">Upload your assets, configure your DNS for custom domain, and set up your support email.</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                    <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Go Live Instantly</h3>
                        <p className="text-gray-400">Launch your fully branded AI platform to your users. Start monetizing or empowering your team immediately.</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold z-10 -translate-x-1/2 md:translate-x-[-50%]">3</div>
                    <div className="md:w-1/2 md:pl-12 order-3 md:order-2"></div>
                </div>
            </div>
         </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking-calendar" className="py-20 bg-[#0A0A0F]">
         <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto bg-[#030205] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                {/* Left: Call to Action */}
                <div className="p-10 md:p-16 md:w-2/5 bg-gradient-to-br from-[#1A1B2E] to-[#030205] flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch?</h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Schedule a demo with our white-label experts. We'll show you the admin panel, discuss pricing, and help you plan your launch.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-300">Full Platform Walkthrough</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-300">Pricing & Commission Models</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-300">Technical Setup Guide</span>
                        </div>
                    </div>
                </div>

                {/* Right: Calendar */}
                <div className="md:w-3/5 h-[600px] relative bg-[#0F0F13]">
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="flex flex-col items-center gap-3 opacity-50">
                            <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
                            <p className="text-gray-600 text-xs">Loading Calendar...</p>
                        </div>
                    </div>
                    <iframe 
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2X_example_placeholder?gv=true" 
                        style={{border: 0}} 
                        width="100%" 
                        height="100%" 
                        className="relative z-10 w-full h-full bg-[#0F0F13]"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5">
        <p>© 2025 OneBrain for Business. A Product of DigitX LLC.</p>
        <div className="flex justify-center gap-4 mt-4">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
        </div>
      </footer>

    </div>
  );
}
