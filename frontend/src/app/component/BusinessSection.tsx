"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Users, Zap, ArrowRight, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

export default function BusinessSection() {
  return (
    <section className="py-16 md:py-24 px-6 container mx-auto">
      <div className="bg-gradient-to-br from-[#0F0F13] to-[#1A1B2E] border border-white/10 rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium backdrop-blur-sm">
              <Building2 className="w-3 h-3 mr-2 text-white" />
              For Enterprise
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              <span className="block text-gray-400 text-2xl md:text-3xl mb-2 font-medium">OneBrain for</span>
              Business & Teams
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Empower your entire organization with secure, scalable AI. Get centralized billing, team management, and priority support tailored for your company's needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               <Link 
                href="/business" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
               >
                 Contact Sales
                 <ArrowRight className="w-5 h-5 ml-2" />
               </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            
            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Enterprise Security</h3>
              <p className="text-sm text-gray-400">Data privacy first. Your team's data is isolated and secure with enterprise-grade standards.</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Team Management</h3>
              <p className="text-sm text-gray-400">Easily add or remove members, assign roles, and manage access from a single dashboard.</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LayoutGrid className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Centralized Billing</h3>
              <p className="text-sm text-gray-400">One invoice for your whole team. Simplify your accounting with consolidated monthly billing.</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Priority Support</h3>
              <p className="text-sm text-gray-400">Get dedicated onboarding and 24/7 priority access to our support team for any issues.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

