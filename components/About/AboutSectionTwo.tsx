"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

const AboutSectionTwo = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]" ref={revealRef}>
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50" />
      <div className="absolute -right-20 top-1/2 -z-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="reveal-left relative mx-auto aspect-[25/24] max-w-[500px]">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-bl from-primary/20 to-purple-500/20 blur-[80px]" />
              <Image
                src="/images/about/about-image-2.svg"
                alt="Bug free code illustration"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Bug free code illustration"
                fill
                className="hidden object-contain dark:block"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-xl lg:pl-12">
              <div className="mb-12">
                <div className="reveal mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
                  <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Our Core Values
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                  Engineered for <span className="text-primary text-glow">Perfection</span>
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  {
                    title: "Elite Dedicated Support",
                    desc: "Our commitment to your growth doesn't end with deployment. We provide elite-tier support to ensure your digital presence is always active."
                  },
                  {
                    title: "Bug-Free Performance",
                    desc: "We write clean, efficient, and well-documented code designed for high speed and scalability. No bloat, just pure performance."
                  },
                  {
                    title: "Premier Tech Stack",
                    desc: "Leveraging the latest technologies like Next.js, AI integration, and cloud-native solutions to keep you ahead of the competition."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="reveal-right group">
                    <h3 className="mb-3 text-xl font-black text-black dark:text-white transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
