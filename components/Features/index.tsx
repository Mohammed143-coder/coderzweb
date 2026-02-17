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

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 reveal-stagger">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
