"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar, Video, Clock, ArrowRight } from "lucide-react";

export default function AffiliateDemoPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-[#030205] w-full min-h-screen lg:h-screen lg:overflow-hidden text-white selection:bg-gray-500/30 flex flex-col'>
      
      {/* Navigation Header */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 px-2 sm:px-4 flex z-50 items-center justify-between w-[95%] max-w-7xl top-4 md:top-6 transition-all duration-500 ease-in-out`}
      >
        <div className={`
          px-2 sm:px-4 py-3 flex items-center justify-between w-full max-w-7xl rounded-full 
          glass-card shadow-2xl shadow-black/50 bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10
        `}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-10">
              <Image
                src="/assets/oneBrainLogo.svg"
                alt="OneBrain Logo"
                width={200}
                height={40}
                className="h-6 w-[120px] pl-2 xs:h-7 xs:w-[140px] sm:h-8 sm:w-[160px] md:h-10 md:w-[200px] brightness-0 invert"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center">
                 <ul className={`flex items-center gap-1 lg:gap-2 rounded-full p-1 bg-transparent border-transparent`}>
                     {[
                        { name: "AI Models", href: "/#featuresSection" },
                        { name: "Pricing", href: "/#oneBrainPromoSection" },
                        { name: "Business", href: "/business" },
                        { name: "Updates", href: "/#updatesSection" },
                        { name: "Mobile App", href: "/#mobileAppSection" },
                        { name: "Contact Us", href: "/#faqSection" },
                     ].map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 block">
                                {item.name}
                            </Link>
                        </li>
                     ))}
                     <li>
                        <Link href="/blog" className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/5 block">
                            Blog
                        </Link>
                     </li>
                 </ul>

                 {/* Sign In */}
                 <div className="ml-4 pl-4 border-l border-white/10">
                    <a href="https://ai.onebrain.app/login" className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-[#1A1B2E] border border-white/10 rounded-full hover:bg-[#232438] hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">Sign In</span>
                    </a>
                 </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
            <div className="absolute top-full right-0 mt-3 w-60 mx-3 sm:mx-4 bg-[#1a1f3a]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-40">
                <ul className="py-3">
                    {[
                        { name: "AI Models", href: "/#featuresSection" },
                        { name: "Pricing", href: "/#oneBrainPromoSection" },
                        { name: "Business", href: "/business" },
                        { name: "Updates", href: "/#updatesSection" },
                        { name: "Mobile App", href: "/#mobileAppSection" },
                        { name: "Contact Us", href: "/#faqSection" },
                        { name: "Blog", href: "/blog" },
                    ].map((item) => (
                        <li key={item.name} className="px-5 py-1">
                             <Link href={item.href} onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-xl font-medium text-sm">
                                {item.name}
                             </Link>
                        </li>
                    ))}
                     <div className="h-px bg-white/20 mx-5 my-3"></div>
                     <li className="px-5 py-1">
                        <a href="https://ai.onebrain.app/login" className="block w-full text-center px-4 py-3 bg-[#1A1B2E] border border-white/10 text-white hover:bg-[#232438] rounded-xl font-medium text-sm">
                            Sign In
                        </a>
                     </li>
                </ul>
            </div>
        )}
      </div>

      {/* Main Layout - Split Screen */}
      <main className="flex-1 container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-6 flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12 overflow-visible lg:overflow-hidden h-full">
         
         {/* Background Glow */}
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

         {/* Left Side: Content */}
         <div className="lg:w-1/3 flex flex-col justify-center overflow-y-auto no-scrollbar py-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 backdrop-blur-sm w-fit">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
                    Affiliate Demo
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    Book Your <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">Affiliate Demo</span>
                </h1>
                <p className="text-sm text-gray-400 font-light leading-relaxed max-w-md">
                    Schedule a 1-on-1 session. We'll walk you through our affiliate platform, commission structure, and growth tools.
                </p>
                </div>

                {/* Compact Features */}
                  <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                          <div className="p-1.5 rounded-lg bg-white/5 text-white">
                              <Video className="w-4 h-4" />
                          </div>
                          <div>
                              <h4 className="text-sm font-medium text-white">Live Platform Demo</h4>
                          </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                          <div className="p-1.5 rounded-lg bg-white/5 text-white">
                              <Calendar className="w-4 h-4" />
                          </div>
                          <div>
                              <h4 className="text-sm font-medium text-white">Commission Details</h4>
                          </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                          <div className="p-1.5 rounded-lg bg-white/5 text-white">
                              <Clock className="w-4 h-4" />
                          </div>
                          <div>
                              <h4 className="text-sm font-medium text-white">Strategy Session</h4>
                          </div>
                      </div>
                  </div>

            </motion.div>
         </div>

         {/* Right Side: Calendar */}
         <div className="lg:w-2/3 w-full h-full min-h-[500px] lg:min-h-0 bg-[#0F0F13] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative flex-1 flex flex-col">
            
               <div className="relative w-full h-full flex-1">
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
      </main>

      {/* Minimal Footer */}
      <div className="py-2 px-6 text-center text-[10px] text-gray-700 bg-[#030205] border-t border-white/[0.02]">
        © 2025 OneBrain. A Product of DigitX LLC.
      </div>
    </div>
  );
}
