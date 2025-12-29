"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Link from "next/link";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("website");

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 ">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Get top-quality digital solutions with transparent and flexible pricing plans."
          center
          width="665px"
        />
        <div className="text-center max-w-5xl mx-auto mb-10">

          <p className="text-gray-500 text-lg leading-relaxed">
            In todays digital world, Online presence is not just about posting — its about
            <span className="font-semibold text-black"> building visibility, trust, and sales.</span>
            Our Digital crafted packages are carefully designed for business growth, not just followers.
          </p>

        </div>
        {/* TOGGLE BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["website", "marketing", "whatsapp"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition 
              ${activeTab === tab
                  ? "bg-[#4A6CF7] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab === "website" && "Website"}
              {tab === "marketing" && "Digital Marketing"}
              {tab === "whatsapp" && "WhatsApp API"}
            </button>
          ))}
        </div>

        {/* ================= WEBSITE PRICING ================= */}
        {activeTab === "website" && (

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">

            <PricingBox
              packageName="Essential"
              price={"11,999"}
              subtitle="One-pager or starter website, conversion-focused, perfect for product launches or lead gen."
            >
              <OfferList text="Landing page or static website 1 – 3 pages (Home, About, Contact)" status="active" />
              <OfferList text="Responsive design (looks great on all devices)" status="active" />
              <OfferList text="Social media integration " status="active" />
              <OfferList text="Website optimization with advance auditing tool (lazy loading, image compression)" status="active" />
              <OfferList text="Contact form integration (email capture / WhatsApp link)" status="active" />
              <OfferList text="Free SSL + Free basic hosting for a year" status="active" />
              <OfferList text="6 months free website maintenace" status="active" />
            </PricingBox>

            <PricingBox
              packageName="Recommended"
              price={"17,999"}
              subtitle="Your brand needs. Clean, scalable, and intentional with AI power chat bot."
            >
              <span className="absolute -top-4 font-medium right-8 border-2 border-[#A2B2FB] bg-[#A2B2FB] text-white rounded-xl p-1 shadow-lg skew-y-3 shadow-[#99ABFB]">
                Most Popular
              </span>
              <OfferList text="Starter package features included" status="active" />
              <OfferList text="4 – 5 pages (Home, About, Services, Projects/Portfolio, Blog, Contact, etc.)" status="active" />
              <OfferList text="Custom UI with animations & modern design" status="active" />
              <OfferList text="Proven SEO optimization (keywords, sitemap, robots.txt, google setup)" status="active" />
              <OfferList text="Google maps integration & Call-to-action integration" status="active" />
              <OfferList text="Grab your free .in domain for a year" status="active" />
              <OfferList text="Free Basic AI chat bot" status="active" />
              <OfferList text="8 months free website maintenace" status="active" />
            </PricingBox>

            <PricingBox
              packageName="Web Booster"
              price={"23,999"}
              subtitle="Flexible packages crafted to help your brand shine online with AI power chat bot."
            >
              <OfferList text="Recommended package features included" status="active" />
              <OfferList text="Grab 10% discount hosting plan" status="active" />
              <OfferList text="Grab 10% discount in .com domain" status="active" />
              <OfferList text="1 year free website maintenace" status="active" />
              <OfferList text="Full-stack / Scalable web app(pwa)" status="active" />
              <OfferList text="Free AI chat bot with live updates" status="active" />
              <OfferList text="Multi-language support (if required)" status="active" />
              <OfferList text="Technical SEO (website)" status="active" />
              <OfferList text="Free Gmb page creation" status="active" />
            </PricingBox>
            <PricingBox
              packageName="Shopify Starter"
              price={"27k"}
              subtitle="Everything for modern shoppers. Perfect for launches, ideas & everyday essentials."
            >
              <OfferList text="Strategy call to align on goals" status="active" />
              <OfferList text="Custom UI with modern design" status="active" />
              <OfferList text="Grab 10% discount in your domain" status="active" />
              <OfferList text="1 year free website maintenace" status="active" />
              <OfferList text="Mobile-optimized & lightning fast" status="active" />
              <OfferList text="Multi-language support (if required)" status="active" />
              <OfferList text="Technical SEO (website)" status="active" />
              <OfferList text="Free Gmb page creation" status="active" />
            </PricingBox>
          </div>
        )}

        {/* ================= DIGITAL MARKETING (SMM) ================= */}
        {activeTab === "marketing" && (
          <div>
            {/* SMM Cards */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">

              <PricingBox
                packageName="Saver"
                price={"6,599"}
                subtitle="Perfect for startups & local businesses beginning their branding journey(One time package)."
              >
                <span className="absolute -top-4 font-medium right-8 border-2 border-[#A2B2FB] bg-[#A2B2FB] text-white rounded-xl p-1 shadow-lg skew-y-3 shadow-[#99ABFB]">
                  One Time
                </span>
                <OfferList text="1 Shoot with specific script" status="active" />
                <OfferList text="1 professional video with engaging animation" status="active" />
                <OfferList text="1 Free Meta ad campaign for 3 days" status="active" />
                <OfferList text="1 ad campaign setup (Optional)" status="active" />
                                <OfferList text="1 scripted voiceover (Optional)" status="active" />
                <OfferList text="Ideal for creating brand presence & trust" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Recommended"
                price={"8,999"}
                subtitle="Best for startups & brands ready to grow faster and reach more customers."
              >
                <span className="absolute -top-4 font-medium right-8 border-2 border-[#A2B2FB] bg-[#A2B2FB] text-white rounded-xl p-1 shadow-lg skew-y-3 shadow-[#99ABFB]">
                  Most Popular
                </span>
                <OfferList text="5 high-quality business posters" status="active" />
                <OfferList text="1 festival poster for seasonal branding (Optional)" status="active" />
                <OfferList text="2 professional video with engaging animation" status="active" />
                <OfferList text="1 Free Meta ad campaign for 2 days" status="active" />

                <OfferList text="Crafted for lead generation & customer engagement" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Booster"
                price={"11,599"}
                subtitle="For businesses serious about scaling and dominating online presence."
              >

                <OfferList text="8 premium social media posters" status="active" />
                <OfferList text="1 festival poster for seasonal branding" status="active" />
                <OfferList text="3 professional video with engaging animation" status="active" />
                <OfferList text="1 Free Meta ad campaign for 3 days" status="active" />
                
                <OfferList text="Crafted for business growth, leads & revenue" status="active" />
              </PricingBox>

            </div>

            {/* Closing Business Hook */}
            {/* <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We dont just manage your social media — we make it work for your business.
                Choose us if you want <span className="font-semibold text-black">results, not just designs.</span>
              </p>
            </div> */}
          </div>
        )}


        {/* ================= WHATSAPP API ================= */}
        {activeTab === "whatsapp" && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            <PricingBox
              packageName="Saver"
              price={"5,999"}
              subtitle="Perfect for a small business or solopreneur to get started with WhatsApp Broadcasting & Automation for 3 months."
            >
              <OfferList text="Get Official WhatsApp Business API" status="active" />
              <OfferList text="Broadcast Unlimited Campaigns" status="active" />
              <OfferList text="Zero-fee WhatsApp setup" status="active" />
              <OfferList text="Schedule Broadcasts" status="active" />
              <OfferList text="Chat CRM Included" status="active" />
              <OfferList text="Click-to-WhatsApp-Ads" status="active" />
              <OfferList text="Connect Your Third-Party APIs" status="active" />
              <OfferList text="Zero Mock-up charges" status="active" />
              <OfferList text="Multi Agent Shared Inbox" status="active" />
              <OfferList text="Click-tracking" status="active" />
            </PricingBox>
            <PricingBox
              packageName="Essential"
              price={"7,999"}
              subtitle="Perfect for a small business or solopreneur or brands to get started with WhatsApp Broadcasting & Automation for 6 months."
            >
              <OfferList text="Get Official WhatsApp Business API" status="active" />
              <OfferList text="Broadcast Unlimited Campaigns" status="active" />
              <OfferList text="Zero-fee WhatsApp API setup" status="active" />
              <OfferList text="Schedule Broadcasts" status="active" />
              <OfferList text="Chat CRM Included" status="active" />
              <OfferList text="Click-to-WhatsApp-Ads" status="active" />
              <OfferList text="Connect Your Third-Party APIs" status="active" />
              <OfferList text="Zero Mock-up charges" status="active" />
              <OfferList text="Multi Agent Shared Inbox" status="active" />
              <OfferList text="Click-tracking" status="active" />
            </PricingBox>
            <PricingBox
              packageName="Recommended"
              price={"11,999"}
              subtitle="Best for Advanced features and higher limits, ideal for growing businesses needing more capabilities for an year."
            >
              <span className="absolute -top-4 font-medium right-8 border-2 border-[#A2B2FB] bg-[#A2B2FB] text-white rounded-xl p-1 shadow-lg skew-y-3 shadow-[#99ABFB]">
                Most Popular
              </span>
              <OfferList text="Get Official WhatsApp Business API" status="active" />
              <OfferList text="Broadcast Unlimited Campaigns" status="active" />
              <OfferList text="Zero-fee WhatsApp setup" status="active" />
              <OfferList text="Schedule Broadcasts" status="active" />
              <OfferList text="Chat CRM Included" status="active" />
              <OfferList text="Click-to-WhatsApp-Ads" status="active" />
              <OfferList text="Connect Your Third-Party APIs" status="active" />
              <OfferList text="Zero Mock-up charges" status="active" />
              <OfferList text="Connect No Code A.I. Chatbots" status="active" />
              <OfferList text="Multi Agent Shared Inbox" status="active" />
              <OfferList text="Click-tracking" status="active" />

            </PricingBox>
          </div>
        )}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
          We dont just manage your social media — we make it work for your business.
          Choose us if you want <span className="font-semibold text-black">results, not just designs.</span>
        </p>

        <Link
          href="tel:918072770837"
          className="mt-4 w-44 rounded-lg bg-[#99ABFB] shadow-md shadow-[#A2B2FB] px-6 py-3 text-base font-semibold text-white transition hover:scale-105 hover:shadow-xl text-center"
        >
          Connect with us
        </Link>
      </div>

    </section>
  );
};

export default Pricing;
