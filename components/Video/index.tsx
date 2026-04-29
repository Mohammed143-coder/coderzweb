"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Video = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]" ref={revealRef}>
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="reveal max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
            Project Showcase
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Engineering <span className="text-primary text-glow">Future-Ready</span> Apps
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            From strategic architecture to final deployment, we build the digital infrastructure that empowers your business to dominate.
          </p>
        </div>

        <div className="reveal-scale relative mx-auto max-w-[1000px]">
          {/* Glass Container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-2 shadow-2xl dark:border-white/5 dark:bg-white/5 backdrop-blur-xl">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
              <Image 
                src="/images/video/cw-may-1-poster.webp" 
                alt="CoderzWeb team at work" 
                width={1000}
                height={500}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Play Button Overlay (Stylized) */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_50px_rgba(74,108,247,0.5)] transition-transform hover:scale-110">
                  <svg className="ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div> */}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-[60px]" />
          <div className="absolute -right-10 -bottom-10 -z-10 h-40 w-40 rounded-full bg-purple-500/20 blur-[60px]" />
        </div>
      </div>
    </section>
  );
};

export default Video;
