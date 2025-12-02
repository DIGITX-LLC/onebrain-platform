"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar, Video, Clock } from "lucide-react";

export default function AffiliateDemoPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#030205] w-full min-h-screen text-white flex flex-col selection:bg-gray-500/20">

      {/* NAVBAR */}
      <div className="fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl top-4 md:top-6 z-50">
        <div className="px-4 py-3 rounded-full bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-2xl shadow-black/50">
          
          {/* Logo */}
          <Link href="/" className="z-10">
            <Image
              src="/assets/oneBrainLogo.svg"
              alt="OneBrain Logo"
              width={180}
              height={40}
              className="h-6 w-auto brightness-0 invert sm:h-8 md:h-9"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {[
                { name: "AI Models", href: "/#featuresSection" },
                { name: "Pricing", href: "/#oneBrainPromoSection" },
                { name: "Business", href: "/business" },
                { name: "Updates", href: "/#updatesSection" },
                { name: "Contact Us", href: "/#faqSection" },
                { name: "Blog", href: "/blog" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sign In */}
            <a
              href="https://ai.onebrain.app/login"
              className="px-6 py-2 text-sm bg-[#1A1B2E] border border-white/10 rounded-full hover:bg-[#232438] transition"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-3 absolute right-0 w-64 bg-[#1a1f3a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg overflow-hidden">
            <ul className="py-3">
              {[
                { name: "AI Models", href: "/#featuresSection" },
                { name: "Pricing", href: "/#oneBrainPromoSection" },
                { name: "Business", href: "/business" },
                { name: "Updates", href: "/#updatesSection" },
                { name: "Contact Us", href: "/#faqSection" },
                { name: "Blog", href: "/blog" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-3 text-sm text-white hover:bg-white/10 rounded-xl"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-5 pb-3">
              <a
                href="https://ai.onebrain.app/login"
                className="block w-full text-center px-4 py-3 bg-[#1A1B2E] border border-white/10 text-sm rounded-xl hover:bg-[#232438]"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>

      {/* PAGE SECTION */}
      <main className="flex-1 container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-10 flex flex-col lg:flex-row gap-8">

        {/* Left Content */}
        <div className="lg:w-1/3 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
                Affiliate Demo
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Book Your{" "}
                <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">
                  Affiliate Demo
                </span>
              </h1>

              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Schedule a 1-on-1 session. We'll walk you through our affiliate
                platform, commission structure, and growth tools.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                { icon: <Video className="w-4 h-4" />, text: "Live Platform Demo" },
                { icon: <Calendar className="w-4 h-4" />, text: "Commission Details" },
                { icon: <Clock className="w-4 h-4" />, text: "Strategy Session" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition"
                >
                  <div className="p-1.5 rounded-lg bg-white/10 text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-sm">{item.text}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Calendar */}
        <div className="lg:w-2/3 w-full h-[500px] md:h-[650px] lg:h-[750px] bg-[#0F0F13] rounded-xl overflow-hidden border border-white/10 shadow-xl relative">

          {/* Loading UI */}
          <div className="absolute inset-0 flex bg-white items-center justify-center z-0 pointer-events-none">
            <div className="flex flex-col items-center gap-3 opacity-40">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
              <p className="text-xs text-gray-300">Loading Calendar...</p>
            </div>
          </div>

          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1QS2IclaPa_-oQ1QXscXpR8Tq0IbT5nARDwN6CWZ0SevrEN9ZRD16jHwONc8tBCCLm01UyG6ZZ?gv=true"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center text-[10px] text-gray-600 border-t border-white/[0.05]">
        © 2025 OneBrain. A Product of DigitX LLC.
      </footer>
    </div>
  );
}
