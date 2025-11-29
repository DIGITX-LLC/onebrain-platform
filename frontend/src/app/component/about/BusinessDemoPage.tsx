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
            <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6 backdrop-blur-sm">
                    From Teams of Two to Teams of Thousands
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                    Your Company's <br />
                    <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 text-transparent bg-clip-text drop-shadow-sm">Private AI Workspace</span> <br />
                    <span className="text-3xl md:text-5xl text-gray-500 block mt-2">in Bangladesh</span>
                </h1>
            </div>
            
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
            
            {/* Golden Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/20 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse"></div>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 relative z-10">
                Empower your workforce with a secure, branded AI platform. Give your team access to top AI models with centralized billing in <strong>BDT</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <button 
                    onClick={scrollToBooking}
                    className="group px-8 py-4 text-lg font-bold text-black bg-white rounded-full hover:bg-gray-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] flex items-center gap-2 relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Book a Demo
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shine" />
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
                    <h3 className="text-xl font-bold text-white mb-3">Company Branding</h3>
                    <p className="text-gray-400 leading-relaxed">
                        A unified workspace that looks and feels like your company. Custom logo, colors, and domain to keep your team's experience professional.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-3xl bg-[#030205] border border-white/10 hover:border-white/20 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <LayoutDashboard className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Train on Private Data</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Create custom AI models trained on your documents. Securely upload files to a <strong>private knowledge base</strong> that never leaves your ecosystem.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-3xl bg-[#030205] border border-white/10 hover:border-white/20 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Private Server Storage</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Maintain complete data sovereignty. Option to deploy on your own <strong>private server</strong> so your company data never leaves your infrastructure.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 bg-[#030205] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-3 block">Industries</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">Built for Bangladesh's Top Sectors</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Tailored AI solutions for every industry need, ensuring privacy and efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Software */}
                <div className="p-6 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-white/10 hover:bg-[#0F0F15] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Software & IT</h3>
                    <p className="text-sm text-gray-400">Secure code generation, automated documentation, and private code analysis without leaking IP.</p>
                </div>

                {/* Marketing */}
                <div className="p-6 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-white/10 hover:bg-[#0F0F15] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Marketing Agencies</h3>
                    <p className="text-sm text-gray-400">Generate Bangla & English content, creative visuals, and marketing copy at scale with brand consistency.</p>
                </div>

                {/* E-commerce */}
                <div className="p-6 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-white/10 hover:bg-[#0F0F15] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">E-commerce & Retail</h3>
                    <p className="text-sm text-gray-400">Automate product descriptions, enhance customer support, and analyze market trends instantly.</p>
                </div>

                {/* Education */}
                <div className="p-6 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-white/10 hover:bg-[#0F0F15] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Education & EdTech</h3>
                    <p className="text-sm text-gray-400">Personalized learning assistants, research summaries, and automated grading support for institutions.</p>
                </div>

                {/* Legal */}
                <div className="p-6 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-white/10 hover:bg-[#0F0F15] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Legal & Finance</h3>
                    <p className="text-sm text-gray-400">Analyze contracts and financial reports securely on private servers without exposing client data.</p>
                </div>

                {/* News Media */}
                <div className="p-6 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-white/10 hover:bg-[#0F0F15] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">News & Media</h3>
                    <p className="text-sm text-gray-400">Draft articles, translate news to Bangla instantly, and summarize global reports for local audience.</p>
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
                        <h3 className="text-2xl font-bold text-white mb-2">Onboard Your Team</h3>
                        <p className="text-gray-400">Invite your employees, assign roles, and manage access. Set usage limits and monitor team activity.</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                    <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-white mb-2">Boost Productivity</h3>
                        <p className="text-gray-400">Your team gets instant access to advanced AI tools in a secure environment. Watch efficiency soar.</p>
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
                        Schedule a demo with our <strong>Dhaka-based team</strong>. We'll show you the admin panel, discuss <strong>BDT pricing</strong>, and help you plan your launch.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-300">Full Platform Walkthrough</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-300">BDT Pricing & Local Support</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-300">Payment Gateway Setup Guide</span>
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
