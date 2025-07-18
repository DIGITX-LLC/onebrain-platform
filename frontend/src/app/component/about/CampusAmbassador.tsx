"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, animate, useMotionValue, useMotionTemplate } from 'framer-motion';


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function CampusAmbassador() {
    const [formData1, setFormData1] = useState({
        name: 'John Doe',
        university: 'Harvard University',
        bio: 'Passionate about community building and leadership.',
        profileImage: 'https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif',
    });
    const [formData2, setFormData2] = useState({
        name: 'Jane Smith',
        university: 'Stanford University',
        bio: 'Interested in tech innovation and entrepreneurship.',
        profileImage: 'https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif',
    });
    const [formData3, setFormData3] = useState({
        name: 'David Lee',
        university: 'MIT',
        bio: 'Focused on AI research and its applications.',
        profileImage: 'https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif',
        // linkedin: 'https://linkedin.com/in/davidlee'
    });


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

    // Determine if the burger menu should be shown based on screen size
    useEffect(() => {
        const handleResize = () => {
            setShowBurgerMenu(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        // Set initial state
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, rgba(2,6,23,0.5) 50%, ${color})`;

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const ButtonAnimatedGradient = ({ text, gradientFrom, gradientTo, borderColor, className }) => (
        <button
            className={className}
            style={{
                background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
                border: `1px solid ${borderColor}`
            }}
        >
            {text}
        </button>
    );

    // Remove custom Link component - using Next.js Link instead

    const X = ({ size }) => <span style={{ fontSize: size }}>X</span>;
    const Menu = ({ size }) => <span style={{ fontSize: size }}>☰</span>;

    // State to hold the previous scroll position
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Determine if scrolling up or down
            const isScrollingUp = prevScrollPos > currentScrollPos;

            // Update the sticky state based on scroll direction
            setIsSticky(currentScrollPos > 0); // Adjust scroll threshold as needed

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className="min-h-screen flex flex-col items-center pb-10 text-white bg-[#030205] relative hero-space">
            {/* Navbar */}
            <nav
                className={`fixed top-0 mt-5 left-1/2 transform -translate-x-1/2 border border-gray-700 rounded-full px-4 py-2 flex items-center justify-between w-[85%] max-w-3xl z-20 transition-all duration-300
          ${isSticky
                        ? "bg-white/10 backdrop-blur-[7px] shadow-lg"
                        : "bg-transparent"
                    }`}
            >
                <img
                    src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
                    alt="OneBrain Logo"
                    className="h-6"
                />
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
                        ? `absolute top-full right-0 w-60 flex-col items-start py-4 border border-gray-300 shadow-lg text-white font-bold rounded-lg ${isOpen ? "flex" : "hidden"} ${isOpen
                            ? "bg-white/10 backdrop-blur-[7px]"
                            : "hidden bg-transparent"
                        }`
                        : "flex gap-2 text-gray-300"
                        }`}

                >
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
                            onClick={closeMenu}
                        >
                            AI Models
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
                            onClick={closeMenu}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
                            onClick={closeMenu}
                        >
                            Brain Upgrading Log
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-gray-600 cursor-pointer px-2 py-2 block"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
                {!showBurgerMenu && (
                    <Link href="/login">
                        <ButtonAnimatedGradient
                            text="Get Started"
                            gradientFrom="#0f1747"
                            gradientTo="#0f1747"
                            borderColor="#b2b8f6"
                            className="w-[135px] h-[40px] rounded-full font-normal block"
                        />
                    </Link>
                )}
            </nav>

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
          border-radius: 0.5rem;
          animation: borderRotate 4s linear infinite;
        }

        @keyframes borderRotate {
          to {
            --border-angle: 360deg;
          }
        }
      `}</style>

            {/* Cover Image Section */}
            <motion.div
                style={{
                    backgroundImage,
                }}
                className="relative h-[300px] md:h-[400px] lg:h-[400px] w-full overflow-hidden"
            >
                {/* Content on top of image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-3xl md:text-6xl lg:text-6xl font-extrabold text-white mb-4">
                        Campus Ambassador's
                    </h1>
                    <p className="text-sm md:text-2xl lg:text-2xl text-gray-300 mt-5">
                        Build by students, For the Students
                    </p>
                </div>
            </motion.div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-6 p-5 md:p-0">

                {/* Combined Hero Section 1 & Info Section 1 */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Hero Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="card-container w-full"
                    >
                        <div className="bg-transparent text-white-800 shadow-lg rounded-lg p-6 flex items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="flex-1 flex flex-col items-center text-center"
                            >
                                <motion.img
                                    src={formData1.profileImage}
                                    alt="Profile"
                                    className="w-40 h-40 rounded-full border-4 border-blue-500 mb-4"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <h2 className="text-3xl font-bold">{formData1.name}</h2>
                                <p className="text-lg text-white-600 font-semibold">{formData1.university}</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Info Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                        className="card-container w-full"
                    >
                        <div className="bg-transparent text-white-800 shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-2 text-center">
                                <span className='campusam'>OneBrain</span> Campus Ambassador
                            </h3>
                            <p className="text-center mb-4">{formData1.bio}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Combined Hero Section 2 & Info Section 2 */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Hero Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="card-container w-full"
                    >
                        <div className="bg-transparent text-white-800 shadow-lg rounded-lg p-6 flex items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="flex-1 flex flex-col items-center text-center"
                            >
                                <motion.img
                                    src={formData2.profileImage}
                                    alt="Profile"
                                    className="w-40 h-40 rounded-full border-4 border-blue-500 mb-4"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <h2 className="text-3xl font-bold">{formData2.name}</h2>
                                <p className="text-lg text-white-600 font-semibold">{formData2.university}</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Info Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                        className="card-container w-full"
                    >
                        <div className="bg-transparent text-white-800 shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-2 text-center">
                                <span className='campusam'>OneBrain</span> Campus Ambassador
                            </h3>
                            <p className="text-center mb-4">{formData2.bio}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Combined Hero Section 3 & Info Section 3 */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Hero Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="card-container w-full"
                    >
                        <div className="bg-transparent text-white-800 shadow-lg rounded-lg p-6 flex items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="flex-1 flex flex-col items-center text-center"
                            >
                                <motion.img
                                    src={formData3.profileImage}
                                    alt="Profile"
                                    className="w-40 h-40 rounded-full border-4 border-blue-500 mb-4"
                                    whileHover={{ scale: 1.1 }}
                                />
                                <h2 className="text-3xl font-bold">{formData3.name}</h2>
                                <p className="text-lg text-white-600 font-semibold">{formData3.university}</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Info Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                        className="card-container w-full"
                    >
                        <div className="bg-transparent text-white-800 shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-2 text-center">
                                <span className='campusam'>OneBrain</span> Campus Ambassador
                            </h3>
                            <p className="text-center mb-4">{formData3.bio}</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}