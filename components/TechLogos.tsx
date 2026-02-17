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
        <div
            ref={revealRef}
            style={{ height: "200px", position: "relative", overflow: "hidden" }}
            className="reveal text-[#99ABFB] dark:text-white"
            aria-label="Technologies we use"
            role="region"
        >
            <LogoLoop
                logos={techLogos}
                speed={200}
                direction="left"
                logoHeight={48}
                gap={60}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
            />
        </div>
    );
}
