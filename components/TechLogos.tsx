"use client";

import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { SiMongodb } from "react-icons/si";
import dynamic from "next/dynamic";
import { useScrollReveal } from "@/lib/useScrollReveal";

const LogoLoop = dynamic(() => import("@/components/LogoLoop"), { ssr: false });

const techLogos = [
    { node: <TiHtml5 />, title: "HTML5" },
    { node: <TbBrandTailwind />, title: "Tailwind CSS" },
    { node: <FaNode />, title: "Node.js" },
    { node: <FaJava />, title: "Java" },
    { node: <IoLogoJavascript />, title: "JavaScript" },
    { node: <FaReact />, title: "React" },
    { node: <TbBrandNextjs />, title: "Next.js" },
    { node: <TbBrandTypescript />, title: "TypeScript" },
    { node: <SiMongodb />, title: "MongoDB" },
];

export default function TechLogos() {
    const revealRef = useScrollReveal();

    return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712] " ref={revealRef}>
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50 " />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="reveal max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
            Our Tech Stack
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Powered by <span className="text-primary text-glow">Elite</span> Technologies
          </h2>
        </div>

        <div className="reveal relative overflow-hidden  py-10 backdrop-blur-xl dark:bg-[#111322]/50">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={48}
            gap={80}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
          />
        </div>
      </div>
    </section>
    );
}
