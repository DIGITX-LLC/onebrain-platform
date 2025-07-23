"use client";

import React, { useRef, useState } from 'react';
import DynamicButton from './DynamicButton';
import Link from 'next/link';

const carouselCards = [
    {
        img: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Veo3-slider-1.mp4',
        alt: 'Card 1',
        prompt: 'A follow shot of a wise old owl high in the air, peeking through the clouds in a moonlit sky above a forest.',
        type: 'mute',
    },
    {
        img: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Veo3-slider-2.mp4',
        alt: 'Card 2',
        prompt: 'A cat "singing" opera with full orchestra, looking surprisingly profound.',
        type: 'play',
    },
    {
        img: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Veo3-slider-3.mp4',
        alt: 'Card 3',
        prompt: 'The video opens with a medium shot, eye level, of Character A, an elderly Caucasian sailor with a white beard, eating spaghetti.',
        type: 'mute',
    },
    {
        img: 'https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Veo3-slider-4.mp4',
        alt: 'Card 4',
        prompt: 'A medium shot. Historical adventure setting.',
        type: 'mute',
    },
];

export default function Vo3TrendingSection() {
    const _videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [centerIndex, setCenterIndex] = useState(1); // Start with the second card centered

    // Drag state
    const dragState = useRef({ startX: 0, dragging: false, lastX: 0 });

    const centerVideoRef = useRef<HTMLVideoElement>(null);
    const [centerVideoMuted, setCenterVideoMuted] = useState(true);
    const [centerVideoPlaying, setCenterVideoPlaying] = useState(true);

    // Carousel logic for 3 visible cards
    const getCardIndices = () => {
        const total = carouselCards.length;
        const prev = (centerIndex - 1 + total) % total;
        const next = (centerIndex + 1) % total;
        return [prev, centerIndex, next];
    };
    const visibleIndices = getCardIndices();

    // Mouse/touch drag handlers
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        dragState.current.dragging = true;
        dragState.current.startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        dragState.current.lastX = dragState.current.startX;
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragState.current.dragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        dragState.current.lastX = clientX;
    };

    const handleDragEnd = () => {
        if (!dragState.current.dragging) return;
        const delta = dragState.current.lastX - dragState.current.startX;
        const threshold = 60; // px
        if (delta > threshold) {
            setCenterIndex((prev) => (prev === 0 ? carouselCards.length - 1 : prev - 1));
        } else if (delta < -threshold) {
            setCenterIndex((prev) => (prev === carouselCards.length - 1 ? 0 : prev + 1));
        }
        dragState.current.dragging = false;
        dragState.current.startX = 0;
        dragState.current.lastX = 0;
    };

    return (
        <div className="b text-white min-h-screen font-sans py-10">
            {/* Header Section */}
            <div className="text-center  mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-slideUp">Feature Rollout: What&apos;s New 🔥</h2>
                <h1 className="text-5xl md:text-6xl font-bold m-0">
                    Break the silence 
                    <span 
                    className='ml-2'
                        style={{
                            background: 'linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(213, 94%, 81%, 1) 44%, hsla(213, 94%, 68%, 1) 60%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline-block'
                        }}
                    >
                        with Veo3
                    </span>
                </h1>
                <p className="text-gray-300 text-lg mt-4 px-3 md:px-0">
                    Create high-quality videos with Veo 3, Google&apos;s latest AI video generator.<br />
                    Get the &quot;Legend of AI&quot; pro plan. Simply describe your idea and watch it come to life with native audio generation.
                </p>
                <Link href='/login'>
                <DynamicButton
                    label='Try Veo3'
                    size='w-[155px] h-[48px] rounded-3xl mx-auto inline-block font-normal block z-10 md:mt-8 mt-6 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg'
                />
                </Link>
            </div>
            {/* Featured Video Section */}
            <div className=" ">
                <div className="relative  h-full mb-10 rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                        border: '2px solid transparent',
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, hsla(213, 94%, 68%, 1) 69%, hsla(0, 0%, 100%, 1) 100%) border-box',
                        borderRadius: '1.5rem',
                    }}
                >
                    <video
                        ref={_videoRef}
                        src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Veo3.mp4 "
                        className="w-full h-full object-cover  block"
                        controls={false}
                        autoPlay
                        loop
                        muted={isMuted}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />
                    <div className="absolute bottom-4 right-4 flex gap-4">
                        {/* Mute/Unmute Button */}
                        <button
                            onClick={() => {
                                if (_videoRef.current) {
                                    _videoRef.current.muted = !isMuted;
                                    setIsMuted(!isMuted);
                                }
                            }}
                            className="bg-neutral-800/80 border-none rounded-full w-12 h-12 text-white flex items-center justify-center text-xl cursor-pointer shadow-md"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                            {isMuted ? (
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                            ) : (
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                            )}
                        </button>
                        {/* Play/Pause Button */}
                        <button
                            onClick={() => {
                                if (_videoRef.current) {
                                    if (isPlaying) {
                                        _videoRef.current.pause();
                                    } else {
                                        _videoRef.current.play();
                                    }
                                    setIsPlaying(!isPlaying);
                                }
                            }}
                            className="bg-neutral-800/80 border-none rounded-full w-12 h-12 text-white flex items-center justify-center text-xl cursor-pointer shadow-md"
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? (
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                            ) : (
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Veo3 Speaks for itself */}
            <div className="text-center mb-2">
                <span className="text-5xl font-semibold">
                <span 
                    className='mr-3'
                        style={{
                            background: 'linear-gradient(90deg, hsla(213, 94%, 68%, 1) 40%, hsla(213, 94%, 80%, 1) 54%, hsla(0, 0%, 100%, 1) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline-block'
                        }}
                    >
                         Veo3 Speaks
                    </span>
                      for itself
                </span>
            </div>
            {/* Custom Carousel Section */}
            {/*
                Center card video: show play/pause and mute/unmute buttons.
                Always muted except when unmute is clicked.
                Other cards: just show video/image, no controls.
            */}
            <div
                className="flex justify-between w-full items-end px-4 md:px-0 gap-8 select-none"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {visibleIndices.map((idx, _i) => {
                    const card = carouselCards[idx];
                    const isCenter = idx === centerIndex;
                    const isVideo = card.img.endsWith('.mp4');
                    const videoRef = isCenter && isVideo ? centerVideoRef : undefined;

                    return (
                        <div
                            key={idx}
                            onClick={() => !isCenter && setCenterIndex(idx)}
                            className={`mt-8 mb-4 rounded-3xl overflow-hidden bg-neutral-900 
                ${isCenter ? 'shadow-2xl opacity-100 filter-none mt-0 mb-0' : 'shadow-lg opacity-70 brightness-75'} 
                flex flex-col items-center box-border transition-all duration-400 ease-in-out cursor-${isCenter ? 'default' : 'pointer'}`}
                            style={{
                                position: 'relative',
                                width: isCenter ? '65%' : '20%',
                                height: '333px',
                                border: isCenter ? '2px solid transparent' : '2px solid transparent',
                                background: `linear-gradient(#18181b, #18181b) padding-box, linear-gradient(90deg, hsla(213, 94%, 68%, 1) 69%, hsla(0, 0%, 100%, 1) 100%) border-box`,
                                borderRadius: '1.5rem',
                            }}
                        >
                            {isVideo ? (
                                <video
                                    ref={isCenter ? centerVideoRef : undefined}
                                    src={card.img}
                                    className="w-full h-full object-cover rounded-t-3xl"
                                    autoPlay
                                    loop
                                    muted={!isCenter || centerVideoMuted}
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={card.img}
                                    alt=""
                                    className="w-full h-full object-cover rounded-t-3xl"
                                />
                            )}

                            {/* Only show controls for center video */}
                            {isCenter && isVideo && (
                                <div className="absolute bottom-4 right-4 flex flex-row gap-3">
                                    {/* Mute/Unmute Button */}
                                    <button
                                        className="bg-neutral-800/80 border-none rounded-full w-12 h-12 text-white flex items-center justify-center text-xl cursor-pointer shadow-md"
                                        aria-label={centerVideoMuted ? "Unmute" : "Mute"}
                                        onClick={() => {
                                            if (centerVideoRef.current) {
                                                if (centerVideoMuted) {
                                                    centerVideoRef.current.muted = false;
                                                    setCenterVideoMuted(false);
                                                } else {
                                                    centerVideoRef.current.muted = true;
                                                    setCenterVideoMuted(true);
                                                }
                                            }
                                        }}
                                    >
                                        {centerVideoMuted ? (
                                            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                                <line x1="17" y1="9" x2="23" y2="15"></line>
                                            </svg>
                                        ) : (
                                            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                        </svg>
                                        )}
                                    </button>
                                    {/* Play/Pause Button */}
                                    <button
                                        className="bg-neutral-800/80 border-none rounded-full w-12 h-12 text-white flex items-center justify-center text-xl cursor-pointer shadow-md"
                                        aria-label={centerVideoPlaying ? "Pause" : "Play"}
                                        onClick={() => {
                                            if (centerVideoRef.current) {
                                                if (centerVideoPlaying) {
                                                    centerVideoRef.current.pause();
                                                    setCenterVideoPlaying(false);
                                                } else {
                                                    centerVideoRef.current.play();
                                                    setCenterVideoPlaying(true);
                                                }
                                            }
                                        }}
                                    >
                                        {centerVideoPlaying ? (
                                            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="6" y="4" width="4" height="16"></rect>
                                                <rect x="14" y="4" width="4" height="16"></rect>
                                            </svg>
                                        ) : (
                                            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {/* Prompt for center card */}
            <div className="text-center mb-4 min-h-[32px] px-3 md:px-3">
                <span className="text-[#999999]  text-base">
                    <span className="font-bold">Prompt:</span> {carouselCards[centerIndex].prompt}
                </span>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mb-8">
                {carouselCards.map((_, idx) => {
                    const isActive = idx === centerIndex;
                    return (
                        <span
                            key={idx}
                            onClick={() => setCenterIndex(idx)}
                            className={`h-2 rounded-full bg-neutral-800 inline-block transition-colors duration-300 mx-0.5 cursor-pointer overflow-hidden`}
                            style={
                                isActive
                                    ? {
                                        width: '2rem', // w-8 = 2rem
                                        background: 'linear-gradient(90deg, hsla(266, 95%, 76%, 1) 0%, hsla(217, 95%, 70%, 1) 75%)',
                                        transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s cubic-bezier(0.4,0,0.2,1)'
                                    }
                                    : { width: '0.5rem' } // w-2 = 0.5rem
                            }
                        />
                    );
                })}
            </div>
            {/* Footer Text */}
            <div className="text-center text-4xl font-semibold mt-8">
                Dream it. Describe it. 
                <span 
                className='ml-3'
                    style={{
                        background: 'linear-gradient(90deg, hsla(266, 95%, 76%, 1) 66%, hsla(217, 95%, 70%, 1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'inline-block'
                    }}
                >Done.</span>
            </div>
        </div>
    );
}
