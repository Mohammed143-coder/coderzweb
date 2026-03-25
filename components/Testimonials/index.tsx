"use client";

import { useEffect, useState } from "react";
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
    content:"We’re very happy with the website developed by CoderzWeb for our Asquare construction and real estate business. The website is highly optimised, quick, and SEO-friendly, and the price was reasonable. Everything was delivered on schedule, and communication was easy. Strongly advised for entrepreneurs searching for a trustworthy website development service in Krishnagiri and throughout India.",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
  {
    id: 5,
    name: "Sowmya",
    designation: "Sales manager",
    content:"Excellent web development service by coderzweb! They built our modern, fast website using Next.js. Great design, timely delivery, and professional support. Highly recommend for websites & web apps",
    image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
    star: 5,
  },
  // {
  //   id: 6,
  //   name: "Mohammed Faisal",
  //   designation: "Manager @faisalautos",
  //   content:
  //     "Best web development company in Krishnagiri. They built our auto parts store website and helped with Google Ads. Revenue doubled in 3 months!",
  //   image: <BsPersonCheck className="w-7 h-7" aria-hidden="true" />,
  //   star: 5,
  // },
];

const Testimonials = () => {
  const revealRef = useScrollReveal();
  const allTestimonials = getTestimonialData();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allTestimonials.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [allTestimonials.length]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % allTestimonials.length);

  return (
    <section
      className="relative z-10 bg-gray-light dark:bg-bg-color-dark py-16 lg:py-28 shadow"
      id="testimonials"
      aria-label="Client testimonials"
    >
      <div className="container" ref={revealRef}>
        <div className="reveal">
          <SectionTitle
            title="What Our Client Say"
            paragraph="Real feedback from businesses we've helped grow with professional websites and digital marketing solutions."
            center
          />
        </div>

        <div className="mt-10">
          {/* <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={goPrev}
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow transition hover:bg-white dark:bg-gray-800 dark:text-gray-200"
              aria-label="Previous testimonial"
            >
              ← Prev
            </button>
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {activeIndex + 1}/{allTestimonials.length}
            </div>
            <button
              onClick={goNext}
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow transition hover:bg-white dark:bg-gray-800 dark:text-gray-200"
              aria-label="Next testimonial"
            >
              Next →
            </button>
          </div> */}

          <div className="relative mx-auto w-full max-w-4xl">
            <div className="reveal transition-all duration-700">
              <SingleTestimonial testimonial={allTestimonials[activeIndex]} />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {allTestimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]" aria-hidden="true">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]" aria-hidden="true">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
