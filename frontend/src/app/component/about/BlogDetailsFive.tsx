"use client";
import React from "react";
import Link from "next/link";
import ButtonAnimatedGradient from "./ButtonAnimatedGradient";

interface BlogDetailsFiveProps {
  title: string;
  image: string;
  content: string; // HTML content
}

export default function BlogDetailsFive({ title, image, content }: BlogDetailsFiveProps) {
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
      <div className="container mx-auto px-6 pt-24 pb-16">
        <article className="prose prose-lg prose-invert mx-auto">
          {/* Dynamic Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            {title}
          </h1>

          {/* Dynamic Image */}
          <div className="mb-12">
            <div className="details5-hero-wrapper" style={{ height: "200px" }}>
              {/* <img
                src={image}
                alt={title}
                className="details5-hero-image w-full h-full rounded-2xl"
                style={{
                  height: "200px",
                  maxHeight: "200px",
                  width: "100%",
                  borderRadius: "1rem",
                }}
              /> */}
            </div>
          </div>

          {/* Dynamic Content (HTML) */}
          <div
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </div>
    </div>
  );
}
