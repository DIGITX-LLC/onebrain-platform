"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import OpenAIAchievement from "../about/OpenAIAchievement";

// Move mediaImages outside component to prevent re-creation on each render
// const mediaImages = [
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/1.png",
//     alt: "Achievement 1"
//   },
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/2.png",
//     alt: "Achievement 2"
//   },
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/4.png",
//     alt: "Achievement 4"
//   },
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/5.png",
//     alt: "Achievement 5"
//   },
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/6.png",
//     alt: "Achievement 6"
//   },
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/7.png",
//     alt: "Achievement 7"
//   },
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/8.png",
//     alt: "Achievement 8"
//   },
//   {
//     url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/9.png",
//     alt: "Achievement 9"
//   }
// ];
const mediaImages = [
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/1.webp",
    alt: "Achievement 1"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/2.webp",
    alt: "Achievement 2"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/4.webp",
    alt: "Achievement 4"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/5.webp",
    alt: "Achievement 5"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/6.webp",
    alt: "Achievement 6"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/7.webp",
    alt: "Achievement 7"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/8.webp",
    alt: "Achievement 8"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/onebrainweb/9.webp",
    alt: "Achievement 9"
  }
];

// Preload images function
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

const MediaGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create extended array for infinite loop effect
  const extendedImages = [
    ...mediaImages.slice(-3), // Last 3 images at the beginning
    ...mediaImages,           // Original images
    ...mediaImages.slice(0, 3) // First 3 images at the end
  ];

  const startIndex = 3; // Start from the real first image (after the duplicated last 3)

  // Preload images progressively
  useEffect(() => {
    const preloadImages = async () => {
      try {
        // First, preload the first 3 images (visible ones) with high priority
        const priorityImages = mediaImages.slice(0, 3);
        await Promise.all(priorityImages.map(img => preloadImage(img.url)));
        
        // Mark priority images as loaded
        setLoadedImages(prev => new Set([...prev, ...priorityImages.map(img => img.url)]));
        setIsInitialLoading(false);

        // Then preload remaining images in background
        const remainingImages = mediaImages.slice(3);
        remainingImages.forEach(async (img) => {
          try {
            await preloadImage(img.url);
            setLoadedImages(prev => new Set([...prev, img.url]));
          } catch (error) {
            console.warn(`Failed to preload image: ${img.url}`, error);
          }
        });
      } catch (error) {
        console.warn('Failed to preload priority images:', error);
        setIsInitialLoading(false);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // Initialize at the correct starting position
    setCurrentIndex(startIndex);
  }, []);

  useEffect(() => {
    // Only start auto-play after initial images are loaded
    if (isInitialLoading) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInitialLoading]);

  useEffect(() => {
    // Handle infinite loop reset without visible transition
    if (currentIndex >= extendedImages.length - 3) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(startIndex);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
    } else if (currentIndex < startIndex && currentIndex !== 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(mediaImages.length + startIndex - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, extendedImages.length, startIndex]);

  // Loading placeholder component
  const LoadingPlaceholder = ({ className }: { className?: string }) => (
    <div className={`animate-pulse bg-[#1A1B2E] border border-white/10 rounded-[2rem] flex items-center justify-center ${className}`}>
      <div className="text-gray-500 text-center">
        <div className="w-8 h-8 border-2 border-gray-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <div className="text-xs font-medium">Loading...</div>
      </div>
    </div>
  );

  if (isInitialLoading) {
    return (
      <section className="py-16 px-6 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Success & <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">Achievement</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Success and achievement embody the pursuit of goals through dedication and resilience, 
              reflecting personal growth and lasting impact.
            </p>
          </div>

          {/* Loading State */}
          <div className="relative flex items-center justify-center h-[400px]">
            <div className="relative">
              {/* Main loading placeholder */}
              <LoadingPlaceholder className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[340px] lg:h-[420px] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Success & <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">Achievement</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            OneBrain is the <span className="text-gray-200 font-medium">first-ever Bangladeshi AI startup</span> offering multi-LLM capabilities in a single platform. Our mission is to make advanced Artificial Intelligence <span className="text-gray-200 font-medium">affordable and accessible for everyone</span> in the nation. OneBrain is a proud product of <span className="text-white font-medium">DigitX LLC</span>, headquartered in New York, operating in the global tech market since <span className="text-white font-medium">2019</span> with offices in multiple countries beyond Bangladesh.
          </p>
        </div>

        {/* OpenAI Achievement - Top of Section */}
        <OpenAIAchievement />

        {/* Carousel Section */}
        <div className="relative">
          {/* Main Carousel Container with overlapping cards effect */}
          <div className="relative flex items-center justify-center h-[450px] md:h-[500px] perspective-1000">
            {/* Background cards for depth effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              {extendedImages.map((image, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                
                // Only show cards that are close to current
                if (absOffset > 2) return null;
                
                let transform = '';
                let zIndex = 0;
                let opacity = 0.3;
                let scale = 0.8;
                let filter = 'brightness(0.5) blur(4px)';
                
                if (offset === 0) {
                  // Current/active card
                  transform = 'translateX(0) translateZ(0) rotateY(0deg)';
                  zIndex = 30;
                  opacity = 1;
                  scale = 1;
                  filter = 'brightness(1) blur(0px)';
                } else if (offset === 1) {
                  // Next card (right)
                  transform = 'translateX(140px) translateZ(-50px) rotateY(-10deg)';
                  zIndex = 20;
                  opacity = 0.6;
                  scale = 0.85;
                  filter = 'brightness(0.6) blur(2px)';
                } else if (offset === -1) {
                  // Previous card (left)
                  transform = 'translateX(-140px) translateZ(-50px) rotateY(10deg)';
                  zIndex = 20;
                  opacity = 0.6;
                  scale = 0.85;
                  filter = 'brightness(0.6) blur(2px)';
                } else if (offset === 2) {
                  // Far right card
                  transform = 'translateX(240px) translateZ(-100px) rotateY(-20deg)';
                  zIndex = 10;
                  opacity = 0.3;
                  scale = 0.75;
                  filter = 'brightness(0.4) blur(4px)';
                } else if (offset === -2) {
                  // Far left card
                  transform = 'translateX(-240px) translateZ(-100px) rotateY(20deg)';
                  zIndex = 10;
                  opacity = 0.3;
                  scale = 0.75;
                  filter = 'brightness(0.4) blur(4px)';
                }

                const isImageLoaded = loadedImages.has(image.url);

                return (
                  <div
                    key={`${image.url}-${index}`}
                    className={`absolute ease-out transition-all duration-700`}
                    style={{
                      transform: `${transform} scale(${scale})`,
                      zIndex,
                      opacity,
                      filter
                    }}
                  >
                    <div className="relative w-[260px] h-[360px] md:w-[300px] md:h-[420px] lg:w-[320px] lg:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl bg-[#0F0F13] border border-white/10 group">
                      
                      {/* Glossy shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                      {!isImageLoaded ? (
                        <LoadingPlaceholder className="w-full h-full" />
                      ) : (
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700"
                          priority={absOffset === 0} // Only prioritize the current image
                          quality={90}
                          sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 340px"
                          onLoad={() => {
                            // Ensure image is marked as loaded even if preload didn't work
                            setLoadedImages(prev => new Set([...prev, image.url]));
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
