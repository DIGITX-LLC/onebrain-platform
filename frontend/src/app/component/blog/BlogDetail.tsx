"use client";
import React from 'react';
import Link from 'next/link';
import ButtonAnimatedGradient from '../about/ButtonAnimatedGradient';

interface BlogDetailProps {
  title: string;
  image: string;
  content: string;
}

export default function BlogDetail({ title, image, content }: BlogDetailProps) {
  return (
    <div className="min-h-screen bg-[#030205] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030205]/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                src="https://digitxevents.com/wp-content/uploads/2025/03/onebrain_ab_logo.svg"
                alt="OneBrain Logo"
                className="h-8"
              />
            </Link>
            <Link href="/blog">
              <ButtonAnimatedGradient
                text="Back to Blog"
                gradientFrom="#0f1747"
                gradientTo="#0f1747"
                borderColor="#b2b8f6"
                className="w-[135px] h-[40px] rounded-full font-normal"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full pt-24 pb-16">
        {/* Full-bleed hero image section (ignores page container) */}
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Centered readable content area: keep padding but constrain text width for good readability */}
        <div className="px-6">
          {/* Avoid Tailwind Typography (`prose`) styles so the injected blog HTML renders as authored */}
          <article className="max-w-none mt-10 w-full not-prose">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              {title}
            </h1>

            {/* Ensure injected HTML uses a dark text color (overrides page-level text-white)
                so content authored for a light card remains readable. */}
            <div
              className="w-full not-prose text-slate-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
