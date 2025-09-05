import React, { useEffect, useState } from "react";

export default function MobileCountdown() {
  // State to track if component is mounted (client-side)
  const [isMounted, setIsMounted] = useState(false);
  
  // Countdown timer state - calculate time to September 12, 2025 at 6pm
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-09-12T18:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Mobile app image loading state
  const [mobileAppImageLoaded, setMobileAppImageLoaded] = useState(false);
  const [mobileAppImageError, setMobileAppImageError] = useState(false);

  // Waitlist form state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Toast notification state
  const [toast, setToast] = useState<{
    show: boolean;
    variant: 'success' | 'error';
    title: string;
    description: string;
  }>({ show: false, variant: 'success', title: '', description: '' });

  // Show toast notification
  const showToast = (variant: 'success' | 'error', title: string, description: string) => {
    setToast({ show: true, variant, title, description });
    // Auto hide after 5 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  // Mount effect - runs only on client side
  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());
  }, []);

  // Countdown timer effect - only runs after mounting
  useEffect(() => {
    if (!isMounted) return;
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isMounted]);

  // Preload mobile app image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setMobileAppImageLoaded(true);
    img.onerror = () => setMobileAppImageError(true);
    img.src = "https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/mobile%20app.png";
  }, []);

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  // Submit waitlist form
  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // API call to submit email to waitlist
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || '/api'}/auth/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        // Success - show success toast and reset form
        showToast(
          'success',
          'Success!',
          "You've been added to the waitlist! We'll notify you when early access is available."
        );
        
        // Reset form
        setEmail('');
        setEmailError('');
      } else {
        // API error - show error toast
        showToast(
          'error',
          'Error',
          'Failed to join the waitlist. Please try again later.'
        );
      }
    } catch (error) {
      // Network or other error - show error toast
      showToast(
        'error',
        'Error',
        'Failed to join the waitlist. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

            {/* Left Side - Content */}
            <div className="flex-1 text-center lg:text-left order-2">
              {/* New App Store Section */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                  <span className="bg-gradient-to-r from-[#6a9cfb] to-[#b2d2ff] text-transparent bg-clip-text">
                    Download Our Mobile App
                  </span>
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href="#" 
                    className="transition-transform duration-200 hover:scale-105"
                    aria-label="Download from App Store"
                  >
                    <img
                      src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Store%20.svg"
                      alt="Download on the App Store"
                      className="h-12 md:h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                  <a 
                    href="#" 
                    className="transition-transform duration-200 hover:scale-105"
                    aria-label="Get it on Google Play"
                  >
                    <img
                      src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/playstore.svg"
                      alt="Get it on Google Play"
                      className="h-12 md:h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>

              {/* Countdown Timer - Placeholder */}
              <div className="mb-8">
                <h3 className="text-white text-2xl font-semibold mb-6">Time Remaining</h3>
                <div className="flex justify-center lg:justify-start gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">--</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">DAYS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">--</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">HOURS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">--</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">MINUTES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">--</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">SECONDS</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                The Future of Creation Is Almost Here
              </h2>

              {/* Email Signup */}
              <form onSubmit={handleWaitlistSubmit} className="max-w-2xl mx-auto lg:mx-0">
                <div className="flex w-full relative">
                  <input
                    type="email"
                    placeholder="Enter your Mail address"
                    value={email}
                    onChange={handleEmailChange}
                    className={`flex-1 px-4 py-3 md:px-6 md:py-4 bg-transparent border-2 ${
                      emailError ? 'border-red-500' : 'border-white'
                    } rounded-full text-white placeholder-gray-400 focus:outline-none pr-32 md:pr-48 transition-colors duration-200 text-sm md:text-base`}
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-0 top-0 bottom-0 px-4 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-full transition-colors duration-200 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitting ? 'Joining...' : 'Join the waitlist'}
                  </button>
                </div>
                {/* Error message */}
                {emailError && (
                  <p className="text-red-400 text-sm mt-2 text-left">{emailError}</p>
                )}
              </form>
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
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 max-w-md w-full">
          <div className={`p-4 rounded-lg shadow-lg border ${
            toast.variant === 'success' 
              ? 'bg-green-900 border-green-700 text-green-100' 
              : 'bg-red-900 border-red-700 text-red-100'
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{toast.title}</h4>
                <p className="text-sm mt-1">{toast.description}</p>
              </div>
              <button
                onClick={() => setToast(prev => ({ ...prev, show: false }))}
                className="ml-4 text-current opacity-70 hover:opacity-100"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

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
              <img
                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/mobile%20app.png"
                alt="OneBrain Mobile App"
                className={`w-full h-auto object-contain transition-opacity duration-500 ${
                  mobileAppImageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                loading="eager"
                fetchPriority="high"
                onLoad={() => setMobileAppImageLoaded(true)}
                onError={() => setMobileAppImageError(true)}
                style={{ display: mobileAppImageError ? 'none' : 'block' }}
              />
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left order-2">
            {/* New App Store Section */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-[#6a9cfb] to-[#b2d2ff] text-transparent bg-clip-text">
                  Download Our Mobile App
                </span>
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#" 
                  className="transition-transform duration-200 hover:scale-105"
                  aria-label="Download from App Store"
                >
                  <img
                    src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Store%20.svg"
                    alt="Download on the App Store"
                    className="h-12 md:h-14 w-auto object-contain"
                    loading="lazy"
                  />
                </a>
                <a 
                  href="#" 
                  className="transition-transform duration-200 hover:scale-105"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/playstore.svg"
                    alt="Get it on Google Play"
                    className="h-12 md:h-14 w-auto object-contain"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <h3 className="text-white text-2xl font-semibold mb-6">Time Remaining</h3>
              <div className="flex justify-center lg:justify-start gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">HOURS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">MINUTES</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">SECONDS</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              The Future of Creation Is Almost Here
            </h2>

            {/* Email Signup */}
            <form onSubmit={handleWaitlistSubmit} className="max-w-2xl mx-auto lg:mx-0">
              <div className="flex w-full relative">
                <input
                  type="email"
                  placeholder="Enter your Mail address"
                  value={email}
                  onChange={handleEmailChange}
                  className={`flex-1 px-4 py-3 md:px-6 md:py-4 bg-transparent border-2 ${
                    emailError ? 'border-red-500' : 'border-white'
                  } rounded-full text-white placeholder-gray-400 focus:outline-none pr-32 md:pr-48 transition-colors duration-200 text-sm md:text-base`}
                  disabled={isSubmitting}
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-0 top-0 bottom-0 px-4 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-full transition-colors duration-200 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? 'Joining...' : 'Join the waitlist'}
                </button>
              </div>
              {/* Error message */}
              {emailError && (
                <p className="text-red-400 text-sm mt-2 text-left">{emailError}</p>
              )}
            </form>
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
              <img
                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/mobile%20app.png"
                alt="OneBrain Mobile App"
                className={`w-full h-auto object-contain transition-opacity duration-500 ${
                  mobileAppImageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                loading="eager"
                fetchPriority="high"
                onLoad={() => setMobileAppImageLoaded(true)}
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