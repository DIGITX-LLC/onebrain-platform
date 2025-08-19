"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import DynamicButton from './DynamicButton';

export default function Vo3TrendingSection() {
    const hailuoVideoRef = useRef<HTMLVideoElement>(null);
    const wanVideoRef = useRef<HTMLVideoElement>(null);
    const [hailuoMuted, setHailuoMuted] = useState(true);
    const [hailuoPlaying, setHailuoPlaying] = useState(true);
    const [wanMuted, setWanMuted] = useState(true);
    const [wanPlaying, setWanPlaying] = useState(true);

    return (
        <div className="text-white min-h-screen font-sans py-20 px-6">
            {/* Hailuo Section */}
            <div className="max-w-6xl mx-auto mb-32">
                {/* Main Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
                        Transform Idea to Visual with{' '}
                        <span 
                            style={{
                                background: 'linear-gradient(90deg, hsla(213, 94%, 81%, 1) 0%, hsla(213, 94%, 68%, 1) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                display: 'inline-block'
                            }}
                        >
                            Hailuo
                        </span>
                    </h1>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                    {/* Left Content */}
                    <div className="space-y-6 md:mt-20 mt-8">
                        <p className="text-gray-400 text-xl font-light ">
                            Hailuo AI is Now Available
                        </p>
                        
                        <div className="space-y-4">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Create stunning videos anytime, anywhere with your favorite AI video tool Hailuo, now in your pocket.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Enjoy an intuitive, creator-friendly interface designed for seamless on-the-go editing. Unleash your creativity and share your stories with the world, effortlessly.
                            </p>
                        </div>
                    </div>

                    {/* Right Video */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                                style={{
                                    border: '3px solid transparent',
                                    background: 'linear-gradient(#000, #000) padding-box, linear-gradient(135deg, hsla(213, 94%, 68%, 1) 0%, hsla(350, 100%, 75%, 1) 100%) border-box',
                                }}
                            >
                                <video
                                    ref={hailuoVideoRef}
                                    src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Hailuo.mp4"
                                    className="w-full h-full object-cover"
                                    controls={false}
                                    autoPlay
                                    loop
                                    muted={hailuoMuted}
                                    playsInline
                                    onPlay={() => setHailuoPlaying(true)}
                                    onPause={() => setHailuoPlaying(false)}
                                />
                                <div className="absolute bottom-4 right-4 flex gap-3">
                                    {/* Mute/Unmute Button */}
                                    <button
                                        onClick={() => {
                                            if (hailuoVideoRef.current) {
                                                hailuoVideoRef.current.muted = !hailuoMuted;
                                                setHailuoMuted(!hailuoMuted);
                                            }
                                        }}
                                        className="bg-neutral-800/80 backdrop-blur-sm border-none rounded-full w-12 h-12 text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-neutral-700/80 transition-all duration-200"
                                        aria-label={hailuoMuted ? 'Unmute' : 'Mute'}
                                    >
                                        {hailuoMuted ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                                <line x1="17" y1="9" x2="23" y2="15"></line>
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                            </svg>
                                        )}
                                    </button>
                                    {/* Play/Pause Button */}
                                    <button
                                        onClick={() => {
                                            if (hailuoVideoRef.current) {
                                                if (hailuoPlaying) {
                                                    hailuoVideoRef.current.pause();
                                                } else {
                                                    hailuoVideoRef.current.play();
                                                }
                                                setHailuoPlaying(!hailuoPlaying);
                                            }
                                        }}
                                        className="bg-neutral-800/80 backdrop-blur-sm border-none rounded-full w-12 h-12 text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-neutral-700/80 transition-all duration-200"
                                        aria-label={hailuoPlaying ? 'Pause' : 'Play'}
                                    >
                                        {hailuoPlaying ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="6" y="4" width="4" height="16"></rect>
                                                <rect x="14" y="4" width="4" height="16"></rect>
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Width Bottom Text Section */}
                <div className="text-center">
                    <div className="flex flex-wrap justify-center items-center gap-2 text-xl md:text-4xl lg:text-4xl font-semibold">
                        <span className="text-white">Video Creation,</span>
                        <span 
                            style={{
                                background: 'linear-gradient(90deg, hsla(350, 100%, 88%, 1) 0%, hsla(350, 100%, 75%, 1) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                display: 'inline-block'
                            }}
                        >
                            Reimagined
                        </span>
                        <span className="text-pink-400 text-lg md:text-xl lg:text-2xl">✨</span>
                        <span className="text-white">Your Stories, Amplified by</span>
                        <span 
                            style={{
                                background: 'linear-gradient(90deg, hsla(213, 94%, 81%, 1) 0%, hsla(213, 94%, 68%, 1) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                display: 'inline-block'
                            }}
                        >
                            AI
                        </span>
                    </div>
                </div>
            </div>

            {/* Wan Take Section */}
            <div className="max-w-6xl mx-auto">
                {/* Main Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
                        Every Shot,{' '}
                        <span 
                            style={{
                                background: 'linear-gradient(90deg, hsla(213, 94%, 81%, 1) 0%, hsla(213, 94%, 68%, 1) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                display: 'inline-block'
                            }}
                        >
                            Wan Take
                        </span>
                    </h1>
                    
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        Wan2.2 is fully launched, including leading-edge and highly capable video generation models.
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                    <div className="w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                            style={{
                                border: '3px solid transparent',
                                background: 'linear-gradient(#000, #000) padding-box, linear-gradient(135deg, hsla(213, 94%, 68%, 1) 0%, hsla(120, 100%, 75%, 1) 100%) border-box',
                            }}
                        >
                            <video
                                ref={wanVideoRef}
                                src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Wan_new.mp4"
                                className="w-full h-full object-cover"
                                controls={false}
                                autoPlay
                                loop
                                muted={wanMuted}
                                playsInline
                                onPlay={() => setWanPlaying(true)}
                                onPause={() => setWanPlaying(false)}
                            />
                            <div className="absolute bottom-4 right-4 flex gap-3">
                                {/* Mute/Unmute Button */}
                                <button
                                    onClick={() => {
                                        if (wanVideoRef.current) {
                                            wanVideoRef.current.muted = !wanMuted;
                                            setWanMuted(!wanMuted);
                                        }
                                    }}
                                    className="bg-neutral-800/80 backdrop-blur-sm border-none rounded-full w-12 h-12 text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-neutral-700/80 transition-all duration-200"
                                    aria-label={wanMuted ? 'Unmute' : 'Mute'}
                                >
                                    {wanMuted ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                            <line x1="23" y1="9" x2="17" y2="15"></line>
                                            <line x1="17" y1="9" x2="23" y2="15"></line>
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                        </svg>
                                    )}
                                </button>
                                {/* Play/Pause Button */}
                                <button
                                    onClick={() => {
                                        if (wanVideoRef.current) {
                                            if (wanPlaying) {
                                                wanVideoRef.current.pause();
                                            } else {
                                                wanVideoRef.current.play();
                                            }
                                            setWanPlaying(!wanPlaying);
                                        }
                                    }}
                                    className="bg-neutral-800/80 backdrop-blur-sm border-none rounded-full w-12 h-12 text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-neutral-700/80 transition-all duration-200"
                                    aria-label={wanPlaying ? 'Pause' : 'Play'}
                                >
                                    {wanPlaying ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="6" y="4" width="4" height="16"></rect>
                                            <rect x="14" y="4" width="4" height="16"></rect>
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white">
                        All in Wan, Create Anything
                    </h2>
                </div>
            </div>
        </div>
    );
}
