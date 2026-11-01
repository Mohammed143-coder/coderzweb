"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ModernFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const revealRef = useScrollReveal();

  const faqs = [
    {
      question: "How much does it cost to build a website with CODERZWEB?",
      answer:
        "Professional website development starts at ₹13,999 for our Essential business package, which includes responsive Next.js landing page architecture, SSL security, and core SEO. Our Advanced animation and AI-enabled tier is ₹23,999, while custom e-commerce stores with payment gateway integrations start at ₹33,999.",
    },
    {
      question: "In which locations does CODERZWEB provide web design and marketing services?",
      answer:
        "Our physical office is located in Rajaji Nagar, Krishnagiri, and we provide on-site and remote web development across Krishnagiri, Hosur, Bangalore, Dharmapuri, Tirupattur, Bargur, Shoolagiri, and pan-India. We offer seamless collaboration with direct WhatsApp and phone support.",
    },
    {
      question: "Can CODERZWEB build custom web apps for startups and businesses in Bangalore and Hosur?",
      answer:
        "Yes. We specialize in engineering modern Next.js web applications, dynamic product catalogs for Hosur manufacturing/SIPCOT firms, and high-performance digital platforms for Bangalore startups and D2C brands—delivering metro-grade code at up to 30% lower costs than central metro agencies.",
    },
    {
      question: "How long does it take to design, develop, and launch a business website?",
      answer:
        "A standard 3 to 5-page business website takes 6 to 8 business days from initial wireframing to live deployment. Complex e-commerce platforms and custom web applications typically require 15 to 40 business days, including full payment gateway testing, mobile responsiveness, and Google search indexing.",
    },
    {
      question: "What e-commerce website development solutions do you provide?",
      answer:
        "We build fast, secure e-commerce storefronts equipped with Razorpay, UPI, and credit card payment gateways, mobile-first product catalogs, automated inventory syncing, cart recovery features, and direct WhatsApp order notifications to maximize sales conversions.",
    },
    {
      question: "How does official WhatsApp Business API help grow my local business?",
      answer:
        "Our WhatsApp API solution enables businesses to send automated instant replies, broadcast updates to thousands of opted-in customers, recover abandoned inquiries, and connect web leads directly into your sales CRM—accelerating lead-to-customer conversion rates.",
    },
    {
      question: "Do your website packages include hosting, domain, and post-launch maintenance?",
      answer:
        "Yes! Our packages include free .IN domain registration for the 1st year, high-speed cloud hosting setup, SSL security certificates, and 3 to 4 months of free technical maintenance to keep your site updated, secure, and bug-free.",
    },
    {
      question: "What is the expected ROI of investing in a professionally designed website?",
      answer:
        "A fast, modern website acts as an automated 24/7 lead generation engine. CODERZWEB clients typically experience up to 2x more customer inquiries, 50% faster loading speeds, and significantly higher local search rankings on Google within 3 to 6 months of launch.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]"
      ref={revealRef}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50" />
      <div className="absolute -left-20 top-1/2 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="reveal max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
            Knowledge Base
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Everything You <span className="text-primary text-glow">Need to Know</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Clear, transparent answers about our web architecture, pricing, locations, and growth strategies.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="reveal group overflow-hidden rounded-2xl border border-gray-100 bg-white/50 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white dark:border-white/5 dark:bg-[#111322]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                >
                  <h3
                    className={`pr-8 text-base md:text-lg font-bold transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/30"
                        : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent dark:via-white/5" />
                      <p className="text-sm md:text-base font-normal leading-relaxed text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}