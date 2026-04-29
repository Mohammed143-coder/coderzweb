"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import SinglePortfolio from "./SinglePortfolio";
import { portfolioData } from "./portfolioData";

const Portfolio = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]" ref={revealRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50" />
      <div className="absolute -left-20 top-1/2 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="reveal max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
            Our Masterpieces
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Engineering <span className="text-primary text-glow">Digital Success</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A curated selection of high-performance web architectures that redefine business excellence in the digital age.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portfolioData.map((portfolio) => (
            <div key={portfolio.id} className="reveal h-full">
              <SinglePortfolio portfolio={portfolio} />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="reveal flex flex-col items-center justify-center gap-6">
          <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
            Ready to build your own success story?
          </p>
          <Link
            href="#contact"
            className="group relative flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-primary px-10 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(74,108,247,0.5)]"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-[100%]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;