"use client";

import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const Features = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        bg-white
        py-20
        md:py-28
        lg:py-36
      "
      aria-label="Our services"
    >
      {/* Background accent */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-primary/[0.035]
          blur-[120px]
        "
      />

      <div
        className="container relative z-10"
        ref={revealRef}
      >

        {/* Header */}
        <div
          className="
            mb-14
            grid
            gap-8
            lg:mb-20
            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
          "
        >

          <div className="reveal">

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/15
                bg-primary/[0.05]
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              What we do
            </div>

            <h2
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.045em]
                text-gray-900
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Digital solutions
              <br />

              <span className="text-gray-300">
                built for growth.
              </span>
            </h2>

          </div>

          <div className="reveal lg:pb-2">

            <p
              className="
                max-w-xl
                text-base
                leading-7
                text-gray-500
                md:text-lg
              "
            >
              From high-performance websites to growth campaigns
              and intelligent automation, we build digital systems
              designed to create measurable business outcomes.
            </p>

          </div>

        </div>

        {/* Services */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-12
            reveal-stagger
          "
        >

          {featuresData.map((feature, index) => {

            const large =
              index === 0 ||
              index === 3;

            return (
              <div
                key={feature.id}
                className={`
                  reveal
                  h-full
                  ${
                    large
                      ? "md:col-span-2 lg:col-span-7"
                      : "md:col-span-1 lg:col-span-5"
                  }
                `}
              >

                <SingleFeature
                  feature={feature}
                  index={index}
                  large={large}
                />

              </div>
            );
          })}

        </div>

        {/* Bottom statement */}
        <div
          className="
            reveal
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-gray-200
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p
            className="
              text-sm
              font-medium
              text-gray-400
            "
          >
            Strategy × Design × Technology × Growth
          </p>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-gray-900
            "
          >
            Start a project

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gray-900
                text-white
                transition-all
                duration-300
                group-hover:bg-primary
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Features;