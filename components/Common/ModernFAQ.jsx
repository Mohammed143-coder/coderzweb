"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function ModernFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const faqs = [
    {
      question: "What is Web Development?",
      answer:
        "Web development is the process of building and maintaining websites. It includes web design, programming, and database management. Developers use HTML, CSS, and JavaScript to create responsive, user-friendly sites that work across all devices.",
    },
    {
      question: "What web development services do you offer?",
      answer:
        "We deliver custom websites, web apps, e-commerce solutions using modern tech stacks and Meta ads. Our clients see 40% faster load times and 3x higher conversion rates. We've launched successful projects with 98% client satisfaction.",
    },
    {
      question: "In which locations do you provide your services?",
      answer:
        "Coderzweb located in krishnagiri, but we provide services pan-India! From metros like Mumbai, Delhi, Bangalore to smaller cities across all 28 states. Enjoy seamless remote collaboration, local support, and on-time delivery regardless of location. ",
    },
    {
      question: "Affordable web hosting & domain services with support?",
      answer:
        "Yes! We offer Hostinger hosting plans with an exclusive 10% discount. Get lightning-fast speeds, 99.9% uptime, free SSL, and 24/7 Indian customer support. We have satisfied clients who trust our reliable hosting solutions for their businesses.",
    },
    {
      question: "How much does it cost to pay someone to create a website?",
      answer:
        "Absolutely! At Coderzweb, we provide websites at affordable and budget-friendly prices starting from ₹11,999. Get professional designs, mobile responsiveness, and SEO optimization. Clients saved 40% compared to market rates while achieving stunning results.",
    },
    {
      question: "What is the ROI of good website design?",
      answer:
        "At Coderzweb, we provide websites at affordable and budget-friendly prices that deliver good ROI. Clients see 3x more leads, 40% longer visitor engagement, and 40% higher conversions within 6 months. Invest ₹11,999, earn high value returns annually!",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have web apps which support for both iOS and Android. They're feature-complete and sync seamlessly with the web version, so you can work from anywhere.",
    },
    
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-4 py-20">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex h-20 w-20 transform items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-[#A2B2FB] shadow-xl shadow-purple-500/30 transition-all duration-300 hover:rotate-6 hover:scale-110">
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="mb-4 text-6xl font-bold text-black">
            Frequently Asked Questions
          </h1>
          <p className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <Sparkles className="h-5 w-5 text-purple-500" />
            Everything you need to know
            <Sparkles className="h-5 w-5 text-[#A2B2FB]" />
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative cursor-pointer overflow-hidden rounded-2xl border-2 bg-white transition-all duration-500 ${
                  openIndex === index
                    ? "border-[#A2B2FB] shadow-2xl shadow-purple-500/25"
                    : "border-gray-200 shadow-lg hover:border-purple-300 hover:shadow-2xl"
                } ${
                  hoverIndex === index ? "translate-y-[-4px] transform" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Animated shine overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      transform:
                        hoverIndex === index
                          ? "translateX(100%)"
                          : "translateX(-100%)",
                      transition: "transform 1.5s ease-in-out",
                      maskImage:
                        "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
                      opacity: 0.3,
                    }}
                  />
                </div>

                {/* Gradient glow on hover */}
                {hoverIndex === index && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />
                )}

                {/* Question */}
                <div className="relative flex items-center justify-between p-4">
                  <h3
                    className={`pr-8 text-lg font-semibold transition-colors duration-300 ${
                      openIndex === index || hoverIndex === index
                        ? "text-purple-600"
                        : "text-black"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 transform items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-[#A2B2FB] shadow-lg transition-all duration-500 ${
                      openIndex === index
                        ? "rotate-180 scale-110 shadow-purple-500/50"
                        : hoverIndex === index
                        ? "scale-110 shadow-purple-500/40"
                        : "shadow-purple-500/30"
                    }`}
                  >
                    <ChevronDown className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-6 pt-2">
                    <div className="via- mb-4 h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>
                    <p className="leading-relaxed text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-purple-500/10 to-transparent transition-opacity duration-300 ${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* 3D shadow layer */}
              <div
                className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-200/40 to-[#A2B2FB]/40 blur-xl transition-all duration-500 ${
                  hoverIndex === index
                    ? "translate-y-3 scale-[0.98] transform opacity-100"
                    : openIndex === index
                    ? "translate-y-2 scale-[0.99] transform opacity-70"
                    : "translate-y-1 transform opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl px-8 py-6 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl shadow-lg group">
            <p className="text-gray-700 mb-4 font-medium">Still have questions?</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
