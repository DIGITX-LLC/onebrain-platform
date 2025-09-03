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

const MediaGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create extended array for infinite loop effect
  // Add copies at the beginning and end to create seamless loop
  const extendedImages = [
    ...mediaImages.slice(-3), // Last 3 images at the beginning
    ...mediaImages,           // Original images
    ...mediaImages.slice(0, 3) // First 3 images at the end
  ];

  const startIndex = 3; // Start from the real first image (after the duplicated last 3)

  useEffect(() => {
    // Initialize at the correct starting position
    setCurrentIndex(startIndex);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Handle infinite loop reset without visible transition
    if (currentIndex >= extendedImages.length - 3) {
      // When we reach the duplicated images at the end
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(startIndex);
        // Re-enable transition after reset
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700); // Wait for transition to complete
    } else if (currentIndex < startIndex && currentIndex !== 0) {
      // When we go before the real images (shouldn't happen in this auto-play, but safety)
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

  return (
    <section className="py-12 px-6 bg-black min-h-[80vh] flex items-center justify-center">
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
          <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
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
                  transform = 'translateX(250px) translateY(30px) rotateY(-25deg)';
                  zIndex = 10;
                  opacity = 0.4;
                  scale = 0.8;
                  blur = 'blur-sm';
                } else if (offset === -2) {
                  // Far left card
                  transform = 'translateX(-250px) translateY(30px) rotateY(25deg)';
                  zIndex = 10;
                  opacity = 0.4;
                  scale = 0.8;
                  blur = 'blur-sm';
                }

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
                    <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={Math.abs(offset) <= 1}
                      />
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