"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Footer from '../Footer';

export default function TermsPage() {
  const [isSticky, setIsSticky] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-[#030205] relative min-h-screen text-white selection:bg-blue-500/30'>
      
      {/* Navigation Header - Matching Homepage */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 px-2 sm:px-4 flex z-50 items-center justify-between w-[95%] max-w-7xl transition-all duration-500 ease-in-out`}
        style={{
          top: isSticky ? "16px" : isMobile ? "20px" : "2rem",
        }}
      >
        <div className={`
          px-2 sm:px-4 py-3 flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-500 ease-in-out
          ${(isSticky || isMobile || isOpen) 
            ? "glass-card shadow-2xl shadow-black/50 bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10" 
            : "bg-transparent border border-transparent"}
        `}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-10">
              <Image
                src="/assets/oneBrainLogo.svg"
                alt="OneBrain Logo"
                width={200}
                height={40}
                className="h-6 w-[120px] pl-2 xs:h-7 xs:w-[140px] sm:h-8 sm:w-[160px] md:h-10 md:w-[200px]"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center">
                 <ul className={`flex items-center gap-1 lg:gap-2 rounded-full p-1 transition-all duration-300 ${
                    (isSticky) 
                      ? "bg-transparent border-transparent" 
                      : "bg-white/5 border border-white/5 backdrop-blur-sm"
                  }`}>
                     {[
                        { name: "AI Models", href: "/#featuresSection" },
                        { name: "Pricing", href: "/#oneBrainPromoSection" },
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
                    <a href="https://ai.onebrain.app/login" className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-[#1A1B2E] border border-blue-500/30 rounded-full hover:bg-[#232438] hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] overflow-hidden">
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

      {/* Hero Section */}
      <div className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
         
         <div className="container mx-auto text-center max-w-4xl relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                    Terms of <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">Service</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    Last Updated: November 2025
                </p>
            </motion.div>
         </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#0F0F13] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                <p className="lead">
                    Welcome to OneBrain. By accessing or using our website and services, you agree to be bound by these Terms of Service. OneBrain is a product of <strong>DigitX LLC</strong>, headquartered in New York, USA, and operating in Bangladesh.
                </p>

                <h3>1. Acceptance of Terms</h3>
                <p>
                    By accessing or using the OneBrain platform ("Service"), accessible from https://ai.onebrain.app, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the Service. These terms apply to all visitors, users, and others who access or use the Service in Bangladesh and globally.
                </p>

                <h3>2. Governing Law & Jurisdiction</h3>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of <strong>Bangladesh</strong>, without regard to its conflict of law provisions.
                </p>
                <p>
                    You agree that any legal action or proceeding between you and OneBrain (or DigitX LLC) for any purpose concerning these Terms or the parties' obligations hereunder shall be brought exclusively in a court of competent jurisdiction sitting in <strong>Dhaka, Bangladesh</strong>. You hereby waive any objection to the venue of such courts.
                </p>

                <h3>3. Use License & Restrictions</h3>
                <p>
                    Permission is granted to use OneBrain for personal or commercial purposes as per your subscription plan. However, you may not:
                </p>
                <ul>
                    <li>Modify, copy, or attempt to reverse engineer any software contained on OneBrain's website;</li>
                    <li>Use the materials for any illegal purpose or in violation of any laws in Bangladesh;</li>
                    <li>Share your account credentials with others (unless permitted by an Enterprise plan);</li>
                    <li>Use the Service to generate content that is defamatory, obscene, or violates the rights of others.</li>
                </ul>

                <h3>4. Disclaimer of Warranties ("As Is")</h3>
                <p>
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis. OneBrain and DigitX LLC make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                </p>
                <p>
                    OneBrain does not warrant that the Service will be uninterrupted, secure, or error-free, or that any defects will be corrected.
                </p>

                <h3>5. Limitation of Liability</h3>
                <p className="uppercase font-bold text-sm tracking-wide text-gray-400">
                    READ CAREFULLY: THIS SECTION LIMITS OUR LIABILITY TO THE MAXIMUM EXTENT PERMITTED BY BANGLADESH LAW.
                </p>
                <p>
                    In no event shall OneBrain, DigitX LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                    <li>Your access to or use of or inability to access or use the Service;</li>
                    <li>Any conduct or content of any third party on the Service;</li>
                    <li>Any content obtained from the Service; and</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                </ul>
                <p>
                    To the maximum extent permitted by applicable law, OneBrain's total liability to you for any claims arising out of or relating to these terms or your use of the service shall be limited to the amount you paid us for the service in the 12 months prior to the claim.
                </p>

                <h3>6. Indemnification</h3>
                <p>
                    You agree to defend, indemnify and hold harmless OneBrain, DigitX LLC, and their licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) resulting from your use and access of the Service, or your violation of these Terms.
                </p>

                <h3>7. Class Action Waiver</h3>
                <p>
                    You agree that any arbitration or proceeding shall be limited to the dispute between us and you individually. To the full extent permitted by law, (i) no arbitration or proceeding shall be joined with any other; (ii) there is no right or authority for any dispute to be arbitrated or resolved on a class action-basis or to utilize class action procedures; and (iii) there is no right or authority for any dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                </p>

                <h3>8. Changes to Terms</h3>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>

                <h3>9. Contact Us</h3>
                <p>
                    If you have any questions about these Terms, please contact us at:
                    <br />
                    <span className="text-blue-400">support@onebrain.app</span>
                </p>
            </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
