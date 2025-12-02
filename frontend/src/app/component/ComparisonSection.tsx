"use client";
import React from 'react';
import { Check, X, Shield, AlertTriangle } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="py-24 relative border-b border-white/5">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6 leading-tight">
               Afford a <span className="text-gray-200 border-b-2 border-gray-500/30 pb-1">Personal AI</span> with All Models
             </h2>
             <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
               Why risk using <span className="text-gray-400">Shared Accounts?</span>
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* Shared Account Card (Negative) */}
             <div className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10">
                <div className="absolute top-6 right-6">
                   <AlertTriangle className="w-6 h-6 text-gray-600" />
                </div>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-300 mb-2">Shared Accounts</h3>
                    <p className="text-gray-500 text-sm">Buying multiple subscriptions or using shared logins.</p>
                </div>
                
                <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-gray-400">Monthly Cost</span>
                      <span className="text-gray-300 font-mono">~৳7,500+</span>
                   </div>
                   
                   <ul className="space-y-4 mt-6">
                       {[
                           "Expensive (Multiple Subscriptions)",
                           "No Privacy (History visible to all)",
                           "No Personal AI Memory",
                           "No Customer Support",
                           "High Risk of Scams & Fraud",
                           "Frequent logouts & crashes"
                       ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-gray-500">
                               <X className="w-5 h-5 text-gray-600 mt-0.5 shrink-0" />
                               <span>{item}</span>
                           </li>
                       ))}
                   </ul>
                </div>
             </div>

             {/* OneBrain Card (Positive) */}
             <div className="relative rounded-3xl border border-white/10 bg-[#1A1B2E]/30 p-8 shadow-2xl shadow-black/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
                
                <div className="absolute top-6 right-6">
                   <Shield className="w-6 h-6 text-gray-300" />
                </div>

                <div className="relative z-10 mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">OneBrain Personal Account</h3>
                    <p className="text-gray-400 text-sm">One subscription for all premium models.</p>
                </div>
                
                <div className="relative z-10 space-y-4">
                   <div className="flex items-center justify-between p-4 rounded-xl bg-[#1A1B2E] border border-white/10 shadow-inner">
                      <span className="text-gray-200">Monthly Cost</span>
                      <span className="text-white font-mono font-bold">Starts from ৳299</span>
                   </div>
                   
                   <ul className="space-y-4 mt-6">
                       {[
                           "Access all latest models weekly updated",
                           "100% Private & Secure Personal Account",
                           "Personal AI with Memory",
                           "24/7 Customer Support",
                           "Stable, 24/7 Uptime",
                           "Zero hassle - Single Dashboard"
                       ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-gray-300">
                               <Check className="w-5 h-5 text-gray-100 mt-0.5 shrink-0" />
                               <span>{item}</span>
                           </li>
                       ))}
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default ComparisonSection;

