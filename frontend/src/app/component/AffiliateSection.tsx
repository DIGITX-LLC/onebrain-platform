"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Wallet, Users, ArrowRight } from 'lucide-react';

export default function AffiliateSection() {
  return (
    <section className="py-16 md:py-24 px-6 container mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto bg-[#0F0F13] border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center">

        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium mb-6">
            🚀 Join the Revolution
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Become a <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">OneBrain Partner</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Earn tailored commissions by empowering students and professionals with Bangladesh's #1 AI platform. Perfect for content creators, community leaders, and resellers.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
              <TrendingUp className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">High Commission</h3>
              <p className="text-sm text-gray-400">Earn up to 30% recurring commission on every subscription you refer.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
              <Wallet className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Local Payouts</h3>
              <p className="text-sm text-gray-400">Get paid easily via bKash, Nagad, or Bank Transfer with low withdrawal limits.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
              <Users className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Partner Support</h3>
              <p className="text-sm text-gray-400">Access exclusive marketing assets and a dedicated manager to help you grow.</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/affiliate-demo"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1A1B2E] text-white font-medium border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            Apply for Affiliate Program
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
