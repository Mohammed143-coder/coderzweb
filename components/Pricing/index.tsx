"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Link from "next/link";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("website");

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Get top-quality digital solutions with transparent and flexible pricing plans."
          center
          width="665px"
        />

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
          <>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">

              <PricingBox
                packageName="Essential"
                price={"12k"}
                subtitle="One-pager or starter website, conversion-focused, perfect for product launches or lead gen."
              >
                <OfferList text="Landing page or static website 1 – 3 pages (Home, About, Contact)" status="active" />
                <OfferList text="Responsive design (looks great on all devices)" status="active" />
                <OfferList text="Social media integration (FB/Instagram/WhatsApp links)" status="active" />
                <OfferList text="Website optimization with advance auditing tool (lazy loading, image compression)" status="active" />
                <OfferList text="Contact form integration (basic email capture / WhatsApp link)" status="active" />
                <OfferList text="Free SSL + Free basic hosting for a year" status="active" />
                <OfferList text="6 months free website maintenace" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Recommended"
                price={"18k"}
                subtitle="Your brand needs. Clean, scalable, and intentional with AI power chat bot."
              >
                <span className="absolute -top-4 font-medium right-8 border-2 border-[#A2B2FB] bg-[#A2B2FB] text-white rounded-xl p-1 shadow-lg skew-y-3 shadow-[#99ABFB]">
                  Recommended
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
                price={"24k"}
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
            </div>

            {/* SHOPIFY SECTION */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6">

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

              <div className="flex flex-col items-center justify-center p-4 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-400 py-2 text-center">
                  Are you ready to start your project?
                </h2>
                <p className="py-4 text-center text-lg font-medium text-gray-400">
                  If you have any custom project ideas, lets bring your vision to life with cutting-edge web solutions.
                </p>
                <Link
                  href="tel:918072770837"
                  className="flex w-full justify-center md:w-auto rounded-lg bg-[#99ABFB] px-6 py-3 text-base font-semibold text-white transition hover:scale-105 hover:shadow-xl"
                >
                  Connect with us
                </Link>
              </div>
            </div>
          </>
        )}

        {/* ================= DIGITAL MARKETING (SMM) ================= */}
        {activeTab === "marketing" && (
          <div>
            {/* SMM Intro Content */}
            <div className="text-center max-w-5xl mx-auto mb-12">

              <p className="text-gray-500 text-lg leading-relaxed">
                In todays digital world, social media is not just about posting — its about
                <span className="font-semibold text-black"> building visibility, trust, and sales.</span>
                Our SMM packages are carefully designed for business growth, not just followers.
              </p>

            </div>

            {/* SMM Cards */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">

              <PricingBox
                packageName="Saver"
                price={"7,599"}
                subtitle="Perfect for startups & local businesses beginning their branding journey."
              >
                <OfferList text="5 professionally designed posters" status="active" />
                <OfferList text="1 festival poster for seasonal branding" status="active" />
                <OfferList text="2 promotional videos with engaging animation" status="active" />
                <OfferList text="Free Meta ad campaign for 2 days" status="active" />
                <OfferList text="Ideal for creating brand presence & trust" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Recommended"
                price={"8,999"}
                subtitle="Best for brands ready to grow faster and reach more customers."
              >
                <span className="absolute -top-4 font-medium right-8 border-2 border-[#A2B2FB] bg-[#A2B2FB] text-white rounded-xl p-1 shadow-lg skew-y-3 shadow-[#99ABFB]">
                  Most Popular
                </span>
                <OfferList text="8 high-quality business posters" status="active" />
                <OfferList text="1 festival poster for seasonal branding" status="active" />
                <OfferList text="2 professional video with engaging animation" status="active" />
                <OfferList text="Free Meta ad campaign for 2 days" status="active" />
                <OfferList text="Designed for lead generation & customer engagement" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Booster"
                price={"10,999"}
                subtitle="For businesses serious about scaling and dominating online presence."
              >
                <OfferList text="10 premium social media posters" status="active" />
                <OfferList text="1 festival poster for seasonal branding" status="active" />
                <OfferList text="3 high-conversion video with engaging animation" status="active" />
                <OfferList text="Free Meta ad campaign for 3 days" status="active" />
                <OfferList text="Built for business growth, leads & revenue" status="active" />
              </PricingBox>

            </div>

            {/* Closing Business Hook */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We dont just manage your social media — we make it work for your business.
                Choose us if you want <span className="font-semibold text-black">results, not just designs.</span>
              </p>
            </div>
          </div>
        )}


        {/* ================= WHATSAPP API ================= */}
        {activeTab === "whatsapp" && (
          <div className="text-center py-12 max-w-4xl mx-auto text-gray-500">
            <h2 className="text-2xl font-semibold mb-2">WhatsApp API</h2>
            <p>Get ready! Our WhatsApp API solution with powerful features and budget-friendly pricing is coming soon to boost your customer engagement.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
