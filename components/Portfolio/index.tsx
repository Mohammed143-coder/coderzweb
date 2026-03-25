"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import SinglePortfolio from "./SinglePortfolio";
import { portfolioData } from "./portfolioData";

const Portfolio = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden" ref={revealRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="reveal max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary dark:text-blue-400">
              Our Work
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 dark:bg-blue-400/50"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Projects that <span className="bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Drive Results</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Explore a collection of carefully crafted web solutions. Each project represents our commitment to quality, performance, and delivering real business impact.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {portfolioData.map((portfolio) => (
            <div key={portfolio.id} className="reveal">
              <SinglePortfolio portfolio={portfolio} />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Interested in what we can do for you?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-blue-500/30"
          >
            Let&apos;s Talk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;