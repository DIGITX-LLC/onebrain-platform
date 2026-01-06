"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Wallet, Users, ArrowRight } from 'lucide-react';

export default function ReferralSection() {
    return (
        <section id="referralSection" className="py-16 md:py-24 px-6 container mx-auto relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto bg-[#0F0F13] border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center">

                <div className="relative z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-400 font-medium mb-6 uppercase tracking-wider">
                        Referral Program
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Refer Friends, <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">Earn Free AI Credits.</span>
                    </h2>

                    <div className="max-w-3xl mx-auto mb-12 space-y-4">
                        <p className="text-gray-200 text-lg md:text-sm font-medium leading-relaxed">
                            Invite friends to OneBrain and earn rewards every time they sign up and actively use the platform.
                        </p>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            When someone registers using your referral link, both you and your friend receive bonus AI credits—allowing you to explore additional models, generate more content, and accelerate your projects with OneBrain.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-white mb-8">How it works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:scale-[1.05] transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                    <Users className="w-5 h-5 text-blue-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">1. Share Your Link</h4>
                                <p className="text-sm text-gray-400">Distribute your personalized referral link to friends and colleagues.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:scale-[1.05] transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                    <TrendingUp className="w-5 h-5 text-blue-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">2. Friend Activates</h4>
                                <p className="text-sm text-gray-400">Your friend signs up and activates their account on OneBrain.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:scale-[1.05] transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                    <Wallet className="w-5 h-5 text-blue-400" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">3. Earn Together</h4>
                                <p className="text-sm text-gray-400">You both earn bonus credits instantly to power your creative works.</p>
                            </div>
                        </div>

                        <p className="text-gray-400 mt-8 font-medium">
                            No limits. No hidden conditions. Just smarter sharing.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Link
                            href="https://ai.onebrain.app/login"
                            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#1A1B2E] text-gray-200 border border-white/10 px-8 font-medium transition-all duration-300 hover:bg-[#232438] hover:text-white hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] focus:outline-none"
                        >
                            <span className="mr-2">Start Referring Now</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <p className="text-[10px] md:text-xs text-gray-500 italic">
                            Referral rewards are applied after successful account activation. Terms & conditions apply.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
