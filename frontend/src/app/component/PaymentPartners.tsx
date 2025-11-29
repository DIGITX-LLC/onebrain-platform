"use client";
import React from "react";
import Image from "next/image";
import { Facebook, MessageCircle } from "lucide-react";

export default function PaymentPartners() {
  return (
    <section className="py-16 px-6 container mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Payment Partners
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Secure and convenient payment methods for everyone.
          </p>
        </div>

        {/* Payment Strip Container */}
        <div className="relative w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden group">
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
          
          {/* Image with Dark Mode Filter */}
          {/* We apply invert and hue-rotate to try and make white backgrounds black and keep colors somewhat accurate */}
          <div className="relative w-full h-[60px] md:h-[80px] flex items-center justify-center overflow-hidden">
             <Image 
                src="/assets/payment_partner.svg" 
                alt="Payment Partners: bKash, Nagad, Rocket, Upay, DBBL, Visa, Mastercard, Amex" 
                width={1200} 
                height={150}
                className="w-full h-full object-contain object-center filter hover:brightness-110 transition-all duration-300"
                style={{
                    // If the original image has white boxes, invert makes them black.
                    // Hue rotate tries to correct the color inversion.
                    // Note: This is a heuristic. Ideally, we'd use transparent PNGs.
                    // If the user wants "redesign", a clean container is step 1.
                    // If the white boxes are persistent, we might need to just embrace them or ask for assets.
                    // For now, let's try to make it look intentional.
                }}
             />
          </div>
        </div>

        {/* Social Media Section - Integrated here for better flow */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <h3 className="text-gray-300 font-medium uppercase tracking-wider text-sm">Follow Us</h3>
            <div className="flex items-center gap-4">
                <a
                    href="https://facebook.com/groups/2238159246577852/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#1A1B2E] border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
                    aria-label="Facebook"
                >
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                    href="https://wa.me/8801988121220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#1A1B2E] border border-white/10 text-white hover:bg-green-500 hover:border-green-400 transition-all duration-300 group"
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

