"use client";
import Link from "next/link";
import TypeWriter from "./TypeWriter";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Hero = () => {
  const revealRef = useScrollReveal();

  return (
    <>
      <section
        id="home"
        aria-label="Hero section"
        className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-white pb-16 pt-[120px] dark:bg-[#030712] md:pt-[150px] xl:pt-[180px]"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0 -z-10 bg-mesh opacity-50 dark:opacity-100" />
        <div className="absolute inset-0 -z-10 bg-spotlight opacity-30" />
        
        <div className="container relative" ref={revealRef}>
          <div className="mx-auto max-w-[1000px] text-center">
            {/* Tagline */}
            <div className="reveal mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
              Digital Excellence Redefined
            </div>

            <h1 className="reveal mb-8 text-4xl font-black leading-[1.1] tracking-tight text-black dark:text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Proven Digital <br /> Solutions for Your <br />
              <span className="text-primary text-glow">
                <TypeWriter
                  sentences={[
                    "Startup Growth.",
                    "Local Success.",
                    "Brand Expansion.",
                    "Online Dominance.",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={1500}
                />
              </span>
            </h1>

            <p className="reveal mx-auto mb-12 max-w-[700px] text-lg font-medium leading-relaxed text-gray-500 dark:text-gray-400 md:text-xl">
              We engineer high-performance digital experiences including custom web architecture, SEO dominance, and AI-driven automation.
            </p>

            <div className="reveal flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Link
                href="#contact"
                className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-primary px-8 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(74,108,247,0.5)] sm:w-auto"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-[100%]" />
              </Link>
              
              <Link
                href="/#pricing"
                className="group flex h-14 w-full items-center justify-center rounded-2xl border border-gray-200 bg-white/50 px-8 text-base font-bold text-black backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-white dark:border-white/10 dark:text-white dark:hover:bg-white/10 sm:w-auto"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Orbs */}
        <div className="absolute -left-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
      </section>
    </>
  );
};

export default Hero;
