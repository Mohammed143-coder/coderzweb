"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";

const WhatsAppWidget = ({
  phoneNumber = "918072770837",
  agentName = "CODERZWEB Support",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const quickTopics = [
    { 
      label: "🌐 Web Development", 
      text: "Hi CODERZWEB, I'm looking to build a new business website." 
    },
    { 
      label: "🛒 E-Commerce Store", 
      text: "Hi CODERZWEB, I need an online e-commerce store with payment gateways." 
    },
    { 
      label: "📈 Meta & Google Ads", 
      text: "Hi CODERZWEB, I'm interested in lead generation and performance marketing." 
    },
    { 
      label: "🤖 WhatsApp API", 
      text: "Hi CODERZWEB, I want to integrate official WhatsApp API for my business." 
    },
    { 
      label: "📱 SMM Marketing", 
      text: "Hi CODERZWEB, I'm looking for social media marketing, content creation & page management." 
    },
    { 
      label: "🎨 Logo & Branding", 
      text: "Hi CODERZWEB, I need a custom creative logo and brand identity design for my business." 
    },
    { 
      label: "🎬 Video & Reels", 
      text: "Hi CODERZWEB, I'm interested in professional promotional videos, ad creatives & reels production." 
    },
  ];

  const defaultMsg = selectedTopic 
    ? encodeURIComponent(selectedTopic) 
    : encodeURIComponent("Hi CODERZWEB, I'm interested in your web development & growth marketing services.");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end animate-bounce">
      {/* Interactive Popup Card */}
      {isOpen && (
        <div className="mb-3 sm:mb-4 flex flex-col w-[calc(100vw-2rem)] sm:w-[350px] max-w-[360px] max-h-[calc(100vh-2rem)] sm:max-h-[580px] overflow-hidden rounded-3xl border border-gray-100 bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#111322]/95 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Card Header (Fixed at top) */}
          <div className="shrink-0 bg-gradient-to-r from-primary to-[#25D366] p-3 sm:p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/20 text-xl text-white backdrop-blur-md">
                  <FaWhatsapp />
                  {/* Online Pulse Dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400 dark:border-gray-900" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold leading-tight">{agentName}</h4>
                  <p className="text-[11px] sm:text-xs font-medium text-white/85">Typically replies in few minutes</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95"
                aria-label="Close WhatsApp chat"
              >
                <IoClose className="text-base sm:text-lg" />
              </button>
            </div>
          </div>

          {/* Card Body (Scrollable container that fits any viewport) */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-white/10">
            {/* Agent Message Bubble */}
            <div className="mb-3 inline-block rounded-2xl rounded-tl-sm bg-gray-100 p-3 text-xs sm:text-sm font-medium leading-relaxed text-gray-700 dark:bg-white/5 dark:text-gray-300">
              Hi there! 👋 How can we help you engineer your website or scale your business today?
            </div>

            {/* Inquiry Heading */}
            <p className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
              Select inquiry:
            </p>

            {/* 2-Column Responsive Chips Grid with Scroll Cap */}
            <div className="mb-3.5 grid grid-cols-2 gap-1.5 max-h-36 sm:max-h-44 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/10">
              {quickTopics.map((topic, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedTopic(topic.text)}
                  className={`rounded-xl border px-2.5 py-2 text-left text-[11px] sm:text-xs font-medium transition-all duration-200 leading-snug ${
                    selectedTopic === topic.text
                      ? "border-primary bg-primary text-white shadow-sm shadow-primary/20"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-primary/40 hover:bg-gray-100 dark:border-white/5 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-center text-xs sm:text-sm font-bold text-white shadow-md shadow-[#25D366]/20 transition-all duration-300 hover:bg-[#20ba59] hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-[0.98]"
            >
              <span>Start Chat on WhatsApp</span>
              <BsSendFill className="text-xs" />
            </Link>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#25D366] text-2xl sm:text-3xl text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-xl hover:shadow-[#25D366]/50 active:scale-95"
      >
        {isOpen ? (
          <IoClose className="text-xl sm:text-2xl transition-transform duration-300" />
        ) : (
          <>
            <FaWhatsapp className="transition-transform duration-300 group-hover:rotate-6" />
            {/* Live Green Pulsing Ring */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-gray-900" />
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;