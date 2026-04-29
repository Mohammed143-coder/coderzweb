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
  const categoryBg = categoryColors[portfolio.category] || "bg-gray-50 text-gray-700";

  return (
    <div className="group relative h-full flex flex-col">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
      
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 dark:border-white/5 dark:bg-[#111322]">
        
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(portfolio.link)}?w=800&h=600`}
            alt={portfolio.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={800}
            height={600}
            unoptimized
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111322] via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
          
          {/* Status Badge */}
          {portfolio.isLive && (
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Live Deployment
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-8">
          <div className="mb-4">
            <span className={`inline-block rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${categoryBg} bg-primary/5 text-primary`}>
              {portfolio.category}
            </span>
          </div>
          
          <h3 className="mb-4 text-2xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
            {portfolio.title}
          </h3>

          <p className="mb-8 text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
            {portfolio.description}
          </p>

          <div className="mt-auto">
            {/* Tech Stack */}
            <div className="mb-6 flex flex-wrap gap-2">
              {portfolio.technologies?.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-400 dark:bg-white/5 dark:text-gray-500">
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={portfolio.link}
              target="_blank"
              className="inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:tracking-[0.3em]"
            >
              Explore Project
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolio;