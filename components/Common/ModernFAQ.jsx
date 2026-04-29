"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ModernFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const revealRef = useScrollReveal();

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
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]" ref={revealRef}>
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
            Strategic answers for high-growth businesses. Understanding the digital architecture behind your success.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal group overflow-hidden rounded-2xl border border-gray-100 bg-white/50 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:bg-white dark:border-white/5 dark:bg-[#111322]/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className={`pr-8 text-lg font-bold transition-colors duration-300 ${
                  openIndex === index ? "text-primary" : "text-gray-900 dark:text-white"
                }`}>
                  {faq.question}
                </h3>
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                  openIndex === index 
                    ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/30" 
                    : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                }`}>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-6 pb-6">
                  <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent dark:via-white/5" />
                  <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
