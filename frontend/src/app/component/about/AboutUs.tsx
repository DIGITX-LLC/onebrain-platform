"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import FaqSection from "./FaqSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import PricingAbout from "./PricingAbout";
import Vo3TrendingSection from "./Vo3TrendingSection";
import DynamicButton from "./DynamicButton";
import Image from "next/image";
// import oneBrainLogo from "/oneBrainLogo.svg";
// import FacebookIcon from '/Frame.svg';
// import qwenAI from '/Group-427323055.svg';
// import mistralAI from '/Group-427323058.svg';
// import perplexityAI from '/Group-427323057.svg';

const tryPro = "/pro.svg";

// Define interface for update object
interface Update {
  version: string;
  status: string;
  statusImage: string;
  image: string;
  features: string[];
}

// Update Card Component with optimized image loading
const UpdateCard: React.FC<{ update: Update }> = ({ update }) => {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [statusImageLoaded, setStatusImageLoaded] = useState(false);
  const [mainImageError, setMainImageError] = useState(false);
  const [statusImageError, setStatusImageError] = useState(false);

  return (
    <div
      className="relative p-8 rounded-2xl text-center shadow-lg transition-transform transform hover:scale-105 border-2 border-[#656FE2] bg-gradient-to-b from-black to-[#0E1747]"
    >
      {/* Animated Border Wrapper */}
      <div className=" animate-border"></div>

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

export default function AboutUs() {
  const pathname = usePathname();
  // Add hydration state to prevent mismatches
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  // Added ambassadors state
  const [ambassadors, _setAmbassadors] = useState([
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
  const _allAmbassadors = [...ambassadors, ...ambassadors];

  const logos = [
    { name: "Qwen", src: "/Group-427323055.svg" },
    { name: "Perplexity", src: "/Group-427323057.svg" },
    { name: "Mistral", src: "/Group-427323058.svg" },
    { name: "OneBrain", src: "/oneBrainLogo.svg" },
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
      name: "Lama",
      src: "https://digitxevents.com/wp-content/uploads/2025/02/Group-427321351.svg",
    },
  };

  // Duplicate logos for seamless infinite scroll
  const _allLogo = [...logos, ...logos, ...logos, ...logos, ...logos];
  const trustedByArray = Object.values(trustedBy);
  // Active route function
  const isActiveRoute = (route: string) => {
    return pathname === route;
  };

  // Active section function
  const isActiveSection = (section: string) => {
    return activeSection === section;
  };

  // Update active section based on scroll position - only after hydration
  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return;

    const handleScroll = () => {
      const sections = [
        { id: "featuresSection", name: "ai-models" },
        { id: "oneBrainPromoSection", name: "pricing" },
        { id: "updatesSection", name: "brain-upgrading-log" },
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
  }, [isHydrated]);



  const updates = [
    {
      version: "1.4.6",
      status: "Released",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-released.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-released-image.svg",
      features: [
        "Kling latest image to video model v2.1 added.",
        "New AI Video generation model Seedance added.",
        "New Image editing model Kontext Pro Added.",
        "Chart & Diagram Visualization, Interaction, and Export Features added.",
      ],
    },
    {
      version: "1.4.7",
      status: "In Progress",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-inprogress.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-inprogress-image.svg",
      features: [
        "Pdf, xls & docs file creation and download option.",
        "Prompt regeneration and pagination for response.",
        "Boost up site performance with a new framework for better usability in any device.",
      ],
    },
    {
      version: "1.4.8",
      status: "Planned",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-planned.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-planned-image.svg",
      features: [
        "Midjourney image generation model added with dedicated UI.",
        "Voice Input to convert speech into text.",
        "Assistants API Integration for better memory management.",
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    if (typeof document === 'undefined') return;
    
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

  // Hydration effect - runs only on client
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return;

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

    // Initialize responsive states after hydration
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHydrated, isOpen, isScrolling, isMobile, isTablet]);

  const toggleMenu = () => {
    console.log("Toggling menu - current:", isOpen, "showBurgerMenu:", showBurgerMenu);
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleRouteClick = (sectionId: string) => {
    console.log("Handling route click for:", sectionId);

    if (typeof document === 'undefined') return;

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
    ref: React.RefObject<HTMLDivElement>;
    icon: string;
    className: string;
  }[] = [
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Gpt,
      //   className: "top-[15%] left-[15%]",
      // }, // Top-left
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Grok,
      //   className: "top-[15%] right-[15%]",
      // }, // Top-right
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Deepseek,
      //   className: "center-right right-[15%]",
      // }, // Middle-right
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Claude,
      //   className: "bottom-[15%] left-[15%]",
      // }, // Bottom-left
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Gemini,
      //   className: "bottom-[15%] right-[15%]",
      // }, // Bottom-right
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Meta,
      //   className: "center-left left-[15%]",
      // }, // Middle-left
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Qwen,
      //   className: "center-left left-[15%]",
      // }, // Middle-left
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Perplexity,
      //   className: "center-left left-[15%]",
      // }, // Middle-left
      // {
      //   ref: useRef<HTMLDivElement>(null),
      //   icon: Mistral,
      //   className: "center-left left-[15%]",
      // }, // Middle-left
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

  // Only show burger menu after hydration to prevent mismatch
  const showBurgerMenu = isHydrated && (isMobile || isTablet);

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

  // Auto-navigation effect - only after hydration
  useEffect(() => {
    if (!isHydrated) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  // Update slider position when currentSlide changes - only after hydration
  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return;
    
    const slider = document.getElementById('aiSlider');
    if (slider) {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [isHydrated, currentSlide]);

  return (
    <div
      className="bg-[#030205] text-white min-h-screen relative"
      style={{
        background: 'linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(240, 63%, 10%, 1) 95%, hsla(241, 61%, 26%, 1) 100%)'
      }}
      suppressHydrationWarning={true}
    >
      {/* Navigation Header */}
      <div
        className={`fixed  ${isSticky ? "" : "absolute"
          } left-1/2 transform -translate-x-1/2 px-2 sm:px-4  flex z-50  items-center justify-between w-[100%] sm:w-[95%] max-w-7xl transition-all duration-300`}
        style={{
          top: isSticky ? "8px" : isMobile ? "12px" : "1.5rem",
          transition: "top 0.3s ease-in-out",
        }}
      >
        <div className={`${(isSticky || isMobile || isTablet) ? "backdrop-blur-[10px] bg-white/5 border border-white/20 rounded-full" : ""} px-2 sm:px-4 py-2 flex items-center justify-between w-[98%] sm:w-[95%] max-w-7xl rounded-full transition-all duration-300`}>


          {/* Logo - Always Left Corner */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState("", "", "/about");
              window.scrollTo(0, 0);
              setActiveSection("ai-models");
            }}
            className="flex-shrink-0 z-10"
          >
            <Image
              src="/oneBrainLogo.svg"
              alt="OneBrain Logo"
              width={200}
              height={40}
              className="h-6 w-[120px] pl-2 xs:h-7 xs:w-[140px] sm:h-8 sm:w-[160px] md:h-10 md:w-[200px]"
              id="index-0"
            />
          </Link>
          {/* Show burger menu only after hydration and on mobile/tablet */}
        {showBurgerMenu && (
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 hover:bg-white/20 rounded-full transition-all duration-200 relative z-20 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        )}
          {/* Desktop Navigation - Middle - Show by default until hydrated, then conditionally */}
          {(!isHydrated || !showBurgerMenu) && (
            <nav className={`${isSticky ? ' ' : ' bg-white/5 border border-white/20'}  h-[40px] sm:h-[45px] flex items-center justify-center rounded-full transition-all duration-300`}>
              <ul className="flex items-center gap-1 xl:gap-2 text-gray-300 px-4">
                {/* AI Models */}
                {isActiveSection("ai-models") ? (
                  <li className="px-1 py-1">
                    <DynamicButton
                      label="AI Models"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
                  </li>
                ) : (
                  <li
                    className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("Route clicked");
                      handleRouteClick("featuresSection");
                    }}
                  >
                    <span className="text-sm">AI Models</span>
                  </li>
                )}

                {/* Pricing */}
                {isActiveSection("pricing") ? (
                  <li className="px-1 py-1">
                    <DynamicButton
                      label="Pricing"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
                  </li>
                ) : (
                  <li
                    className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("Route clicked");
                      handleRouteClick("oneBrainPromoSection");
                    }}
                  >
                    <span className="text-sm">Pricing</span>
                  </li>
                )}

                {/* Brain Upgrading Log */}
                {isActiveSection("brain-upgrading-log") ? (
                  <li className="px-1 py-1">
                    <DynamicButton
                      label="Brain Upgrading Log"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
                  </li>
                ) : (
                  <li
                    className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("Route clicked");
                      handleRouteClick("updatesSection");
                    }}
                  >
                    <span className="text-sm">Brain Upgrading Log</span>
                  </li>
                )}

                {/* Blog */}
                {isActiveRoute("/blog") ? (
                  <li className="px-1 py-1">
                    <DynamicButton
                      label="Blog"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
                  </li>
                ) : (
                  <li className="px-1 py-1">
                    <Link href="/blog">
                      <span className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10 text-sm block">
                        Blog
                      </span>
                    </Link>
                  </li>
                )}

                {/* Contact Us */}
                {isActiveSection("contact-us") ? (
                  <li className="px-1 py-1">
                    <DynamicButton
                      label="Contact us"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
                  </li>
                ) : (
                  <li
                    className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("Route clicked");
                      handleRouteClick("faqSection");
                    }}
                  >
                    <span className="text-sm">Contact Us</span>
                  </li>
                )}

                {/* Sign In */}
                <li className="px-1 py-1 ml-2">
                  <Link href="/login">
                    <DynamicButton
                      label="Sign-In"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>

       
 

        {/* Mobile Dropdown Menu - Only show after hydration */}
        {isHydrated && showBurgerMenu && (
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

                {/* Brain Upgrading Log */}
                <li className="px-5 py-1">
                  {isActiveSection("brain-upgrading-log") ? (
                    <div className="w-full">
                      <DynamicButton
                        label="Brain Upgrading Log"
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
                        console.log("Brain Upgrading Log clicked");
                        handleRouteClick("updatesSection");
                      }}
                    >
                      Brain Upgrading Log
                    </button>
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
                      onClick={(_e) => {
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
                  <Link
                    href="/login"
                    onClick={(_e) => {
                      console.log("Sign-in clicked");
                      setIsOpen(false);
                    }}
                    className="block w-full"
                  >
                    <DynamicButton
                      label="Sign-In"
                      size="w-full px-4 h-[45px] rounded-xl font-medium block text-sm"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative">
          <div className="container mx-auto">
          <div className="relative w-full h-[320px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex flex-col-reverse md:flex-row items-center justify-center md:gap-8 ">
            {/* Left Side - Text Section */}
            <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center md:text-left">
                <span className="text-white">Multiverse of</span>
                <span className="bg-gradient-to-r from-[#6a9cfb] to-[#b2d2ff] text-transparent bg-clip-text ml-[20px]">AI</span>
              </h1>
            </div>
            {/* Right Side - AI Circle (responsive) - Now appears above on mobile */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="relative w-[260px] h-[260px] xs:w-[280px] xs:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[340px] md:h-[340px]  2xl:w-[420px] 2xl:h-[420px]">
                {/* SVG for circle border and lines */}
                <svg viewBox="0 0 100 100" className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none">
                  <circle cx="50" cy="50" r="42" stroke="#7da6ff" strokeWidth=".5" fill="none" opacity="0.5" />
                </svg>
                {/* Central Logo */}
                <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center shadow-lg" >
                  <Image className=" xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] 2xl:w-[400px] 2xl:h-[400px] object-contain" src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/OpenAI_Playground_2025-05-06_at_12.09.18_1__1_-removebg-preview.png" alt="OneBrain" width={400} height={400} />
                </div>
                {/* 8 AI Icons in a circle with glow */}
                {[
                  { src: "/models/chatgpt-black.svg", alt: 'ChatGPT' },
                  { src: "/models/gemini.svg", alt: 'Gemini' },
                  { src: "/models/cloude-black.svg", alt: 'Claude' },
                  { src: "/models/deepseek.svg", alt: 'DeepSeek' },
                  { src: "/models/grok-black.svg", alt: 'Grok' },
                  { src: "/models/perplexity.svg", alt: 'Perplexity' },
                  { src: "/models/mistral.svg", alt: 'Mistral' },
                  { src: "/models/qwen.svg", alt: 'Qwen' },
                ].map((icon, i) => {
                  const angle = (i / 8) * 2 * Math.PI;
                  const r = 42; // Circle radius
                  const iconSize = 13; // Icon size percentage
                  const x = 50 + Math.cos(angle) * r;
                  const y = 50 + Math.sin(angle) * r;
                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `calc(${x}% - ${iconSize / 2}%)`,
                        top: `calc(${y}% - ${iconSize / 2}%)`,
                        width: `${iconSize}%`,
                        height: `${iconSize}%`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                      }}
                    >
                      {/* Glow */}
                      <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,255,255,.9) 60%, transparent 100%)',
                        filter: 'blur(2px)',
                        zIndex: 1,
                      }} />
                      {/* Icon */}
                      <Image src={icon.src} alt={icon.alt} width={32} height={32} style={{ width: '90%', height: '90%', position: 'relative', zIndex: 2, objectFit: 'contain' }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pointer-events-auto mt-10 md:mt-0 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <Link
              href="/login"
              className="inline-block  cursor-pointer touch-manipulation select-none"
              style={{
                position: "relative",

                pointerEvents: "auto",
                touchAction: "manipulation",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <DynamicButton
                label="Get Started"
                size="w-[120px] h-[45px] rounded-full font-normal block"
              />
            </Link>
          </div>
          </div>
        </section>

        {/* AI Model Library */}
        <section className="text-center text-white -mt-4 xs:-mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20">
          <div className="container mx-auto">
            <h2 className="text-3xl  mb-10 font-bold mb-">
              <span className="text-white">Explore </span>
              <span className="bg-gradient-to-r from-[#BA87FC] to-[#6BA2FB] text-transparent bg-clip-text">OneBrain</span>
            </h2>

            {/* AI Model Slider */}
            <div className="relative overflow-hidden rounded-2xl  ">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                id="aiSlider"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1 - AI Models */}
                <div className="w-full flex-shrink-0  ">
                  <div className="flex flex-col items-center">

                    <div className="w-full border-2 border-[#7da6ff]/80 rounded-xl">
                      {!imageErrors['ai-models'] ? (
                        <img
                          src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/explore-ai-models"
                          alt="AI Models"
                          className="w-full h-auto object-contain rounded-lg shadow-2xl"
                          onError={(e) => {
                            console.error('Failed to load AI Models image, showing placeholder...');
                            setImageErrors(prev => ({...prev, 'ai-models': true}));
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg">
                          <div className="text-center p-8">
                            <div className="text-6xl mb-4">🤖</div>
                            <h3 className="text-2xl font-bold text-white mb-2">AI Models</h3>
                            <p className="text-gray-400">Explore our collection of cutting-edge AI models</p>
                            <div className="flex justify-center gap-4 mt-6">
                              {['/models/chatgpt-black.svg', '/models/gemini.svg', '/models/cloude-black.svg', '/models/deepseek.svg'].map((icon, i) => (
                                <Image key={i} src={icon} alt="AI Model" width={32} height={32} className="w-8 h-8 opacity-60" />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Slide 2 - AI Tools */}
                <div className="w-full flex-shrink-0  ">
                  <div className="flex flex-col items-center">

                    <div className="w-full ">
                      {!imageErrors['ai-tools'] ? (
                        <img
                          src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/explore-tools-model"
                          alt="AI Tools"
                          className="w-full h-auto object-contain rounded-lg shadow-2xl"
                          onError={(e) => {
                            console.error('Failed to load AI Tools image, showing placeholder...');
                            setImageErrors(prev => ({...prev, 'ai-tools': true}));
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg">
                          <div className="text-center p-8">
                            <div className="text-6xl mb-4">🛠️</div>
                            <h3 className="text-2xl font-bold text-white mb-2">AI Tools</h3>
                            <p className="text-gray-400">Discover powerful AI-driven tools and utilities</p>
                            <div className="flex justify-center gap-4 mt-6">
                              {['/models/ImageX.png', '/models/SpeechAI.svg', '/models/Humanizer.svg', '/models/vGen-ai_tools.svg'].map((icon, i) => (
                                <Image key={i} src={icon} alt="AI Tool" width={32} height={32} className="w-8 h-8 opacity-60" />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-5 mb-8">
                {[0, 1].map((index) => (
                  <span
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full bg-neutral-800 inline-block transition-colors duration-300 mx-0.5 cursor-pointer overflow-hidden`}
                    style={
                      currentSlide === index
                        ? {
                          width: '2rem',
                          background: 'linear-gradient(90deg, hsla(266, 95%, 76%, 1) 0%, hsla(217, 95%, 70%, 1) 75%)',
                          transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s cubic-bezier(0.4,0,0.2,1)'
                        }
                        : { width: '0.5rem' }
                    }
                  />
                ))}
              </div>

              {/* Navigation Arrows */}

            </div>
          </div>
        </section>
        {/* Trending Section */}
        <div className="py-16" id="vo3TrendingSection">
          <div className="container mx-auto">
            <Vo3TrendingSection />
          </div>
        </div>
        {/* Features Section */}
        <section
          id="featuresSection"
          className="py-16 relative"
        >
          <div className="container mx-auto">
            <div className="py-6 rounded-lg text-center">
              <h2 className="md:text-4xl text-xxl font-semibold text-white">
                Revolutionizing the workflow for thousands of users
              </h2>
              <p className="text-gray text-2xl mt-2 mb-8">Powered by</p>

              {/* Logo Slider */}
              <div className="relative overflow-hidden mt-6 w-full">
                <div className="flex animate-infinite-scroll space-x-10">
                  {_allLogo.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={40}
                      className="h-10 w-auto flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing segment Section */}
        <div className="py-16">
          <div className="container mx-auto">
            <h2 className="md:text-4xl text-2xl text-white text-center flex items-center justify-center gap-2 mb-10">
              Be The AI <img src={tryPro} alt="pro" className="w-16 h-16" /> 
            </h2>
            <div id="oneBrainPromoSection">
              <PricingAbout
                topUpPlans={[]}
                currentPlan={null}
                location="bd"
                handleSelectPlan={(params) => console.log(params)}
              />
            </div>
          </div>
        </div>

        {/* Updates Section */}
        <section
          id="updatesSection"
          className="py-16 text-white"
        >
          <div className="container mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">
            Brain Upgrading Log
          </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {updates.map((update, index) => (
                <UpdateCard key={index} update={update} />
              ))}
            </div>
          </div>
        </section>

        {/* join comunity Section */}
        <div className="py-16">
          <div className="container mx-auto">
            <div className="flex justify-center items-center gap-4">
              <a
                href="https://facebook.com/groups/2238159246577852/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3  text-lg  bg-[linear-gradient(360deg,_hsla(235,68%,64%,1)_0%,_hsla(240,100%,27%,1)_73%)] border border-[#656FE2] text-white rounded-full font-medium shadow-md focus:outline-none"
              >
                Join Facebook community
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Campus Ambassador Section 
<section id="campusAmbassadorSection" className="py-16 px-6 max-w-6xl mx-auto relative">
        <div className="p-6 rounded-lg text-center">
          <h2 className="md:text-4xl text-xxl font-semibold text-white">
            Our Campus Ambassadors
          </h2>
          <p className="text-gray text-2xl mt-2 mb-8">Built by Students, For the Students</p>

          Ambassador Slider
          <div className="relative overflow-hidden mt-6 w-full">
            <div className="flex w-max animate-infinite-scroll space-x-10">
              {ambassadors.map((ambassador, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="card-container w-80"
                >
                  <div className="bg-transparent text-white-800 shadow-lg rounded-lg p-6 flex items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="flex-1 flex flex-col items-center text-center"
                    >
                      <motion.img
                        src={ambassador.profileImage}
                        alt={ambassador.name}
                        className="w-40 h-40 rounded-full border-4 border-blue-500 mb-4"
                        whileHover={{ scale: 1.1 }}
                      />
                      <h2 className="text-2xl font-bold">{ambassador.name}</h2>
                      <p className="text-lg text-white-600 font-semibold">{ambassador.university}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

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
        <div className="flex justify-center items-center gap-4">
  <Link
    href="/ambassador"
    className="flex mt-5 items-center px-8 py-3 text-white text-lg font-medium bg-[#0F1248] border border-[#7077C0] rounded-lg transition-all duration-300 hover:bg-[#191D60] hover:shadow-lg"
  >
    Explore
    <ArrowUpRight size={20} />
  </Link>
</div>
      </section>
              {/* Partners Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="md:text-4xl text-xxl font-300 text-center mb-12">
              Trusted by outstanding teams worldwide
            </h2>
            <div className="relative overflow-hidden mt-6 w-full flex justify-center">
              <div className="flex animate-infinite-scroll space-x-10">
                {[...trustedByArray, ...trustedByArray, ...trustedByArray].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className="h-10 w-auto flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <div className="py-16">
          <div className="container mx-auto">
            <FaqSection />
          </div>
        </div>

        {/* Payment Partner section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="md:text-4xl text-xxl font-bold text-center mb-12">
              Payment Partners
            </h2>
            <div className="relative overflow-hidden mt-6 w-full">
              <Image
                src="/payment_partner.svg"
                alt="Payment Partners"
                width={1200}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* social media section */}
        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-center">
              <h2 className="text-base font-semibold text-white mr-10">
                Follow Us
              </h2>
              <div className="flex items-center gap-4 ">
                  <a
                    href="https://facebook.com/groups/2238159246577852/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Frame.svg"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="https://wa.me/8801988121220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
        </section>

        {/* Footer Section */}
        <footer className="py-16 relative text-white">
          <div className="container mx-auto">
            {/* Spotlight Effect */}
            <div
              onMouseMove={handleMouseMove}
              ref={boxWrapper}
              className="group relative rounded-lg  overflow-hidden w-full mx-auto"
            >
            <div
              className="pointer-events-none absolute opacity-0 z-50 rounded-lg w-full h-full group-hover:opacity-100 transition duration-300"
              style={{
                background: `
              radial-gradient(
                250px circle at ${overlayColor.x}px ${overlayColor.y}px,
                rgba(255, 255, 255, 0.137),
                transparent 80%
              )
            `,
              }}
            />

            <div className="border-t border-[#F1F3F414] pt-10 flex flex-col md:flex-row justify-between items-start text-white">
              {/* Left Section - Branding */}
              <div>
                {/* Logo */}
                {/* <img
                  src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
                  alt="OneBrain Logo"
                  className="w-40"
                /> */}

                {/* Tagline */}
                <Image
                  src="https://digitxevents.com/wp-content/uploads/2025/07/Multiverse-of-AI.svg"
                  alt="Multiverse of AI"
                  width={200}
                  height={24}
                  className="mt-1 h-6 w-auto"
                />

                {/* Contact */}
                <div className="relative">
                  <p className="text-white mt-2">Contact: +880 1988121220</p>
                </div>

                {/* Address */}
                <p className="text-white text-sm">
                  Level 8, MTB Building, Software Technology Park,
                </p>
                <p className="text-white text-sm">Jashore-7400, Bangladesh</p>

                {/* Copyright */}
                <p className="text-sm text-white mt-2 flex items-center gap-1">
                  © 2025 <span>OneBr<span style={{ color: '#3FBFF4' }}>ai</span>n</span> By
                  <a
                    href="https://digitxgroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://digitxevents.com/wp-content/uploads/2025/07/digitx_logo.png"
                      alt="DIGITX"
                      width={80}
                      height={16}
                      className="h-4 w-auto inline-block"
                    />
                  </a>
                </p>

                {/* Social Icons */}
                {/* <div className="flex items-center gap-4 mt-3">
                  <a
                    href="https://facebook.com/groups/2238159246577852/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Facebook"
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="https://wa.me/8801988121220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  </a>
                </div> */}
              </div>

              {/* Center Section - Product */}
              <div className="mt-6 md:mt-0">
                <h4 className="text-[#60A5FA] font-normal">Product</h4>
                <ul className="text-white mt-2 space-y-1">
                  <li>
                    <button
                      onClick={() => scrollToSection("vo3TrendingSection")}
                      className="hover:text-white transition text-left"
                    >
                      What&apos;s New
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("oneBrainPromoSection")}
                      className="hover:text-white transition text-left"
                    >
                      Pricing and Plans
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("updatesSection")}
                      className="hover:text-white transition text-left"
                    >
                      Features Overview
                    </button>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-white transition"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Right Section - Company */}
              <div className="mt-6 md:mt-0">
                <h4 className="text-[#60A5FA] font-normal">Company</h4>
                <ul className="text-white mt-2 space-y-1">
                  <li>
                    <button
                      onClick={() => scrollToSection("faqSection")}
                      className="hover:text-white transition text-left"
                    >
                      FAQ
                    </button>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-white transition">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:text-white transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("faqSection")}
                      className="hover:text-white transition text-left"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </footer>
    </div>
  );
}
