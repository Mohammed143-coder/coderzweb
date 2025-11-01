"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Link from "next/link";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Get top-quality websites without breaking the bank. CoderzWeb’s simple and affordable pricing packages are transparent and designed to meet every client’s unique digital needs."
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-gary-400"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                  ? "text-dark dark:text-gray-400"
                  : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

          <PricingBox
            packageName="Starter"
            price={"12k"}
            // duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="Landing page or static website 1 – 3 pages (Home, About, Contact)" status="active" />
            <OfferList text="Mobile responsive design (looks great on phone & PC)" status="active" />
            <OfferList text="Social media integration (FB/Instagram/What's app links)" status="active" />
            <OfferList text="Contact form integration (basic email capture / WhatsApp link)" status="active" />
            <OfferList text="Get your location section" status="active" />
            <OfferList text="Free SSL + Free basic hosting for a year" status="active" />
            <OfferList text="4 months free website maintenace" status="active" />


          </PricingBox>
         
          <PricingBox
            packageName="Essential"
            price={"18k"}
            // duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
             <span className="absolute -top-4 font-medium right-8 border-2 border-[#A2B2FB] bg-[#A2B2FB] text-white rounded-xl p-1 shadow-lg skew-y-3 shadow-[#99ABFB]">Recommended</span>
            <OfferList text="4 – 5 pages (Home, About, Services, Projects/Portfolio, Blog, Contact, etc.)" status="active" />
            <OfferList text="Starter package features included" status="active" />
            <OfferList text="Basic UI with animations & modern design" status="active" />
            <OfferList text="Basic SEO optimization (keywords, sitemap, robots.txt, google setup)" status="active" />
            <OfferList text="Basic speed optimization (lazy loading, image compression)" status="active" />
            <OfferList text="Google maps integration & Call-to-action integration" status="active" />
            <OfferList text="Grab your free .in domain for a year" status="active" />
            <OfferList text="Free Basic AI chat bot" status="active" />
            <OfferList text="6 months free website maintenace" status="active" />


          </PricingBox>
          <PricingBox
            packageName="Web Booster"
            price={"24k"}
            // duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
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
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center md:h-72 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-400 py-2">Are you ready to start your idea to project?</h2>
        <p className="py-4 my-2 text-lg font-medium text-gray-400">{"If you have any custom project idea let's bring your vision to life with cutting-edge web solutions tailored to your needs."}</p>
        <button>
          <Link href='tel:918072770837' className="flex w-full items-center justify-center rounded-lg bg-[#99ABFB] p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:skew-y-3 hover:scale-105 hover:shadow-xl hover:shadow-[#99ABFB]">
            Connect with Us
          </Link>
        </button>
      </div>

    </section>
  );
};

export default Pricing;
