"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Clock, Zap } from 'lucide-react';
import Image from 'next/image';

export default function PersonalModels() {
  return (
    <section className="py-16 md:py-24 px-6 container mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Meet Your <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text">Personal AI</span> Models
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Experience 24/7 seamless chat with our specialized AI companions, designed to adapt to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Max - Premium Model */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-[#0F0F13] border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-white/20 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className=" rounded-2xl bg-white/5 border border-white/10">
                  {/* <Brain className="w-10 h-10 text-white" /> */}
                  <Image 
                   src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/MAX%201.svg" 
                   alt="Max Model Logo"
                   width={60} 
                    height={60}
                    className='rounded-2xl'
                   />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                  Premium
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">Max</h3>
              <p className="text-gray-300 font-medium mb-6">The Ultimate Professional Assistant</p>
              
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                Max is engineered for high-performance tasks, coding, complex reasoning, and creative strategy. Available exclusively for Premium subscribers.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Zap className="w-4 h-4 text-white" />
                  <span>Advanced Reasoning & Coding</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-4 h-4 text-white" />
                  <span>24/7 Seamless Availability</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Context-Aware Long Memory</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Neo - Student Model */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[#0F0F13] border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-white/20 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="rounded-2xl bg-white/5 border border-white/10">
                  {/* <GraduationCap className="w-10 h-10 text-gray-300" /> */}
                  <Image 
                  src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/NEO%201.svg" 
                     alt="Neo Model Logo"
                     width={60} 
                    height={60}
                    className='rounded-2xl'
                    />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
                  Student
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">Neo</h3>
              <p className="text-gray-400 font-medium mb-6">The Smart Study Companion</p>
              
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                Neo is your dedicated study partner, perfect for research, writing assistance, and learning new concepts. Optimized for Student subscriptions.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <BookOpen className="w-4 h-4 text-gray-300" />
                  <span>Academic Research & Writing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-4 h-4 text-gray-300" />
                  <span>24/7 Seamless Availability</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Sparkles className="w-4 h-4 text-gray-300" />
                  <span>Simplified Explanations</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
