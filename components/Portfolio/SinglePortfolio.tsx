"use client";

import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "../../types/portfolio";

// Category badges with professional colors
const categoryColors: { [key: string]: string } = {
  Business: "bg-slate-50 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300",
  "Real Estate": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  SaaS: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  Construction: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Finance: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Static business website": "bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  Portfolio: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  "Web App": "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
};

// Accent colors for underline effect
const accentColors: { [key: string]: string } = {
  Business: "from-slate-500 to-slate-600",
  "Real Estate": "from-amber-500 to-orange-600",
  SaaS: "from-violet-500 to-purple-600",
  Construction: "from-yellow-500 to-orange-600",
  Finance: "from-green-500 to-emerald-600",
  "Static business website": "from-pink-500 to-rose-600",
  Portfolio: "from-cyan-500 to-blue-600",
  "Web App": "from-indigo-500 to-purple-600",
};

// Tech icons
const techIcons: { [key: string]: string } = {
  "Next.js": "⚡",
  React: "⚛️",
  "Node.js": "🟢",
  MongoDB: "🍃",
  "Tailwind CSS": "🎨",
  Vercel: "▲",
  Tailwind: "🎨",
  Stripe: "💳",
  HTML: "📄",
  CSS: "🎨",
  JavaScript: "📜",
  PWA: "📱",
  Geolocation: "📍",
  "Framer Motion": "✨",
  API: "🔌",
  Forms: "📋",
};

const SinglePortfolio = ({ portfolio }: { portfolio: Portfolio }) => {
  const accentClass = accentColors[portfolio.category] || "from-gray-500 to-gray-600";
  const categoryBg = categoryColors[portfolio.category] || "bg-gray-50 text-gray-700";

  return (
    <div className="group h-full flex flex-col">
      {/* Card Container */}
      <div className="relative h-full flex flex-col bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-xl backdrop-blur-sm">
        
        {/* Top Accent Line */}
        {/* <div className={`h-1 w-full bg-gradient-to-r ${accentClass}`}></div> */}

        {/* Image Section - Live Site Preview */}
        <div className="relative h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
          <Image
            src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(portfolio.link)}?w=600&h=400`}
            alt={`${portfolio.title} - Live Preview`}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyudxvier9AdSdQadh/HLRGJvEYKLGU0YaX9P8AxSaHU="
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={600}
            height={400}
            onError={(e) => {
              // Fallback to placeholder on error
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          
          {/* Fallback for when image fails to load */}
          <div className="fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
            <div className="text-center">
              <div className="text-4xl mb-2 opacity-60">
                {portfolio.technologies?.[0] && techIcons[portfolio.technologies[0]] ? (
                  techIcons[portfolio.technologies[0]]
                ) : (
                  "🌐"
                )}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Preview unavailable</div>
            </div>
          </div>

          {/* Live Status Badge */}
          {portfolio.isLive && (
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Live
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6 gap-4">
          
          {/* Category & Title */}
          <div>
            <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-md mb-3 ${categoryBg}`}>
              {portfolio.category}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              {portfolio.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
            {portfolio.description}
          </p>

          {/* Tech Stack */}
          {portfolio.technologies && portfolio.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {portfolio.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
              {portfolio.technologies.length > 3 && (
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-2.5 py-1 rounded-md">
                  +{portfolio.technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* CTA Button */}
          <Link
            href={portfolio.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-2 text-sm font-semibold text-primary dark:text-blue-400 hover:text-primary/80 dark:hover:text-blue-300 transition-colors group/link"
          >
            Explore Project
            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolio;