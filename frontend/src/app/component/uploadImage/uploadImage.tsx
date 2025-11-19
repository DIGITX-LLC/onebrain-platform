import { ArrowUpIcon, MessageCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function uploadImage() {

  return (
    <div className=" max-w-6xl mx-auto  font-sans pt-16 grid grid-cols-1 lg:grid-cols-2  gap-12">
     
        {/* left section */}
        <div className=" space-y-10 ">
           <div className="flex gap-2">
            <Image src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/Vector.png" alt="Icon" width={40} height={40} /> 
            <h2 className="text-2xl lg:text-4xl font-medium">Sora</h2>
           </div>

           <div className=" space-y-4">
            <h1 className="font-bold text-base lg:text-5xl">From words to words </h1>
            <p className="font-normal  text-base">Start with a prompt or upload an image to create videos <br /> with unprecedented realism in any style: cinematic, <br /> animated, photorealistic, or surreal.</p>
           </div>

           <div className="rounded-lg bg-[#111118] flex gap-2 mt-15 border border-gray-500 ">
            <p className="p-2 text-[#94A3B8]">Music, sound effects, and dialogue are automatically included in <br /> videos to make every scene complete.</p>
              <div className="p-2">
                <button className="bg-white  p-2 rounded-full">
                <ArrowUpIcon className="h-6 w-6 text-black " />
                </button>
              </div>
           </div>

        </div>



    {/* Right section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-2">
    
        <div className="flex flex-col gap-2">
         
          <video src=" https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video1.mp4" className="w-full h-[153px] rounded-lg object-cover" 
          autoPlay
          loop
          muted
          controls={false}
          playsInline></video>

          <video src=" https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video2.mp4" className="w-full h-[280px] rounded-lg object-cover" 
          autoPlay
          loop
          muted
          controls={false}
          playsInline></video>
        </div>

        <div className="flex flex-col gap-2">
          
          <video src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video3.mp4" className="w-full h-[280px] rounded-lg object-cover" 
          autoPlay
          loop
          muted
          controls={false}
          playsInline></video>

          <video src="https://digitx-storage.blr1.cdn.digitaloceanspaces.com/Assets/onebrain-assets/video4.mp4" className="w-full h-[154px] rounded-lg object-cover" 
          autoPlay
          loop
          muted
          controls={false}
          playsInline></video>
        </div>
      </div>

    
    </div>
  );
}
