"use client";
import Link from 'next/link';
import ButtonAnimatedGradient from '../../component/about/ButtonAnimatedGradient';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030205] text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
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
  );
}
