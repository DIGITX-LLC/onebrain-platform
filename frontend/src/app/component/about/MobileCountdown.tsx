import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileCountdown() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // Mobile app image loading state
  const [mobileAppImageLoaded, setMobileAppImageLoaded] = useState(false);
  const [mobileAppImageError, setMobileAppImageError] = useState(false);

  // Set initial loading state
  useEffect(() => {
    setMobileAppImageLoaded(false);
  }, []);

  // Don't render countdown until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <section className="py-16 px-6 mx-auto relative container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Get Ready to Experience the Future </span>
              <span className="bg-gradient-to-r from-[#6a9cfb] to-[#b2d2ff] text-transparent bg-clip-text">of Creation</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              We&apos;re counting down to the Early Access launch. Be the first to experience it.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Mobile Image - Only visible on mobile, positioned above content */}
            <div className="flex-1 flex justify-center lg:hidden order-1">
              <div className="relative max-w-sm w-full">
                <div className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center animate-pulse">
                  <div className="text-gray-400 text-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    <div className="text-sm">Loading...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Store Section */}
            <div className="flex-1 flex items-center justify-center order-2">
              <div className="w-full text-center">
                <h3 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
                  <span className="bg-gradient-to-r from-[#6a9cfb] to-[#b2d2ff] text-transparent bg-clip-text">
                    Download Our Mobile App
                  </span>
                </h3>
                <div className="flex justify-center w-full mt-4">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.onebrain" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-105 inline-block"
                    aria-label="Get it on Google Play"
                  >
                    <Image
                      src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/playstore.svg"
                      alt="Get it on Google Play"
                      width={240}
                      height={80}
                      className="h-20 md:h-24 w-auto object-contain"
                      priority={false}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Desktop/Tablet Image */}
            <div className="hidden lg:flex flex-1 justify-center lg:justify-end order-3">
              <div className="relative max-w-lg w-full">
                <div className="w-full h-96 bg-gray-800/50 rounded-lg flex items-center justify-center animate-pulse">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <div>Loading...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 mx-auto relative container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-white">Get Ready to Experience the Future </span>
            <span className="bg-gradient-to-r from-[#6a9cfb] to-[#b2d2ff] text-transparent bg-clip-text">of Creation</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            We&apos;re counting down to the Early Access launch. Be the first to experience it.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Mobile Image - Only visible on mobile, positioned above content */}
          <div className="flex-1 flex justify-center lg:hidden order-1">
            <div className="relative max-w-sm w-full">
              {/* Loading placeholder */}
              {!mobileAppImageLoaded && !mobileAppImageError && (
                <div className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center animate-pulse">
                  <div className="text-gray-400 text-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    <div className="text-sm">Loading Mobile App Preview...</div>
                  </div>
                </div>
              )}
              
              {/* Error fallback */}
              {mobileAppImageError && (
                <div className="w-full h-80 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-3xl mb-3">📱</div>
                    <div className="text-sm">Mobile App Preview</div>
                    <div className="text-xs">Coming Soon</div>
                  </div>
                </div>
              )}
              
              {/* Actual image */}
              <Image
                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/mobile%20app.png"
                alt="OneBrain Mobile App"
                width={400}
                height={800}
                className={`w-full h-auto object-contain transition-opacity duration-500 ${
                  mobileAppImageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                priority={true}
                onLoadingComplete={() => setMobileAppImageLoaded(true)}
                onError={() => setMobileAppImageError(true)}
                style={{ display: mobileAppImageError ? 'none' : 'block' }}
              />
            </div>
          </div>

          {/* App Store Section */}
          <div className="flex-1 flex items-center justify-center order-2 md:ml-5 ml-0">
            <div className="w-full text-center">
              <h3 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
                <span className="bg-gradient-to-r from-[#6a9cfb] to-[#b2d2ff] text-transparent bg-clip-text">
                  Download Our Mobile App
                </span>
              </h3>
              <div className="flex justify-center w-full mt-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.onebrain" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-105 inline-block"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/playstore.svg"
                    alt="Get it on Google Play"
                    width={220}
                    height={60}
                    className="h-20 md:h-20 w-auto object-contain"
                    priority={false}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Desktop/Tablet Image */}
          <div className="hidden lg:flex flex-1 justify-center lg:justify-end order-3">
            <div className="relative max-w-lg w-full">
              {/* Loading placeholder */}
              {!mobileAppImageLoaded && !mobileAppImageError && (
                <div className="w-full h-96 bg-gray-800/50 rounded-lg flex items-center justify-center animate-pulse">
                  <div className="text-gray-400 text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <div>Loading Mobile App Preview...</div>
                  </div>
                </div>
              )}
              
              {/* Error fallback */}
              {mobileAppImageError && (
                <div className="w-full h-96 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <div>Mobile App Preview</div>
                    <div className="text-sm">Coming Soon</div>
                  </div>
                </div>
              )}
              
              {/* Actual image */}
              <Image
                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/mobile%20app.png"
                alt="OneBrain Mobile App"
                width={400}
                height={800}
                className={`w-full h-auto object-contain transition-opacity duration-500 ${
                  mobileAppImageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                priority={true}
                onLoadingComplete={() => setMobileAppImageLoaded(true)}
                onError={() => setMobileAppImageError(true)}
                style={{ display: mobileAppImageError ? 'none' : 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}