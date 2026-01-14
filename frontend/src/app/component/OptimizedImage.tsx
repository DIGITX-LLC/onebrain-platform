'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  fallbackSrc = '/assets/placeholder.png',
  loading = 'lazy',
  onLoad,
  onError,
  sizes,
  quality = 75,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${imgSrc}`);
    setHasError(true);
    setIsLoading(false);
    
    // Try fallback if available
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    
    onError?.();
  };

  // Show placeholder while loading
  if (isLoading && !priority) {
    return (
      <div
        className={`bg-gray-800 animate-pulse flex items-center justify-center ${className}`}
        style={
          fill
            ? { position: 'absolute', inset: 0 }
            : { width: width || 'auto', height: height || 'auto' }
        }
      >
        <span className="text-gray-600 text-xs">Loading...</span>
      </div>
    );
  }

  const imageProps = {
    src: imgSrc,
    alt,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    onLoad: handleLoad,
    onError: handleError,
    priority,
    quality,
    loading: priority ? undefined : loading,
    sizes,
    ...(fill
      ? { fill: true }
      : { width: width || 500, height: height || 500 }),
  };

  return <Image {...imageProps} />;
}

