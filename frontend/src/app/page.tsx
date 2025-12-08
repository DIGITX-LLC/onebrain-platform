"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FaqSection from './component/about/FaqSection';
import AnimatedBeam from './component/about/AnimatedBeam';
import ButtonAnimatedGradient from './component/about/ButtonAnimatedGradient';
import PricingAbout from './component/about/PricingAbout';
import Vo3TrendingSection from './component/about/Vo3TrendingSection';
import DynamicButton from './component/about/DynamicButton';
import MobileCountdown from './component/about/MobileCountdown';
import MediaGallery from './component/mediaGallery/MediaGallery';
import UploadImage from "./component/uploadImage/uploadImage";
import ImageStudio from "./component/ImageStudio";
import AudioStudio from "./component/AudioStudio";
import ModernHeroOrbit from './component/ModernHeroOrbit';
import ComparisonSection from './component/ComparisonSection';
import BusinessSection from './component/BusinessSection';
import PaymentPartners from './component/PaymentPartners';
import Footer from './component/Footer';
import PersonalModels from './component/PersonalModels';
import AffiliateSection from './component/AffiliateSection';

// Update Card Component with optimized image loading
interface UpdateData {
  version: string;
  status: string;
  statusImage: string;
  image: string;
  features: string[];
}

const UpdateCard: React.FC<{ update: UpdateData; index: number }> = ({ update, index }) => {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [statusImageLoaded, setStatusImageLoaded] = useState(false);
  const [mainImageError, setMainImageError] = useState(false);
  const [statusImageError, setStatusImageError] = useState(false);

  return (
    <div
      className="relative p-8 rounded-3xl text-center shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 glass-card group overflow-hidden"
    >
      {/* Animated Border Wrapper */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="relative">
          {/* Main Image with Loading State */}
          <div className="mx-auto h-52 w-60 flex items-center justify-center">
            {!mainImageLoaded && !mainImageError && (
              <div className="animate-pulse bg-gray-700 h-52 w-60 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-sm">Loading...</div>
              </div>
            )}
            {mainImageError && (
              <div className="bg-gray-700 h-52 w-60 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-sm text-center">
                  <div className="mb-2">📊</div>
                  <div>Version {update.version}</div>
                </div>
              </div>
            )}
            <Image
              src={update.image}
              alt={`Version ${update.version} feature overview`}
              width={240}
              height={208}
              className={`mx-auto h-52 w-60 transition-opacity duration-300 ${mainImageLoaded ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              loading="lazy"
              onLoad={() => setMainImageLoaded(true)}
              onError={() => {
                setMainImageError(true);
                setMainImageLoaded(true);
              }}
              style={{ display: mainImageError ? 'none' : 'block' }}
            />
          </div>
        </div>

        <div className="mt-6 flex top-0 left-0 right-0">
          {/* Status Image with Loading State */}
          {!statusImageLoaded && !statusImageError && (
            <div className="animate-pulse bg-gray-700 h-6 w-20 rounded"></div>
          )}
          {statusImageError && (
            <div className="bg-gray-700 h-6 px-3 rounded flex items-center">
              <span className="text-xs text-gray-300">{update.status}</span>
            </div>
          )}
          <Image
            src={update.statusImage}
            alt={`${update.status} status badge`}
            width={80}
            height={24}
            className={`h-6 transition-opacity duration-300 ${statusImageLoaded ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            loading="lazy"
            onLoad={() => setStatusImageLoaded(true)}
            onError={() => {
              setStatusImageError(true);
              setStatusImageLoaded(true);
            }}
            style={{ display: statusImageError ? 'none' : 'block' }}
          />
        </div>

        <h3 className="text-2xl font-bold text-left mt-6">
          v {update.version}
        </h3>
        <ul className="mt-4 text-gray-300 text-sm text-left list-disc pl-0 space-y-2">
          {update.features.map((feature: string, i: number) => (
            <li key={i} className="ml-4">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Initialize responsive state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth >= 769 && window.innerWidth <= 1024);
    }
  }, []);

  // Added ambassadors state
  const [ambassadors, setAmbassadors] = useState([
    {
      name: "Ibrahim khan",
      university: "Barishal University",
      bio: "Passionate about community building and leadership.",
      profileImage:
        "https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif",
    },
    {
      name: "Arnab Biswas",
      university: "Khulna University",
      bio: "Passionate about community building and leadership.",
      profileImage:
        "https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif",
    },
    {
      name: "Shimanto Halder",
      university: "Jessore University",
      bio: "Passionate about community building and leadership.",
      profileImage:
        "https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif",
    },
    {
      name: "Priya Saha",
      university: "Rajshai University",
      bio: "Passionate about community building and leadership.",
      profileImage:
        "https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif",
    },
    {
      name: "Rabeya Khatun",
      university: "Dhaka University",
      bio: "Passionate about community building and leadership.",
      profileImage:
        "https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif",
    },
    {
      name: "Rabeya Boshri",
      university: "Chittagong University",
      bio: "Passionate about community building and leadership.",
      profileImage:
        "https://digitxevents.com/wp-content/uploads/2025/04/3d-avatar-cartoon-character_113255-103130.avif",
    },
  ]);
  // Duplicate for seamless loop
  const allAmbassadors = [...ambassadors, ...ambassadors];

  const logos = [
    { name: "ChatGPT", src: "/assets/chatgpt_slide.svg" },
    { name: "Claude", src: "/assets/clude_slide.svg" },
    { name: "Gemini", src: "/assets/gemini_slide.svg" },
    { name: "Grok", src: "/assets/grok_slide.svg" },
    { name: "DeepSeek", src: "/assets/deepski_slide.svg" },
    { name: "Llama", src: "/assets/lama_slide.svg" },
    { name: "DigitX AI", src: "/assets/dx_slide.svg" },
    { name: "Qwen", src: "/assets/about/Group-427323055.svg" },
    { name: "Perplexity", src: "/assets/about/Group-427323057.svg" },
    { name: "Mistral", src: "/assets/about/Group-427323058.svg" },
  ];

  const trustedBy = {
    google: {
      name: "Google",
      src: "https://digitxevents.com/wp-content/uploads/2025/02/google.svg",
    },
    amazon: {
      name: "Amazon",
      src: "https://digitxevents.com/wp-content/uploads/2025/02/Group-427321352.svg",
    },
    lama: {
      name: "Meta",
      src: "https://digitxevents.com/wp-content/uploads/2025/02/Group-427321351.svg",
    },
  };

  // Convert the object values to an array
  const logoArray = Object.values(logos);

  // Duplicate the array 3 times
  const allLogos = [
    ...logoArray,
    ...logoArray,
    ...logoArray,
    ...logoArray,
    ...logoArray,
  ];

  // Duplicate for seamless loop
  const allLogo = [...logos, ...logos];
  const trustedByArray = Object.values(trustedBy);
  
  // Active route function
  const isActiveRoute = (route: string) => {
    return pathname === route;
  };

  // Active section function
  const isActiveSection = (section: string) => {
    return activeSection === section;
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "featuresSection", name: "ai-models" },
        { id: "oneBrainPromoSection", name: "pricing" },
        { id: "updatesSection", name: "brain-upgrading-log" },
        { id: "mobileAppSection", name: "mobile-app" },
        { id: "faqSection", name: "contact-us" },
      ];

      const scrollPosition = window.scrollY + 100;
      let sectionFound = false;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            sectionFound = true;
            break;
          }
        }
      }

      // If no section is found (user is above all sections, like in hero), clear active section
      if (!sectionFound) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollAmount;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const updates = [
    {
      version: "1.5.7",
      status: "Released",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-released.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-released-image.svg",
      features: [
        "Gemini 3 Pro Preview: Deep reasoning, long-context understanding, precise instructions, coding, content generation, and complex workflows.",
        "OneBrain Memory Engine: Fully personal AI that remembers your preferences and learns from you across any LLM.",
        'Reimagined Website: Smarter, faster, and more intuitive browsing experience.',
    
      ],
    },
    {
      version: "1.5.8",
      status: "In Progress",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-inprogress.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-inprogress-image.svg",
      features: [
       "PixVerse 5.5 – Quick, stylized short clips.",
       "Kling O1 – Flexible, all-in-one video generation & editing.",
       "Runway Gen 4.5 – High-quality, realistic, production-ready videos.",
       "Package revised as per user request.",
      ],
    },
    {
      version: "2",
      status: "Planned",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-planned.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-planned-image.svg",
      features: [
        "Agentic Feather – Coming soon.",
        
      ],
    },
  ];


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: "smooth" });
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth >= 769 && window.innerWidth <= 1024);
      // Only close menu when switching to desktop view
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      // Don't close menu on scroll if we're programmatically scrolling or in mobile/tablet
      if (isOpen && !isScrolling && !(isMobile || isTablet)) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, isScrolling, isMobile, isTablet]);

  const toggleMenu = () => {
    console.log("Toggling menu - current:", isOpen, "showBurgerMenu:", showBurgerMenu);
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleRouteClick = (sectionId: string) => {
    console.log("Handling route click for:", sectionId);

    // Find the target element first
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Element with id "${sectionId}" not found.`);
      return;
    }

    // Start scrolling immediately without closing menu
    setIsScrolling(true);
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    // Close menu after scroll starts (no visual interruption)
    setTimeout(() => {
      setIsOpen(false);
    }, 100);

    // Reset scrolling flag after scroll completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const nodes: {
    ref: React.RefObject<HTMLDivElement | null>;
    icon: string;
    className: string;
  }[] = [
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/gpt_beam.svg",
        className: "top-[15%] left-[15%]",
      }, // Top-left
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/grok_beamanimation.svg",
        className: "top-[15%] right-[15%]",
      }, // Top-right
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/deepseek-color.svg",
        className: "center-right right-[15%]",
      }, // Middle-right
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/models/Anthropic Ai.svg",
        className: "bottom-[15%] left-[15%]",
      }, // Bottom-left
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/gemini-color.svg",
        className: "bottom-[15%] right-[15%]",
      }, // Bottom-right
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/meta.svg",
        className: "center-left left-[15%]",
      }, // Middle-left
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/models/qwen.svg",
        className: "center-left left-[15%]",
      }, // Middle-left
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/models/perplexity.svg",
        className: "center-left left-[15%]",
      }, // Middle-left
      {
        ref: useRef<HTMLDivElement>(null),
        icon: "/assets/models/mistral.svg",
        className: "center-left left-[15%]",
      }, // Middle-left
    ];

  const boxWrapper = useRef(null);
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };

  const showBurgerMenu = isMobile || isTablet;

  // Slider functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-navigation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update slider position when currentSlide changes
  useEffect(() => {
    const slider = document.getElementById('aiSlider');
    if (slider) {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);



  return (
    <div
      className="text-white min-h-screen relative selection:bg-blue-500/30"
    >
      {/* Navigation Header */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 px-2 sm:px-4 flex z-50 items-center justify-between w-[95%] sm:w-[95%] max-w-7xl transition-all duration-500 ease-in-out`}
        style={{
          top: isSticky ? "16px" : isMobile ? "20px" : "2rem",
        }}
      >
        <div className={`
          px-2 sm:px-4 py-3 flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-500 ease-in-out
          ${(isSticky || isMobile || isTablet) 
            ? "glass-card shadow-2xl shadow-black/50 bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10" 
            : "bg-transparent border border-transparent"}
        `}>


          {/* Logo - Always Left Corner */}
          <Link
            href="/"
            onClick={(e) => {
              setActiveSection("ai-models");
              window.scrollTo(0, 0);
            }}
            className="flex-shrink-0 z-10"
          >
            <Image
              src="/assets/oneBrainLogo.svg"
              alt="OneBrain Logo"
              width={200}
              height={40}
              className="h-6 w-[120px] pl-2 xs:h-7 xs:w-[140px] sm:h-8 sm:w-[160px] md:h-10 md:w-[200px]"
              id="index-0"
            />
          </Link>
          {showBurgerMenu && (
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-full transition-all duration-200 relative z-20 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        )}
          {/* Desktop Navigation - Middle */}
          {!showBurgerMenu && (
            <nav className="hidden md:flex items-center justify-center">
              <ul className={`flex items-center gap-1 lg:gap-2 rounded-full p-1 transition-all duration-300 ${
                (isSticky || isMobile || isTablet) 
                  ? "bg-transparent border-transparent" 
                  : "bg-white/5 border border-white/5 backdrop-blur-sm"
              }`}>
                {/* Navigation Links Helper */}
                {[
                  { name: "AI Models", id: "featuresSection", activeId: "ai-models" },
                  { name: "Pricing", id: "oneBrainPromoSection", activeId: "pricing" },
                  { name: "Updates", id: "updatesSection", activeId: "brain-upgrading-log" },
                  { name: "Contact Us", id: "faqSection", activeId: "contact-us" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                    onClick={(e) => {
                      e.preventDefault();
                        handleRouteClick(item.id);
                    }}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        isActiveSection(item.activeId)
                          ? "text-white bg-white/10 shadow-inner"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                      {item.name}
                    </button>
                  </li>
                ))}

                {/* Business Link */}
                <li>
                  <Link
                    href="/business"
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 block ${
                      isActiveRoute("/business")
                        ? "text-white bg-white/10 shadow-inner"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Business
                  </Link>
                </li>

                {/* Blog Link (Separate because it's a route) */}
                <li>
                  <Link
                    href="/blog"
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 block ${
                      isActiveRoute("/blog")
                        ? "text-white bg-white/10 shadow-inner"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Blog
                    </Link>
                  </li>
              </ul>

              {/* Sign In Button */}
              <div className="ml-4 pl-4 border-l border-white/10">
                <a 
                  href="https://ai.onebrain.app/login" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-[#1A1B2E] border border-blue-500/30 rounded-full hover:bg-[#232438] hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Sign In
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </nav>
          )}
        </div>

       

        {/* Mobile Dropdown Menu */}
        {showBurgerMenu && (
          <div
            className={`absolute top-full  right-0 mt-3 w-60 mx-3 sm:mx-4 transition-all duration-200 ease-in-out transform origin-top z-40 ${isOpen
              ? "opacity-100 scale-y-100 translate-y-0 visible"
              : "opacity-0 scale-y-95 -translate-y-2 invisible pointer-events-none"
              }`}
            style={{
              position: 'absolute',
              zIndex: 9999
            }}
          >
            <div className="bg-[#1a1f3a]/96 backdrop-blur-[20px] border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              <ul className="py-3">
                {/* AI Models */}
                <li className="px-5 py-1">
                  {isActiveSection("ai-models") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="AI Models"
                        size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer rounded-xl font-medium text-sm"
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("AI Models clicked");
                        handleRouteClick("featuresSection");
                      }}
                    >
                      AI Models
                    </button>
                  )}
                </li>

                {/* Pricing */}
                <li className="px-5 py-1">
                  {isActiveSection("pricing") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="Pricing"
                        size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer rounded-xl font-medium text-sm"
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Pricing clicked");
                        handleRouteClick("oneBrainPromoSection");
                      }}
                    >
                      Pricing
                    </button>
                  )}
                </li>

                {/* Updates */}
                <li className="px-5 py-1">
                  {isActiveSection("brain-upgrading-log") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="Updates"
                        size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer rounded-xl font-medium text-sm"
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Updates clicked");
                        handleRouteClick("updatesSection");
                      }}
                    >
                      Updates
                    </button>
                  )}
                </li>

                {/* Mobile App */}
                <li className="px-5 py-1">
                  {isActiveSection("mobile-app") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="Mobile App"
                        size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer rounded-xl font-medium text-sm"
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Mobile App clicked");
                        handleRouteClick("mobileAppSection");
                      }}
                    >
                      Mobile App
                    </button>
                  )}
                </li>

                {/* Business */}
                <li className="px-5 py-1">
                  {isActiveRoute("/business") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="Business"
                        size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                      />
                    </div>
                  ) : (
                    <Link
                      href="/business"
                      onClick={(e) => {
                        console.log("Business clicked");
                        setIsOpen(false);
                      }}
                      className="block w-full"
                    >
                      <span className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer rounded-xl font-medium text-sm block">
                        Business
                      </span>
                    </Link>
                  )}
                </li>

                {/* Blog */}
                <li className="px-5 py-1">
                  {isActiveRoute("/blog") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="Blog"
                        size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                      />
                    </div>
                  ) : (
                    <Link
                      href="/blog"
                      onClick={(e) => {
                        console.log("Blog clicked");
                        setIsOpen(false);
                      }}
                      className="block w-full"
                    >
                      <span className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer rounded-xl font-medium text-sm block">
                        Blog
                      </span>
                    </Link>
                  )}
                </li>

                {/* Contact Us */}
                <li className="px-5 py-1">
                  {isActiveSection("contact-us") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="Contact us"
                        size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer rounded-xl font-medium text-sm"
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Contact Us clicked");
                        handleRouteClick("faqSection");
                      }}
                    >
                      Contact Us
                    </button>
                  )}
                </li>

                {/* Divider */}
                <div className="h-px bg-white/20 mx-5 my-3"></div>

                {/* Sign In */}
                <li className="px-5 py-1">
                  <a
                    href="https://ai.onebrain.app/login"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      console.log("Sign-in clicked");
                      setIsOpen(false);
                    }}
                    className="group relative w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white transition-all duration-300 bg-[#1A1B2E] border border-blue-500/30 rounded-xl hover:bg-[#232438] hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Sign In
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="md:px-6 mx-auto">


        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center justify-items-center">
            
            {/* Left Side - Text Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start justify-center text-center md:text-left z-10 max-w-xl w-full order-2 md:order-1"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] text-xs font-medium text-gray-400 mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-500/80 mr-2 animate-pulse"></span>
                v1.5.7 Now Live
                    </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                <span className="text-gray-300 drop-shadow-md">All Top AI Models</span>
                <span className="block mt-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-700 text-transparent bg-clip-text pb-2 drop-shadow-sm">One Subscription</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg leading-relaxed font-light">
                Ideate with <span className="text-gray-400 font-medium">Chat</span> models, visualize with <span className="text-gray-400 font-medium">Image & Video</span> tools, and tell stories with <span className="text-gray-400 font-medium">Audio</span> generation. We bring all the latest AI you need for daily use into one platform. Save money by replacing multiple expensive subscriptions with one simple, affordable plan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <a
              href="https://ai.onebrain.app/login"
              rel="noopener noreferrer"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#1A1B2E] text-gray-200 border border-white/10 px-8 font-medium transition-all duration-300 hover:bg-[#232438] hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] focus:outline-none"
                >
                  <span className="mr-2">Get Started</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                
                <button 
                  onClick={() => scrollToSection("featuresSection")}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/5 bg-white/[0.03] px-8 font-medium text-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:text-gray-200 hover:border-white/10"
                >
                  Explore Models
                </button>
        </div>
            </motion.div>

            {/* Right Side - AI Circle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="flex items-center justify-center w-full order-1 md:order-2"
            >
               <ModernHeroOrbit />
            </motion.div>
        </div>
        </section>
        
        {/* Comparison Section */}
        <ComparisonSection />

        {/* Users Section (Universities, MNCs, Freelancers) */}
        <section
          className="py-16 md:py-20 container mx-auto relative"
        >
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              The Best Platform for <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">Students, <br /> AI Creators & Everyone</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto">
              Empowering <span className="text-gray-200 font-medium">students</span>, teachers, medical professionals, freelancers, and anyone who wants to adopt AI. OneBrain scales with you, from daily tasks to complex industry workflows.
            </p>

            {/* User Groups Ticker */}
            <div className="relative overflow-hidden mt-16 w-full">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030205] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030205] to-transparent z-10"></div>
              
              <div className="flex animate-infinite-scroll space-x-6 md:space-x-10 w-max">
                {[
                  // Universities
                  "BUET", "Dhaka University", "North South University", "BRAC University", "AUST", "IUT",
                  // Companies
                  "Grameenphone", "Robi", "Banglalink", "Pathao", "Bkash", "Samsung",
                  // Freelance/Global
                  "Upwork Top Rated", "Fiverr Pro", "Toptal"
                ].map((name, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center bg-[#1A1B2E]/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-300 group"
                  >
                    <span className="text-gray-400 font-medium text-sm md:text-base group-hover:text-gray-200 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
                 {/* Duplicate for smooth loop */}
                 {[
                  "BUET", "Dhaka University", "North South University", "BRAC University", "AUST", "IUT",
                  "Grameenphone", "Robi", "Banglalink", "Pathao", "Bkash", "Samsung",
                  "Upwork Top Rated", "Fiverr Pro", "Toptal"
                ].map((name, index) => (
                  <div 
                    key={`dup-${index}`} 
                    className="flex items-center justify-center bg-[#1A1B2E]/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-300 group"
                  >
                    <span className="text-gray-400 font-medium text-sm md:text-base group-hover:text-gray-200 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Header - Bridging Ticker and Feature Sections */}
        <div id="featuresSection" className="container mx-auto px-4 text-center pt-12 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-3 block">Unlimited Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Your All-in-One Creative Studio
          </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Switch seamlessly between the world's best AI models for writing, coding, and cinematic video generation.
            </p>
          </motion.div>
        </div>

        {/* Trending Section (Chat Capability) */}
        <section className="container py-6 md:py-12" id="vo3TrendingSection">
          <Vo3TrendingSection />
        </section>
        
        {/* Image Capability */}
        <section className="container py-6 md:py-12">
             <ImageStudio />
        </section>

        {/*  Sora / Video Capability */}
        <section className="container py-6 md:py-12">
             <UploadImage />
        </section>

        {/* Audio Capability */}
        <section className="container py-6 md:py-12">
             <AudioStudio />
        </section>

        {/* Personal Models Section */}
        <PersonalModels />
        
        {/* Pricing segment Section */}
        <section id="oneBrainPromoSection" className="py-16 md:py-20 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center justify-center gap-3">
              Be The AI <Image src="/assets/pro.svg" alt="pro" width={80} height={40} className="h-12 w-auto" />
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">Unlock premium features and access the most powerful AI models without limits.</p>
        </div>

          <PricingAbout
            topUpPlans={[]}
            currentPlan={null}
            location="bd"
            handleSelectPlan={(params) => console.log(params)}
          />
        </section>

        {/* Updates Section */}
        <section
          id="updatesSection"
          className="py-12 px-6 max-w-6xl mx-auto text-white container"
        >
          <h2 className="md:text-4xl text-3xl font-bold text-center mb-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 text-transparent bg-clip-text">
            Brain Upgrading Log
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <UpdateCard key={index} update={update} index={index} />
            ))}
          </div>
        </section>

        {/* Mobile App Countdown Section */}
        <div id="mobileAppSection" className="py-10 md:py-16 relative z-10">
          <MobileCountdown />
        </div>

        {/* FAQ Section */}
        <div>
          <FaqSection />
        </div>

        {/* Media Gallery Section */}
        <MediaGallery />

        {/* Payment Partner & Socials Section */}
        <PaymentPartners />

        {/* Footer Section */}
        <Footer />
      </div> </div>
  );
}
