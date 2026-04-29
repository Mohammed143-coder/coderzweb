"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { BsPersonCheck } from "react-icons/bs";
import { useScrollReveal } from "@/lib/useScrollReveal";

const getTestimonialData = (): Testimonial[] => [
  {
    id: 1,
    name: "Hasane Mehadi",
    designation: "Co-Founder @hitechconstructions",
    content:
      "Professional web development with clean design, fast delivery & SEO-friendly sites. Perfect for startups & businesses looking to grow online.",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
  {
    id: 2,
    name: "Ayub Khan",
    designation: "Co-Founder @coderzweb",
    content:
      "Creative team delivering responsive, modern websites. Great support, affordable packages & strong focus on user experience & performance.",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
  {
    id: 3,
    name: "Sameer",
    designation: "Founder @asmobiles",
    content:
      "Trusted web developers for custom websites & portfolios. SEO-optimized, mobile-friendly & tailored solutions for businesses of all sizes.",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
  {
    id: 4,
    name: "Asquare Constructions",
    designation: "Owner @Asquare Constructions",
    content:"We’re very happy with the website developed by CoderzWeb for our Asquare construction and real estate business. The website is highly optimised, quick, and SEO-friendly, and the price was reasonable.",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
  {
    id: 5,
    name: "Sowmya",
    designation: "Sales manager",
    content:"Excellent web development service by coderzweb! They built our modern, fast website using Next.js. Great design, timely delivery, and professional support.",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
  {
    id: 6,
    name: "Mohammed Faisal",
    designation: "Manager @faisalautos",
    content:
      "Best web development company in Krishnagiri. They built our auto parts store website and helped with Google Ads. Revenue doubled in 3 months!",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
];

const Testimonials = () => {
  const revealRef = useScrollReveal();
  const allTestimonials = getTestimonialData();
  const featuredTestimonial = allTestimonials[3]; // Asquare Constructions as featured
  const row1 = [...allTestimonials, ...allTestimonials];
  const row2 = [...allTestimonials.reverse(), ...allTestimonials];

  return (
    <section
      className="relative z-10 overflow-hidden bg-gray-light py-16 dark:bg-bg-color-dark lg:py-28"
      id="testimonials"
      aria-label="Client testimonials"
    >
      {/* Background Decoration */}
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#4A6CF705_0%,transparent_100%)]" />
      
      <div className="container" ref={revealRef}>
        <div className="reveal">
          <SectionTitle
            title="Success Stories"
            paragraph="See how we've helped businesses transform their digital presence with modern, high-performance web solutions."
            center
          />
        </div>

        {/* Featured Spotlight */}
        <div className="mb-20 flex justify-center">
          <div className="w-full max-w-3xl">
            <SingleTestimonial testimonial={featuredTestimonial} isFeatured />
          </div>
        </div>

        {/* Trusted By Header */}
        <div className="mb-12 flex flex-col items-center justify-center space-y-6 opacity-60">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
            Trusted by fast-growing companies
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 px-4">
            {["HI-TECH", "CODERZWEB", "AS MOBILES", "ASQUARE", "FAISAL AUTOS"].map((brand) => (
              <span key={brand} className="text-sm font-black tracking-widest text-gray-400 dark:text-gray-500">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="relative flex flex-col gap-6 py-10">
        {/* Row 1 */}
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex animate-marquee gap-6 py-4 group-hover:[animation-play-state:paused]" style={{ "--duration": "40s", "--gap": "16px" } as React.CSSProperties}>
            {row1.map((testimonial, idx) => (
              <div key={`row1-${idx}`} className="w-[350px] shrink-0 md:w-[450px]">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex animate-marquee-reverse gap-6 py-4 group-hover:[animation-play-state:paused]" style={{ "--duration": "50s", "--gap": "24px" } as React.CSSProperties}>
            {row2.map((testimonial, idx) => (
              <div key={`row2-${idx}`} className="w-[350px] shrink-0 md:w-[450px]">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -left-20 top-1/2 -z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[100px]" />
    </section>
  );
};

export default Testimonials;
