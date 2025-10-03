"use client";
import { getImagePath } from "@/lib/utils";

import Link from "next/link";
import { MdOutlineCopyright, MdOutlineDoubleArrow } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { PiInstagramLogoDuotone } from "react-icons/pi";


const Footer = () => {
  const msg = `Hi, I'm planning to build website for my business, Checking from your website ?`;
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-3/12 ">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block font-semibold text-2xl md:text-3xl text-[#9FB1FB]">
                  {/* <Image
                    src={getImagePath("/images/logo/logo-2.svg")}
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  /> */}
                  CoderzWeb

                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We craft modern, scalable websites and digital solutions that build trust, boost visibility, and help businesses grow with innovation, experience, and care.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=61581874762273"
                     target="_blank" 
  rel="noopener noreferrer"  // ADD THIS
  aria-label="social-link"

                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/official_coderzweb/"
                      target="_blank" 
  rel="noopener noreferrer"  // ADD THIS
  aria-label="social-link"

                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    <PiInstagramLogoDuotone className="w-6 h-6" />
                  </a>
                  {/* <a
                    href="#"
                    aria-label="social-link"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="social-link"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 ">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-gray-400">
                  Get Into Touch
                </h2>
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/maps?q=Stadium+2nd+gate,+opposite+building,+1st+floor,+Rajajinagar,+Krishnagiri"
                      target="_blank"

                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <IoLocationOutline className="w-9 h-20 md:h-16" />
                      Stadium 2nd gate, opposite building, 1st floor, Rajajinagar, Krishnagiri.
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:+918072770837"
                      target="_blank"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <LuPhoneCall className="w-6 h-6" />
                      +91 80727 70837
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:917904463409"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                      target="_blank"
                    >
                      <LuPhoneCall />+91 79044 63409
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 ">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-gray-400">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="#about"
                      className=" flex gap-2 mb-4 items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow />About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow /> Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow /> Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow />Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>



            <div className="w-full px-4 md:w-1/2 lg:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-gray-400">
                  Our Top Services
                </h2>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow />Landing & Static Website Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow /> Dynamic Website Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow />Web App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-2 mb-4 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary hover:scale-105"
                    >
                      <MdOutlineDoubleArrow /> Domain & Hosting service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <>            <a
              href={`https://wa.me/918072770837?text=${msg}`} // your number with country code
               target="_blank" 
  rel="noopener noreferrer"  // ADD THIS
  aria-label="social-link"

              className="fixed bottom-20  right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-400 transition-all duration-300 animate-bounce"
            >
              <FaWhatsapp className="w-10 h-10" />
            </a></>

          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className=" flex items-center justify-around p-4 text-sm">
            <p className="flex items-center text-center text-base text-body-color dark:text-gray-400"><MdOutlineCopyright />{new Date().getFullYear()} CoderzWeb. All rights are reserved</p>
            <p className="text-center text-base text-body-color dark:text-gray-400">
              <Link href="https://junaith-portfolio.vercel.app" target="_blank">
                Crafted ❤️ By @Founder CoderzWeb
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
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
        <div className="absolute bottom-24 left-0 z-[-1]">
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
