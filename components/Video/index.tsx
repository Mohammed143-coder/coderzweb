"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Video = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28" aria-label="Our work showcase" id="showcase">
      <div className="container" ref={revealRef}>
        <div className="reveal">
          <SectionTitle
            title="We are ready to help"
            paragraph="Our expert team delivers reliable web solutions, guiding startups and businesses with innovative designs, development, and digital growth."
            center
            mb="80px"
          />
        </div>

        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4">
            <div
              className="reveal-scale relative mx-auto max-w-[770px] overflow-hidden rounded-md"
            >
              <div className="relative aspect-[77/60] items-center justify-center ">
                <Image 
                  src="/images/video/coderzweb-ramzan-p.jpg" 
                  alt="CoderzWeb team at work" 
                  fill
                  sizes="(max-width: 768px) 100vw, 770px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
