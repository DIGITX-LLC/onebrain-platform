"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FaqSection from '../component/about/FaqSection';
import AnimatedBeam from '../component/about/AnimatedBeam';
import ButtonAnimatedGradient from '../component/about/ButtonAnimatedGradient';
import PricingAbout from '../component/about/PricingAbout';
import Vo3TrendingSection from '../component/about/Vo3TrendingSection';
import DynamicButton from '../component/about/DynamicButton';
import MobileCountdown from '../component/about/MobileCountdown';

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

export default function AboutPage() {
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
      name: "Lama",
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
      version: "1.5",
      status: "Released",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-released.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-released-image.svg",
      features: [
        "Experience OneBrain Reimagined version: Enhanced UI colors for better visibility.",
        "Simplified sidenav menu for faster access to AI models & tools.",
        "Organized categories for Image, Video & Audio models.",
        "New Canvas view with code & large response preview.",
        "Upgraded site for smoother, faster performance on all devices.",
      ],
    },
    {
      version: "1.5.1",
      status: "In Progress",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-inprogress.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-inprogress-image.svg",
      features: [
        "Advanced Web Search for real-time data scrap from the internet.",
        "New Thinking Mode to display the model's reasoning process.",
        "Memory capability added to all models for long-term response recall.",
      ],
    },
    {
      version: "1.5.2",
      status: "Planned",
      statusImage:
        "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-planned.svg",
      image: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/about-page-version-planned-image.svg",
      features: [
        "Create, edit & download PDF, XLS & DOC files.",
        "New budget-friendly video model in the Creator package.",
        "Affordable Google-powered image model added.",
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
      className="bg-[#030205] text-white min-h-screen relative"
      style={{
        background: 'linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(240, 63%, 10%, 1) 95%, hsla(241, 61%, 26%, 1) 100%)'
      }}
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
            className="text-white focus:outline-none p-2 hover:bg-white/20 rounded-full transition-all duration-200 relative z-20 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        )}
          {/* Desktop Navigation - Middle */}
          {!showBurgerMenu && (
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
                  <Link href="https://ai.onebrain.app/login">
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
                  <Link
                    href="https://ai.onebrain.app/login"
                    onClick={(e) => {
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
      <div className="md:px-6 mx-auto">


        {/* Hero Section */}
        <section className="min-h-screen container flex flex-col items-center justify-center text-center bg-cover bg-center relative">
          <div className="relative w-full h-[320px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] flex flex-col-reverse md:flex-row items-center justify-center px-4 md:gap-8 ">
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
                  <Image 
                    className=" xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] 2xl:w-[400px] 2xl:h-[400px] object-contain" 
                    src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/OpenAI_Playground_2025-05-06_at_12.09.18_1__1_-removebg-preview.png" 
                    alt="OneBrain"
                    width={400}
                    height={400}
                  />
                </div>
                {/* 8 AI Icons in a circle with glow */}
                {[
                  { src: "/assets/meta.svg", alt: 'Meta' },
                  { src: "/assets/grok_beamanimation.svg", alt: 'Grok' },
                  { src: "/assets/deepseek-color.svg", alt: 'Deepseek' },
                  { src: "/assets/models/Anthropic Ai.svg", alt: 'Claude' },
                  { src: "/assets/models/qwen.svg", alt: 'Qwen' },
                  { src: "/assets/gemini-color.svg", alt: 'Gemini' },
                  { src: "/assets/gpt_beam.svg", alt: 'GPT' },
                  { src: "/assets/models/perplexity.svg", alt: 'Perplexity' },
                  { src: "/assets/models/mistral.svg", alt: 'Mistral' },
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
                      <Image src={icon.src} alt={icon.alt} width={40} height={40} style={{ width: '90%', height: '90%', position: 'relative', zIndex: 2, objectFit: 'contain' }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pointer-events-auto mt-10 md:mt-0 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            <Link
              href="https://ai.onebrain.app/login"
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
        </section>

        {/* Mobile App Countdown Section */}
        <MobileCountdown />

        {/* Trending Section */}
        <div className="container" id="vo3TrendingSection">
          <Vo3TrendingSection />
        </div>
        {/* Features Section */}
        <section
          id="featuresSection"
          className="py-16 px-6   mx-auto relative container"
        >
          <div className="py-6 rounded-lg text-center">
            <h2 className="md:text-4xl text-xxl font-semibold text-white">
              Revolutionizing the workflow for thousands of users
            </h2>
            <p className="text-gray text-2xl mt-2 mb-8">Powered by</p>

            {/* Logo Slider */}
            <div className="relative overflow-hidden mt-6 w-full container">
              <div className="flex w-max animate-infinite-scroll space-x-10">
                {allLogo.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.name}
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing segment Section */}
        <div className="">
          <h2 className="md:text-4xl text-2xl   text-white text-center flex items-center justify-center gap-2">
            Be The AI <Image src="/assets/pro.svg" alt="pro" width={64} height={64} className="w-16 h-16" />
          </h2>

        </div>
        <div id="oneBrainPromoSection" className="mt-10">
          <PricingAbout

            topUpPlans={[]}
            currentPlan={null}
            location="bd"
            handleSelectPlan={(params) => console.log(params)}
          />
        </div>

        {/* Updates Section */}
        <section
          id="updatesSection"
          className="py-16 px-6 max-w-6xl mx-auto text-white container"
        >
          <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">
            Brain Upgrading Log
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <UpdateCard key={index} update={update} index={index} />
            ))}
          </div>
        </section>

        {/* join comunity Section */}
        <div className="flex justify-center items-center gap-4 container">
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

        {/* Partners Section */}
        <section className="py-16 px-6 container mx-auto ">
          <h2 className="md:text-4xl text-xxl font-300 text-center mb-12 ">
            Trusted by outstanding teams worldwide
          </h2>
          <div className="relative overflow-hidden mt-6 w-full">
            <div
              ref={scrollRef}
              className="  overflow-hidden flex  justify-center items-center  space-x-10 whitespace-nowrap"
            >
              {trustedByArray.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              ))}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <div>
          <FaqSection />
        </div>

        {/* Payment Partner section */}
        <section className="py-8 px-6 container md:mb-10">
          <h2 className="md:text-4xl text-xxl font-bold text-center mb-12">
            Payment Partners
          </h2>
          <div className="relative overflow-hidden md:mt-6 w-full">
            <Image src="/assets/payment_partner.svg" alt="partner logo" width={1200} height={300} className="w-full" />
          </div>
        </section>

        {/* social media section */}
        <section className=" flex container items-center">
          <h2 className="text-base font-semibold text-white mr-5">
            Follow Us
          </h2>
          <div className="">
            <div className="flex items-center gap-4 ">
              <a
                href="https://facebook.com/groups/2238159246577852/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/about/Frame.svg"
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
                  src="/assets/Frame (3).svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-10 px-6 relative text-white">
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

            <div className="container mx-auto border-t border-[#F1F3F414] pt-10 flex flex-col md:flex-row justify-between items-start text-white">
              {/* Left Section - Branding */}
              <div>
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
                      width={60}
                      height={16}
                      className="h-4 w-auto inline-block"
                    />
                  </a>
                </p>
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
                    <a href="https://ai.onebrain.app/terms" className="hover:text-white transition">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ai.onebrain.app/privacy-policy"
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

        </footer>
      </div> </div>
  );
} 