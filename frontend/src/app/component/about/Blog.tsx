
import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import ButtonAnimatedGradient from "./ButtonAnimatedGradient";


const blogs = [
  {
    id: 1,
    title: ' Llama 3.3 Vs. Grok 3',
    excerpt: 'OneBrain is just launched 3.3 brings faster performance, smarter reach. Llama 3.3 is a smart language model. It can help like chatting, coding...',
    image: 'https://digitxevents.com/wp-content/uploads/2025/04/Blog-Poster.png',
    link: '/details1'
  },
  {
    id: 2,
    title: 'Llama 3.3 and Chatgpt 4.o',
    excerpt: 'Introduced in May 2024, GPT-4o represents OpenAI’s most advanced flagship multimodal model to date, engineered to be the fastest and most....',
    image: 'https://digitxevents.com/wp-content/uploads/2025/04/2-3.png',
    link: '/details2'
  },
  {
    id: 3,
    title: ' DeepSeek VS. ChatGPT',
    excerpt: 'AI chatbots have become essential tools in personal and professional settings, transforming how we communicate, create, and solve problems....',
    image: 'https://digitxevents.com/wp-content/uploads/2025/04/blog3.png',
    link: '/details3'
  },
];

export default function Blog() {
  return (
    <div className="py-12 px-6">
      <style jsx global>{`
        @property --border-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .card-container {
          background: linear-gradient(45deg, #080b11, #1e293b 50%, #172033) padding-box,
                      conic-gradient(from var(--border-angle),
                        rgba(100, 116, 139, 0.48) 80%,
                        #8b5cf6 86%,
                        #a78bfa 90%,
                        #8b5cf6 94%,
                        rgba(100, 116, 139, 0.48)) border-box;
          border: 2px solid transparent;
          border-radius: 1rem;
          animation: borderRotate 4s linear infinite;
          overflow: hidden;
          height: 450px;
        }

        @keyframes borderRotate {
          to {
            --border-angle: 360deg;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.03, y: -10 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="card-container"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-transparent transform transition-shadow duration-300">
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white-900/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-white line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  {blog.excerpt}
                </p>
                <Link href={blog.link}>
                  <ButtonAnimatedGradient
                    text="Read More"
                    gradientFrom="#0f1747"
                    gradientTo="#0f1747"
                    borderColor="#b2b8f6"
                    className="w-full h-[40px] rounded-xl font-normal block"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 