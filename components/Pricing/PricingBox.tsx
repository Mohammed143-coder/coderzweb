import Link from "next/link";

const PricingBox = (props: {
  price: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, packageName, subtitle, children } = props;

  return (
    <div className="w-full h-full ">
      <div
        className="reveal hover:scale-105 dark:shadow-[#A2B2FB] dark:shadow-sm dark:hover:shadow-[#A2B2FB] relative z-10 rounded-xl bg-white px-8 py-8 shadow-sm shadow-[#A4B4FB] duration-300 h-full flex flex-col"
      >
        {/* HEADER SECTION */}
        <div className="flex items-center justify-between pb-4">
          <h3 className="price mb-2 text-4xl font-extrabold text-gray-800 dark:text-[#99ABFB] tracking-tight">
            <span className="text-2xl font-bold mr-1 opacity-80">₹</span>
            <span className="amount">{price}</span>
          </h3>

          <div className="px-3 py-1 rounded-full bg-blue-50 dark:bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow text-blue-600 dark:text-white text-sm font-bold uppercase tracking-wider">
            {packageName}
          </div>
        </div>

        {/* SUBTITLE */}
        <p className="mb-8 h-16 text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
          {subtitle}
        </p>

        {/* CTA BUTTON */}
        <div className="mb-10 border-b border-gray-100 dark:border-white/5 pb-10">
          <Link
            href="tel:918072770837"
            className="flex w-full items-center justify-center rounded-xl bg-[#A2B2FB] p-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98]"
          >
            Unlock Your Discounts
          </Link>
        </div>

        {/* FEATURE LIST */}
        <div className="flex-grow space-y-4">{children}</div>

        {/* BACKGROUND SVG */}
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
