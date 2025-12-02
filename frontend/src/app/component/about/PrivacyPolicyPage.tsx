"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Footer from '../Footer';

export default function PrivacyPolicyPage() {
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
                    Privacy <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">Policy</span>
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
                    At OneBrain, accessible from https://ai.onebrain.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by OneBrain and how we use it. OneBrain is a product of <strong>DigitX LLC</strong>.
                </p>

                <h3>1. Consent</h3>
                <p>
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>

                <h3>2. Information We Collect</h3>
                <p>
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p>
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
                <p>
                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>

                <h3>3. How We Use Your Information</h3>
                <p>
                    We use the information we collect in various ways, including to:
                </p>
                <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h3>4. Log Files</h3>
                <p>
                    OneBrain follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>

                <h3>5. Third Party Privacy Policies</h3>
                <p>
                    OneBrain's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>

                <h3>6. Data Security in Bangladesh</h3>
                <p>
                    We take the security of your data seriously. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While no method of transmission over the Internet or electronic storage is 100% secure, we strive to use commercially acceptable means to protect your personal information, complying with applicable laws in Bangladesh.
                </p>

                <h3>7. CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
                <p>
                    Under the CCPA, among other rights, California consumers have the right to:
                </p>
                <ul>
                    <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                    <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                    <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                </ul>
                <p>
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>

                <h3>8. GDPR Data Protection Rights</h3>
                <p>
                    We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                </p>
                <ul>
                    <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                    <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
                <p>
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>

                <h3>9. Children's Information</h3>
                <p>
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p>
                    OneBrain does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>

                <h3>10. Contact Us</h3>
                <p>
                    If you have any questions about our Privacy Policy, please contact us at:
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

