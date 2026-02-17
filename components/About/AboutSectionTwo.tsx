"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

const AboutSectionTwo = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="py-16 md:py-20 lg:py-28" aria-label="Why choose CoderzWeb">
      <div className="container" ref={revealRef}>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="reveal-left relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="Bug free code illustration"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Bug free code illustration"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9 reveal-right">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Elite Dedicated Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our commitment to your growth doesn&apos;t end with deployment. We provide elite-tier support to ensure your digital presence is always active and performing.
                </p>
              </div>
              <div className="mb-9 reveal-right">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug-Free & Pure Performance
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We write clean, efficient, and well-documented code designed for high speed and scalability. No bloat, just pure performance.
                </p>
              </div>
              <div className="mb-1 reveal-right">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier Modern Tech Stack
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Leveraging the latest technologies like Next.js, AI integration, and cloud-native solutions to keep you ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
