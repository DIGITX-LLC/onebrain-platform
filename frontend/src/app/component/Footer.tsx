"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-[#030205] relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Section - Branding & Info (Span 5 cols) */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/assets/oneBrainLogo.svg"
                alt="OneBrain"
                width={180}
                height={40}
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            
            {/* Tagline - Styled as text instead of image for better quality */}
            <div className="space-y-1">
                 <h3 className="text-xl font-bold text-white tracking-tight">
                    The <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">Multiverse</span> of AI
                 </h3>
                 <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Empowering Bangladesh with the world&apos;s most advanced AI models in one affordable platform.
                 </p>
            </div>

            {/* Address Block */}
            <div className="pt-4 space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                    <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                    <p>
                        Level 8, MTB Building, Software Technology Park,<br />
                        Jashore-7400, Bangladesh
                    </p>
                </div>
                <div className="flex items-center gap-3">
                     <span className="block w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                    <p>Contact: <a href="tel:+8801988121220" className="text-gray-300 hover:text-white transition-colors">+880 1988121220</a></p>
                </div>
            </div>
          </div>

          {/* Spacer (Span 1 col) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Center Section - Product (Span 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => handleNavigation("featuresSection")}
                  className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200 inline-block"
                >
                  AI Models
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("oneBrainPromoSection")}
                  className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Pricing & Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("updatesSection")}
                  className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Updates
                </button>
              </li>
              <li>
                <Link
                  href="/business"
                  className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate-demo"
                  className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Company (Span 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => handleNavigation("faqSection")}
                  className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200 inline-block"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("faqSection")}
                  className="hover:text-white transition-colors text-left hover:translate-x-1 duration-200 inline-block"
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2025 OneBrain. All rights reserved.</p>
            
            <div className="flex items-center gap-2">
                <span>A Product of</span>
                <a
                    href="https://digitxgroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                >
                    <Image
                        src="https://digitxevents.com/wp-content/uploads/2025/07/digitx_logo.png"
                        alt="DigitX"
                        width={60}
                        height={16}
                        className="h-4 w-auto"
                    />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
