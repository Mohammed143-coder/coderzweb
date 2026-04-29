"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";


const Pricing = () => {
  const [activeTab, setActiveTab] = useState("website");
  const revealRef = useScrollReveal();

  return (
    <section id="pricing" className="relative z-10 py-24 md:py-32 overflow-hidden bg-white dark:bg-[#030712]" ref={revealRef}>
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-30 dark:opacity-50" />
      <div className="absolute -left-20 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -right-20 bottom-1/3 -z-10 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="container">
        <div className="reveal max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary md:text-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
            Flexible Investment
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            Transparent <span className="text-primary text-glow">Pricing</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Select the perfect growth engine for your business. Scalable solutions tailored for startups and global enterprises.
          </p>

          {/* TAB NAVIGATION */}
          <div className="reveal flex flex-wrap justify-center gap-3">
            {["website", "marketing", "whatsapp"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 
                ${activeTab === tab
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
                  }`}
              >
                {tab === "website" && "Web Architecture"}
                {tab === "marketing" && "Digital Strategy"}
                {tab === "whatsapp" && "Omnichannel API"}
              </button>
            ))}
          </div>
        </div>

        {/* ================= WEBSITE PRICING ================= */}
        {activeTab === "website" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 reveal-stagger">
            <PricingBox
              packageName="Essential"
              price={"11,999"}
              subtitle="The strategic starting point for emerging startups and lead-generation focused landing pages."
            >
              <OfferList text="1-2 Pages Architecture" status="active" />
              <OfferList text="High-Performance UX/UI" status="active" />
              <OfferList text="Social Ecosystem Integration" status="active" />
              <OfferList text="Core SEO Optimization" status="active" />
              <OfferList text="Lead Capture Engine" status="active" />
              <OfferList text="Premium SSL Security" status="active" />
              <OfferList text="3 months free Maintenance" status="active" />
            </PricingBox>

            <PricingBox
              packageName="Recommended"
              price={"17,999"}
              subtitle="The industry standard for high-growth brands requiring custom animations and AI integration."
              isFeatured
            >
              <OfferList text="Everything in Essential" status="active" />
              <OfferList text="5-Page Elite Architecture" status="active" />
              <OfferList text="Cinematic UI Animations" status="active" />
              <OfferList text="Advanced SEO Dominance" status="active" />
              <OfferList text="Google Ecosystem Setup" status="active" />
              <OfferList text="Free .IN Domain & Hosting" status="active" />
              <OfferList text="Neural AI Chatbot v1" status="active" />
              <OfferList text="4 months free Maintenance" status="active" />
            </PricingBox>

            <PricingBox
              packageName="Web Booster"
              price={"23,999"}
              subtitle="Full-scale digital transformation with PWA capabilities and comprehensive multi-language support."
            >
              <OfferList text="Everything in Recommended" status="active" />
              <OfferList text="Full-Stack Web App (PWA)" status="active" />
              <OfferList text="Scalable Database Integration" status="active" />
              <OfferList text="AI Agent with Live Sync" status="active" />
              <OfferList text="Multi-Language Support" status="active" />
              <OfferList text="Technical SEO Audit" status="active" />
              <OfferList text="GMB Global Authority" status="active" />
              <OfferList text="6 months free Maintenance" status="active" />
            </PricingBox>

            <PricingBox
              packageName="Commerce"
              price={"27,999"}
              subtitle="Engineered for modern high-volume retail. Lightning-fast Shopify experiences for global brands."
            >
              <OfferList text="Global Commerce Strategy" status="active" />
              <OfferList text="Custom Liquid/React UI" status="active" />
              <OfferList text="Domain/Hosting Discounts" status="active" />
              <OfferList text="Cart Optimization Suite" status="active" />
              <OfferList text="Mobile-First Architecture" status="active" />
              <OfferList text="Omnichannel Integration" status="active" />
              <OfferList text="Inventory Automation" status="active" />
              <OfferList text="6 months free Maintenance" status="active" />
            </PricingBox>
          </div>
        )}

        {/* ================= DIGITAL MARKETING ================= */}
        {activeTab === "marketing" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 reveal-stagger">
            <PricingBox
              packageName="Starter"
              price={"6,599"}
              subtitle="Aggressive brand entry package for local businesses seeking immediate social authority."
            >
              <OfferList text="Strategic Scriptwriting" status="active" />
              <OfferList text="1 Professional video shoot + video editing with Animation" status="active" />
              <OfferList text="Meta Ads for 3 Days ads credit is included" status="active" />
              <OfferList text="2 Targeted Campaign Setup" status="active" />
              <OfferList text="Femal Voiceover Casting (optional)" status="active" />
              <OfferList text="Brand Trust Foundation" status="active" />
            </PricingBox>

            <PricingBox
              packageName="Recommended"
              price={"11,499"}
              subtitle="Scaling engine for brands ready to capture market share through high-frequency content."
              isFeatured
            >
              <OfferList text="4 Elite Visual Assets" status="active" />
              <OfferList text="Seasonal Branding Suite" status="active" />
              <OfferList text="2 Premium Video Shoots" status="active" />
               <OfferList text="2 promotional Video Editing with Animation " status="active" />
              <OfferList text="Meta Ads Engine (3 Days)" status="active" />
              <OfferList text="3 time campaign setup" status="active" />
              <OfferList text="Script Writing for promotion (optional) " status="active" />
            </PricingBox>

            <PricingBox
              packageName="Growth"
              price={"13,499"}
              subtitle="Full-spectrum digital marketing dominance for businesses serious about global expansion."
            >
              <OfferList text="6 Premium Visual Assets" status="active" />
              <OfferList text="2 Production video Shoots" status="active" />
              <OfferList text="2 promotional Video Editing with Animation " status="active" />
              <OfferList text="Meta Ads Engine (3 Days)" status="active" />
              <OfferList text="4 time Campaign Setup" status="active" />
              <OfferList text="Script Writing for promotion (optional)" status="active" />
              <OfferList text="GMB Authority Growth" status="active" />
            </PricingBox>
          </div>
        )}

        {/* ================= WHATSAPP API ================= */}
        {activeTab === "whatsapp" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto reveal-stagger">
            <PricingBox
              packageName="Starter API"
              price={"6,599"}
              subtitle="Automated customer engagement bridge for small teams to centralize communications."
            >
              <OfferList text="Official WhatsApp API v2" status="active" />
              <OfferList text="Unlimited Broadcast Engine" status="active" />
              <OfferList text="Zero Setup Friction" status="active" />
              <OfferList text="Scheduled Narrative Flows" status="active" />
              <OfferList text="Omnichannel CRM Access" status="active" />
              <OfferList text="Click-to-WhatsApp Ads" status="active" />
              <OfferList text="Shared Inbox Core" status="active" />
              <OfferList text="3 Months Access" status="active" />
            </PricingBox>

            <PricingBox
              packageName="Growth API"
              price={"12,599"}
              subtitle="The elite communication suite with neural AI integration and high-volume broadcast limits."
              isFeatured
            >
              <OfferList text="Official WhatsApp API v2" status="active" />
              <OfferList text="Unlimited Enterprise Broadcast" status="active" />
              <OfferList text="Zero Setup Friction" status="active" />
              <OfferList text="Advanced AI Chatbot Bridge" status="active" />
              <OfferList text="Custom API Integrations" status="active" />
              <OfferList text="Advanced Click-Tracking" status="active" />
              <OfferList text="Multi-Agent Shared Inbox" status="active" />
              <OfferList text="12 Months Access" status="active" />
            </PricingBox>
          </div>
        )}

        {/* Footer CTA */}
        <div className="reveal mt-20 flex flex-col items-center justify-center text-center">
          <p className="mb-8 text-lg font-medium text-gray-500 dark:text-gray-400">
            "Results-driven architecture, engineered for <span className="text-black dark:text-white font-bold">your business growth.</span>"
          </p>

          <Link
            href="tel:918072770837"
            className="group relative flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-primary px-10 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(74,108,247,0.5)]"
          >
            <span className="relative z-10">Connect With Strategy Team</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-[100%]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
