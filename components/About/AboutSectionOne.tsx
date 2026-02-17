"use client";

import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useScrollReveal } from "@/lib/useScrollReveal";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current" aria-hidden="true">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const revealRef = useScrollReveal();

  const List = ({ text }: { text: string }) => (
    <div className="mb-5 flex items-center font-bold text-gray-700  bg-white dark:bg-dark-2 border border-blue-50 dark:border-white/5 shadow-lg rounded-xl p-3 duration-300 transition-all hover:scale-[1.02] hover:shadow-[var(--lux-shadow-hover)] group">
      <span className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--lux-gradient)]  shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
        {checkIcon}
      </span>
      <span className="text-base tracking-tight">{text}</span>
    </div>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28" aria-label="About CoderzWeb">
      <div className="container" ref={revealRef}>
        <div className="border-b border-gray-100 pb-16 dark:border-white/5 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Elite Web Design & Performance Marketing"
                paragraph="We don't just build websites; we create high-converting digital experiences. Our team combines premium design with data-driven marketing to scale your business."
                mb="44px"
              />

              <div
                className="reveal mb-12 max-w-[570px] lg:mb-0"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Website & Web Apps" />
                    <List text="Enhanced Security" />
                    <List text="Cost-Effective Growth" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 reveal-stagger">
                    <List text="Elite Support" />
                    <List text="Scalable Infrastructure" />
                    <List text="ROI-Driven Ads" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="reveal relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="Premium service illustration"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="Premium service illustration"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
