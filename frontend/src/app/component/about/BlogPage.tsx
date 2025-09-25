"use client";
import React, { useState, useEffect } from 'react';
import { motion, animate, useMotionValue, useMotionTemplate } from 'framer-motion';
import ButtonAnimatedGradient from "./ButtonAnimatedGradient";
import Link from "next/link";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function BlogPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowBurgerMenu(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, rgba(2,6,23,0.5) 50%, ${color})`;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const blogs = [
    {
      id: 1,
      title: ' Llama 3.3 Vs. Grok 3',
      excerpt: 'OneBrain is just launched 3.3 brings faster performance, smarter reach. Llama 3.3 is a smart language model. It can help like chatting, coding...',
      image: 'https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png',
      link: '/details1'
    },
    {
      id: 2,
      title: 'Llama 3.3 and Chatgpt 4.o',
      excerpt: 'Introduced in May 2024, GPT-4o represents OpenAI’s most advanced flagship multimodal model to date, engineered to be the fastest and most....',
      image: 'https://digitxevents.com/wp-content/uploads/2025/04/2-3.png',
      link: '/details2'
    },
    {
      id: 3,
      title: ' DeepSeek VS. ChatGPT',
      excerpt: 'AI chatbots have become essential tools in personal and professional settings, transforming how we communicate, create, and solve problems....',
      image: 'https://digitxevents.com/wp-content/uploads/2025/04/blog3.png',
      link: '/details3'
    },
    {
      id: 4,
      title: ' How to Buy ChatGPT Premium Models in BD?',
      excerpt: 'Are you looking for the best ChatGPT model to boost productivity, create amazing content, or ...',
      image: 'https://digitxevents.com/wp-content/uploads/2025/09/Chatgpt-in-Bangladesh-5.png',
      link: '/details4'
    },
    // ... other blog objects remain unchanged
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setIsSticky(currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const X = ({ size }) => <span style={{ fontSize: size }}>X</span>;
  const Menu = ({ size }) => <span style={{ fontSize: size }}>☰</span>;

  return (
    <div className='bg-[#030205] relative hero-space min-h-screen'>
      {/* Navbar - remains unchanged */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 border border-gray-700 rounded-full px-4 py-2 flex items-center justify-between w-[85%] max-w-3xl z-20 transition-all duration-300
          ${isSticky
            ? "fixed top-2 shadow-lg bg-white/10 backdrop-blur-[7px]"
            : "absolute bg-transparent"
          }`}
        style={{
          top: isSticky ? "10px" : "1.5rem",
          transition: "top 0.3s ease-in-out",
        }}
      >
        <Link href="/about">
          <img
            src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
            alt="OneBrain Logo"
            className="h-6"
          />
        </Link>
        <div className="flex items-center">
          {showBurgerMenu && (
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        <ul
          className={`flex text-sm transition-all duration-300 ${showBurgerMenu
            ? `absolute top-full right-0 w-60 flex-col items-start py-4 border border-gray-300 shadow-lg text-white font-bold rounded-lg ${isOpen ? "flex bg-white/10 backdrop-blur-[7px]" : "hidden"
            }`
            : "flex gap-2 text-gray-300 items-center"
            }`}
        >
          {/* Menu items remain unchanged */}
          <li><Link href="/about" className="hover:text-gray-600 cursor-pointer px-2 py-2 block" onClick={showBurgerMenu ? closeMenu : undefined}>AI Models</Link></li>
          <li><Link href="/about" className="hover:text-gray-600 cursor-pointer px-2 py-2 block" onClick={showBurgerMenu ? closeMenu : undefined}>Pricing</Link></li>
          <li><Link href="/about" className="hover:text-gray-600 cursor-pointer px-2 py-2 block" onClick={showBurgerMenu ? closeMenu : undefined}>Brain Upgrading Log</Link></li>
          <li><Link href="/blog" className="hover:text-gray-600 cursor-pointer px-2 py-2 block" onClick={showBurgerMenu ? closeMenu : undefined}>Blog</Link></li>
          <li><Link href="/about" className="hover:text-gray-600 cursor-pointer px-2 py-2 block" onClick={showBurgerMenu ? closeMenu : undefined}>Contact Us</Link></li>
          {!showBurgerMenu && (
            <li>
              <Link href="/login">
                <ButtonAnimatedGradient
                  text="Sign-In"
                  gradientFrom="#0f1747"
                  gradientTo="#0f1747"
                  borderColor="#b2b8f6"
                  className="w-[135px] h-[40px] rounded-full font-normal block"
                />
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Cover Image Section - remains unchanged */}
      <motion.div
        style={{ backgroundImage }}
        className="relative h-[400px] md:h-[400px] lg:h-[470px] w-full overflow-hidden"
      >

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
            Blog
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl text-gray-300">
            Insights and Innovations in AI and Technology
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto py-12 px-6">
        <style jsx global>{`
          @property --border-angle {
            syntax: '<angle>';
            inherits: false;
            initial-value: 0deg;
          }

          .card-container {
            background: linear-gradient(45deg, #080b11, #1e293b 50%, #172033) padding-box,
                        conic-gradient(from var(--border-angle),
                          rgba(100, 116, 139, 0.48) 80%,
                          #8b5cf6 86%,
                          #a78bfa 90%,
                          #8b5cf6 94%,
                          rgba(100, 116, 139, 0.48)) border-box;
            border: 2px solid transparent;
            border-radius: 1rem;
            animation: borderRotate 4s linear infinite;
            overflow: hidden;
            height: 450px; /* Fixed height since no expansion */
          }

          @keyframes borderRotate {
            to {
              --border-angle: 360deg;
            }
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.03, y: -10 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="card-container"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-transparent transform transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white-900/60 to-transparent"></div>
                </div>

                <div className="border-none bg-transparent">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-white-900 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-white-700 mb-4">
                      {blog.excerpt}
                    </p>
                    <Link href={blog.link}>
                      <ButtonAnimatedGradient
                        text="Read More"
                        gradientFrom="#0f1747"
                        gradientTo="#0f1747"
                        borderColor="#b2b8f6"
                        className="w-full h-[40px] rounded-xl font-normal block"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}