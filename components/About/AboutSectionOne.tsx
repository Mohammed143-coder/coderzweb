"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

import { HiCheck } from "react-icons/hi";

const AboutSectionOne = () => {
  const revealRef = useScrollReveal();


  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]" ref={revealRef}>
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50" />
      <div className="absolute -left-20 top-1/2 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="reveal max-w-4xl mb-12">
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
                Who We Are
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                Engineering <span className="text-primary text-glow">High-Performance</span> Digital Ecosystems
              </h2>
              
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
                We don&apos;t just build websites; we create high-converting digital experiences. Our team combines premium design with data-driven marketing to scale your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Website & Web Apps",
                  "Enhanced Security",
                  "Cost-Effective Growth",
                  "Elite Support",
                  "Scalable Infrastructure",
                  "ROI-Driven Ads"
                ].map((item, idx) => (
                  <div key={idx} className="reveal group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/50 p-4 shadow-sm backdrop-blur-md transition-all hover:border-primary/20 hover:bg-white dark:border-white/5 dark:bg-[#111322]/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition-transform group-hover:scale-110">
                      <HiCheck />
                    </div>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="reveal-scale relative mx-auto aspect-[25/24] max-w-[500px]">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-[80px]" />
              <Image
                src="/images/about/about-image.svg"
                alt="Premium service illustration"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="Premium service illustration"
                fill
                className="hidden object-contain dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
