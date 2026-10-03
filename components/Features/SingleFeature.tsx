"use client";

import { ArrowUpRight } from "lucide-react";
import { Feature } from "@/types/feature";

type Props = {
  feature: Feature;
  index?: number;
  large?: boolean;
};

const getTags = (title: string) => {
  const value = title.toLowerCase();

  if (
    value.includes("web") ||
    value.includes("website") ||
    value.includes("development")
  ) {
    return ["Strategy", "UI/UX", "Development", "SEO"];
  }

  if (
    value.includes("marketing") ||
    value.includes("performance") ||
    value.includes("ads")
  ) {
    return ["Google Ads", "Meta Ads", , "Analytics"];
  }

  if (value.includes("seo") || value.includes("growth")) {
    return ["Technical SEO", "Local SEO", "Content", "Analytics"];
  }

  if (value.includes("ai") || value.includes("automation") || value.includes("api")) {
    return ["AI Agents", "Automation", "CRM", "Workflows"];
  }

  return ["Strategy", "Design", "Technology", "Growth"];
};

const SingleFeature = ({
  feature,
  index = 0,
  large = false,
}: Props) => {
  const { icon, title, paragraph } = feature;

  const number = String(index + 1).padStart(2, "0");
  const tags = getTags(title);

  return (
    <article
      className={`
        group relative h-full overflow-hidden
        rounded-[28px]
        border border-gray-200/80
        bg-white
        p-7
        shadow-[0_8px_40px_rgba(0,0,0,0.04)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        md:p-9
        ${large ? "min-h-[430px]" : "min-h-[380px]"}
      `}
    >
      {/* Soft brand gradient */}
      <div
        className="
          pointer-events-none absolute
          -right-32 -top-32
          h-72 w-72
          rounded-full
          bg-primary/[0.08]
          blur-[80px]
          opacity-60
          transition-all duration-700
          group-hover:bg-primary/[0.15]
          group-hover:opacity-100
        "
      />

      {/* Decorative grid */}
      <div
        className="
          pointer-events-none absolute
          right-0 top-0
          h-48 w-48
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom left, black, transparent)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Top row */}
        <div className="flex items-start justify-between">

          {/* Icon */}
          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-primary/[0.08]
              text-primary
              ring-1 ring-primary/10
              transition-all duration-500
              group-hover:scale-105
              group-hover:bg-primary
              group-hover:text-white
            "
          >
            {icon}
          </div>

          {/* Number */}
          <span
            className="
              font-mono
              text-xs
              font-medium
              tracking-[0.2em]
              text-gray-300
              transition-colors
              group-hover:text-primary/50
            "
          >
            {number}
          </span>

        </div>

        {/* Main content */}
        <div className="mt-10">

          <h3
            className={`
              font-semibold
              tracking-[-0.04em]
              text-gray-900
              transition-colors
              group-hover:text-primary
              ${
                large
                  ? "text-3xl md:text-4xl"
                  : "text-2xl md:text-3xl"
              }
            `}
          >
            {title}
          </h3>

          <p
            className="
              mt-5
              max-w-xl
              text-[15px]
              leading-7
              text-gray-500
              md:text-base
            "
          >
            {paragraph}
          </p>

        </div>

        {/* Bottom */}
        <div className="mt-auto pt-10">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border border-gray-200
                  bg-gray-50
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-gray-500
                  transition-all duration-300
                  group-hover:border-primary/15
                  group-hover:bg-primary/[0.04]
                  group-hover:text-primary
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div
            className="
              mt-7
              flex
              items-center
              justify-between
              border-t
              border-gray-100
              pt-5
            "
          >
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-gray-400
              "
            >
              Explore service
            </span>

            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-gray-200
                text-gray-700
                transition-all duration-500
                group-hover:border-primary
                group-hover:bg-primary
                group-hover:text-white
              "
            >
              <ArrowUpRight
                className="
                  h-4 w-4
                  transition-transform duration-500
                  group-hover:rotate-45
                "
              />
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default SingleFeature;