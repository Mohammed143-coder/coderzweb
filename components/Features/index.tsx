"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Features = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 text-gray-400" aria-label="Our services and features">
      <div className="container" ref={revealRef}>
        <div className="reveal">
          <SectionTitle
            title="Premium Web Solutions"
            paragraph="Empower your business with high-performance websites, AI-driven applications, and custom software. We combine cutting-edge technology with strategic design to drive growth."
            center
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12 reveal-stagger">
          {featuresData.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`reveal h-full ${
                index === 0 || index === 3 ? "md:col-span-3 lg:col-span-8" : "md:col-span-3 lg:col-span-4"
              }`}
            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
