"use client";

import React, { useState, useEffect } from 'react';

import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200"
    >
      {/* Header Area */}
      <header className="fixed top-0 left-0 w-full z-20 bg-gray-950/50 backdrop-blur-md py-3 px-4 sm:px-6 md:px-8">
        <img
          src="https://digitxgroup.com/wp-content/uploads/2024/10/DX.png"
          alt="DigitX Logo"
          className="h-8 sm:h-10 md:h-12"
        />
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:py-20 md:py-24">
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-transparent">
          DIGITX BD
        </h1>
        <p className="my-4 sm:my-6 max-w-md sm:max-w-lg md:max-w-xl text-center text-sm sm:text-base md:text-lg leading-relaxed">
          Leading Technology Management Consulting in Bangladesh
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-3 py-1.5 sm:px-4 sm:py-2 text-gray-50 text-sm sm:text-base transition-colors hover:bg-gray-950/50"
        >
          Explore Now
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>


    </motion.section>
  );
};

export default function BanglaDesh() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <AuroraHero />

      {/* About Us Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-[400px] flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-5 sm:mb-6 text-center">
            ABOUT US
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-blue-800">DigitX</span> is the leading, globally operating technology management consulting company based in Bangladesh. We deliver customized technology and management training solutions to large corporations and government agencies worldwide. Our mission is to empower business professionals with the skills and knowledge needed to boost performance and maximize return on investment for our global clients. Specializing in <span className="italic text-blue-700">digital transformation</span>, DigitX helps companies across all industries adapt their business models and operational processes to thrive in the digital era, meeting competitive demands and evolving customer expectations.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://digitxevents.com/wp-content/uploads/2025/02/Group-427321319.svg"
                alt="Onebrain Dashboard"
                className="w-full"
                loading="lazy"

              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> {/* Gradient Overlay */}
            </div>

            {/* Text Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://digitxevents.com/wp-content/uploads/2025/03/connecting_logo.svg"
                  alt="Onebrain Logo"
                  className="h-15 w-auto"
                  loading="lazy"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-4">
                Multiverse of AI
              </h2>


              <p className="text-gray-700 leading-relaxed mb-6">
                Onebrain is a multi-AI platform for the first time in Bangladesh. Empowering businesses and individuals with cutting-edge AI solutions.  {/* Expanded description */}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out">
                Login Here
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Partner Section */}
      <section className="py-8 px-4 sm:py-10 sm:px-6 md:px-8 text-center bg-gray-100">
        <h2 className="text-2xl sm:text-3xl text-blue-900 mb-4 sm:mb-5">OUR PAYMENT PARTNER</h2>
        <img
          src="https://digitxgroup.com/wp-content/uploads/2024/08/Payment-Banner_Jul24_V1-03.png"
          alt="Payment Partners"
          className="max-w-full h-auto mx-auto"
        />
      </section>

      {/* Footer Section */}
      <footer className="py-6 px-4 sm:px-6 md:px-8 bg-blue-900 text-white text-center">
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-5">FOOTER</h2>
        <p className="text-xs sm:text-sm mb-2">
          <strong>ADDRESS:</strong> MTB Building, Software Technology Park, Kotwali, Jashore 7400 Bangladesh
        </p>
        <p className="text-xs sm:text-sm mb-2">
          <strong>TRADE LICENSE NUMBER:</strong> 04583
        </p>
        <div className="my-3 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <a href="#" className="text-white text-xs sm:text-sm hover:underline">
            Terms and Conditions & Privacy Policy
          </a>
          <a href="#" className="text-white text-xs sm:text-sm hover:underline">
            We have no refund policy
          </a>
        </div>
        <div className="my-4 sm:my-5">
          <a href="#">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png"
              alt="Facebook"
              className="inline-block w-6 sm:w-8 mx-2 sm:mx-3"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="inline-block w-6 sm:w-8 mx-2 sm:mx-3"
            />
          </a>
        </div>
        <p className="text-xs mt-3">© DigitX Group 2024 All Rights Reserved.</p>
      </footer>
    </div>
  );
}