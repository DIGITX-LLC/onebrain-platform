"use client";
import Image from 'next/image';
import React, { useRef, useState } from 'react';


export default function Vo3TrendingSection() {
  

    return (
        <div className=" max-w-6xl mx-auto  font-sans ">
            
           
                {/* Main Title */}
                <div className="text-center  mb-12">
                    <h1 className="lg:text-5xl  font-semibold">
                        Explore the Power of ChatGPT with OneBr<span className='text-[#69aafa]'>ai</span>n
                    </h1>
                    <h3 className='text-2xl text-[#D1D5DB] font-semibold mt-2'>ChatGPT in Bangladesh is Now Smarter Than Ever </h3>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-16">
                    {/* Left Content */}
                    <div className="mt-12">
                        <p className="text-[#D1D5DB] text-xl font-normal pl-20">
                           Discover the best ChatGPT models—including ChatGPT-4, the newest ChatGPT-5 and more—and see how people in Bangladesh use them for study, work, and creativity. From crafting perfect Bangla blogging content to ChatGPT prompt for photo editing, grammar check, and detailed Bangla tutorial, ChatGPT delivers smart answers in seconds. Learn about ChatGPT pricing, how to use ChatGPT in Bangladesh, and subscribe to a ChatGPT Premium subscription easily with OneBrain to access all features in Bangla or English.
                        </p>
                        
                       
                    </div>

                    {/* Right card */}
                    <div className="flex justify-center mt-4 ">
                        <div className="w-full max-w-md">
                            <Image src="/chatGpt section/chatGpt.png" alt="Description" width={500} height={300} />
                        </div>
                    </div>
                </div>

                
            </div>

            
       
    );
}
