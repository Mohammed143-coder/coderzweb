"use client";
import { getImagePath } from "@/lib/utils";

import Link from "next/link";
import { MdOutlineCopyright, MdOutlineDoubleArrow } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import dynamic from "next/dynamic";

const ChatBox = dynamic(() => import("../ChatBot"), { ssr: false });


const Footer = () => {
  const msg = `Hi, I'm planning to build website for my business, Checking from your website ?`;
  return (
    <>
      <footer
        className="relative z-10 bg-white pt-20 dark:bg-[#030712] md:pt-28"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 bg-mesh opacity-30" />
        
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12">
              <div className="mb-12 max-w-[360px]">
                <Link href="/" className="mb-8 inline-block text-2xl font-black tracking-tighter text-primary">
                  CODERZWEB
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                  Engineering high-performance digital experiences. We craft modern, scalable solutions that transform businesses and build lasting digital authority.
                </p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: <FaFacebook />, href: "https://facebook.com/profile.php?id=61581874762273" },
                    { icon: <PiInstagramLogoDuotone />, href: "https://www.instagram.com/coderzweb_official/" },
                    { icon: <FaWhatsapp />, href: `https://wa.me/917904463409?text=${msg}` }
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-xl text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12">
              <div className="mb-12">
                <h3 className="mb-9 text-sm font-black uppercase tracking-[0.2em] text-black dark:text-white">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {["About", "Services", "Portfolio", "Pricing", "Contact"].map((link) => (
                    <li key={link}>
                      <Link
                        href={`#${link.toLowerCase()}`}
                        className="text-base font-medium text-gray-500 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12">
              <div className="mb-12">
                <h3 className="mb-9 text-sm font-black uppercase tracking-[0.2em] text-black dark:text-white">
                  Top Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Web Architecture",
                    "PWA Development",
                    "Digital Strategy",
                    "AI Automation",
                    "Cloud Hosting"
                  ].map((service) => (
                    <li key={service}>
                      <Link
                        href="#services"
                        className="text-base font-medium text-gray-500 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-3/12">
              <div className="mb-12">
                <h3 className="mb-9 text-sm font-black uppercase tracking-[0.2em] text-black dark:text-white">
                  Connect
                </h3>
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="tel:+918072770837"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <LuPhoneCall />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Call Us</p>
                        <p className="text-base font-bold text-black dark:text-white group-hover:text-primary transition-colors">+91 80727 70837</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.google.com/maps"
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <IoLocationOutline />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Visit Us</p>
                        <p className="text-base font-bold text-black dark:text-white group-hover:text-primary transition-colors">Rajajinagar, Krishnagiri</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <ChatBox />
          </div>

          <div className="flex flex-col items-center justify-between border-t border-gray-100 py-10 dark:border-white/5 md:flex-row">
            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:mb-0">
              © {new Date().getFullYear()} CoderzWeb. Engineering Digital Excellence.
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Crafted by <span className="font-bold text-black dark:text-white">@Founder CoderzWeb</span>
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]" aria-hidden="true">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]" aria-hidden="true">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
