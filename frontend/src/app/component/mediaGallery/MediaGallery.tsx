"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Move mediaImages outside component to prevent re-creation on each render
const mediaImages = [
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/1.png",
    alt: "Achievement 1"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/2.png",
    alt: "Achievement 2"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/3.png",
    alt: "Achievement 3"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/4.png",
    alt: "Achievement 4"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/5.png",
    alt: "Achievement 5"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/6.png",
    alt: "Achievement 6"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/7.png",
    alt: "Achievement 7"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/8.png",
    alt: "Achievement 8"
  },
  {
    url: "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/acchivements/9.png",
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
    <div className={`animate-pulse bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center ${className}`}>
      <div className="text-gray-400 text-center">
        <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <div className="text-sm">Loading...</div>
      </div>
    </div>
  );

  if (isInitialLoading) {
    return (
      <section className="py-12 px-6 min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Success and Achievement
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Success and achievement embody the pursuit of goals through dedication and resilience, 
              reflecting personal growth and lasting impact.
            </p>
          </div>

          {/* Loading State */}
          <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div className="relative">
              {/* Main loading placeholder */}
              <LoadingPlaceholder className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[450px] shadow-2xl" />
              
              {/* Side loading placeholders */}
              <LoadingPlaceholder className="absolute top-2 -left-32 w-[240px] h-[300px] md:w-[280px] md:h-[350px] lg:w-[300px] lg:h-[380px] opacity-50 blur-sm" />
              <LoadingPlaceholder className="absolute top-2 -right-32 w-[240px] h-[300px] md:w-[280px] md:h-[350px] lg:w-[300px] lg:h-[380px] opacity-50 blur-sm" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6 min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Success and Achievement
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Success and achievement embody the pursuit of goals through dedication and resilience, 
            reflecting personal growth and lasting impact.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Main Carousel Container with overlapping cards effect */}
          <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
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
                let blur = 'blur-sm';
                
                if (offset === 0) {
                  // Current/active card
                  transform = 'translateX(0) translateY(0) rotateY(0deg)';
                  zIndex = 30;
                  opacity = 1;
                  scale = 1;
                  blur = '';
                } else if (offset === 1) {
                  // Next card (right)
                  transform = 'translateX(150px) translateY(15px) rotateY(-15deg)';
                  zIndex = 20;
                  opacity = 0.7;
                  scale = 0.9;
                  blur = 'blur-[1px]';
                } else if (offset === -1) {
                  // Previous card (left)
                  transform = 'translateX(-150px) translateY(15px) rotateY(15deg)';
                  zIndex = 20;
                  opacity = 0.7;
                  scale = 0.9;
                  blur = 'blur-[1px]';
                } else if (offset === 2) {
                  // Far right card
                  transform = 'translateX(250px) translateY(25px) rotateY(-25deg)';
                  zIndex = 10;
                  opacity = 0.4;
                  scale = 0.8;
                  blur = 'blur-sm';
                } else if (offset === -2) {
                  // Far left card
                  transform = 'translateX(-250px) translateY(25px) rotateY(25deg)';
                  zIndex = 10;
                  opacity = 0.4;
                  scale = 0.8;
                  blur = 'blur-sm';
                }

                const isImageLoaded = loadedImages.has(image.url);

                return (
                  <div
                    key={`${image.url}-${index}`}
                    className={`absolute ease-out ${blur} ${
                      isTransitioning ? 'transition-all duration-700' : ''
                    }`}
                    style={{
                      transform: `${transform} scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                  >
                    <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[450px] rounded-xl overflow-hidden shadow-2xl">
                      {!isImageLoaded ? (
                        <LoadingPlaceholder className="w-full h-full" />
                      ) : (
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-contain transition-transform duration-700"
                          priority={absOffset === 0} // Only prioritize the current image
                          quality={85} // Optimize quality vs size
                          sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
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