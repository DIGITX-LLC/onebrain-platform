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
        <section className="py-16 px-6 mx-auto relative container font-sans">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
                <span className="text-white">Get Ready to Experience the </span>
                <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">Future of Creation</span>
              </h1>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-6">
                  <span className="mr-2">🚧</span> Beta Release
              </div>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                We&apos;re counting down to the Early Access launch. Be the first to experience the power of OneBrain in your pocket.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Mobile Image - Only visible on mobile */}
              <div className="flex-1 flex justify-center lg:hidden order-1">
                <div className="relative max-w-sm w-full aspect-[9/19] bg-[#0F0F13] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                   <div className="text-center p-6">
                       <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                       <span className="text-gray-500 text-sm">Loading Preview...</span>
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col items-center lg:items-start justify-center order-2 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    Download Our Mobile App
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 max-w-md">
                      Experience seamless AI interactions on the go. Available soon on Google Play Store.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
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
                        width={200}
                        height={60}
                        className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
                        priority={false}
                      />
                    </a>
                  </div>
              </div>

              {/* Right Side - Desktop/Tablet Image */}
              <div className="hidden lg:flex flex-1 justify-center lg:justify-end order-3">
                 {/* Use same loading/error logic as main return, simplified for hydration free render */}
                 <div className="relative w-[300px] h-[600px] bg-[#0F0F13] rounded-[40px] border-8 border-[#1A1B2E] shadow-2xl flex items-center justify-center overflow-hidden">
                     <div className="text-center">
                        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                        <span className="text-gray-500 text-sm">Loading Preview...</span>
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      );
  }

  return (
    <section className="py-16 md:py-20 px-6 mx-auto relative container font-sans overflow-visible">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            <span className="text-white">OneBrain Mobile App </span>
            <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">Beta is Live</span>
          </h1>
           <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-base font-medium mb-6 backdrop-blur-sm">
              <span className="mr-2 relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Beta Version Available Now
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Experience the full power of OneBrain on your phone. Download the beta version today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Content Section */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center order-2 lg:order-1 text-center lg:text-left z-10 max-w-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 shadow-lg backdrop-blur-md">
                  <Image src="/assets/oneBrainLogo.svg" alt="Logo" width={40} height={40} className="w-10 h-10 opacity-90" /> 
                  {/* <Image src="/assets/App_Logo.svg" alt="Logo" fill className="rounded-2xl" /> */}
              </div>

              <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
                Download <br/> <span className="text-gray-400">Beta Version</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                  Get early access to our mobile features. Seamlessly sync your chats, images, and projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.onebrain" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-105 inline-block bg-[#0F0F13] border border-white/20 rounded-xl px-6 py-3 hover:border-white/40 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.15)] relative overflow-hidden"
                  aria-label="Get it on Google Play"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-4 relative z-10">
                      <Image
                        src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/playstore.svg"
                        // src="/assets/modelLogo/Google_Play-Icon-Logo.wine.svg"
                        alt="Play Store"
                        width={36}
                        height={36}
                        className="w-9 h-9" 
                      />
                      <div className="text-left">
                          <div className="text-[10px] text-gray-400 uppercase font-medium leading-none mb-1">GET IT ON</div>
                          <div className="text-xl text-white font-bold leading-none">Google Play</div>
                      </div>
                  </div>
                </a>
              </div>
          </div>

          {/* Right Side - Phone Image */}
          <div className="flex-initial flex justify-center lg:justify-end order-1 lg:order-2 relative">
             {/* Glow Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[700px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
             
             <div className="relative w-[320px] md:w-[380px] h-auto aspect-[9/19] overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image
                    src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/mobile%20app.png"
                    alt="OneBrain Mobile App"
                    fill
                    className={`object-contain transition-opacity duration-500 ${
                    mobileAppImageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={true}
                    onLoadingComplete={() => setMobileAppImageLoaded(true)}
                    onError={() => setMobileAppImageError(true)}
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
