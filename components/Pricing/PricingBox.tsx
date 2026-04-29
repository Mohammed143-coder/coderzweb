import Link from "next/link";

const PricingBox = (props: {
  price: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  isFeatured?: boolean;
}) => {
  const { price, packageName, subtitle, children, isFeatured } = props;

  return (
    <div className="group relative h-full flex flex-col">
      {/* Animated Border Beam for Featured */}
      {isFeatured && (
        <div className="absolute -inset-[2px] z-0 overflow-hidden rounded-[26px]">
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4A6CF7_0%,#A2B2FB_50%,#4A6CF7_100%)]" />
        </div>
      )}

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
      
      <div className={`relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 p-8 md:p-10 ${
        isFeatured 
          ? "border-transparent bg-white dark:bg-[#0F111A] shadow-2xl scale-105 z-20" 
          : "border-gray-100 bg-white dark:border-white/5 dark:bg-[#111322]"
      }`}>
        
        {/* Header SECTION */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <span className={`rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
              isFeatured ? "bg-primary text-white" : "bg-primary/5 text-primary"
            }`}>
              {packageName}
            </span>
            {isFeatured && (
              <span className="text-[10px] font-black uppercase tracking-widest text-primary animate-pulse">
                Best Value
              </span>
            )}
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-black dark:text-white">₹</span>
            <span className="text-5xl font-black tracking-tighter text-black dark:text-white">
              {price}
            </span>
          </div>
        </div>

        {/* SUBTITLE */}
        <p className="mb-10 text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>

        {/* CTA BUTTON */}
        <Link
          href="tel:918072770837"
          className={`mb-10 flex h-14 items-center justify-center rounded-2xl text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${
            isFeatured
              ? "bg-primary text-white shadow-[0_0_40px_-10px_rgba(74,108,247,0.5)]"
              : "bg-gray-50 text-black hover:bg-gray-100 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          }`}
        >
          Unlock Discount
        </Link>

        {/* FEATURE LIST */}
        <div className="flex-1 space-y-4">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            What&apos;s Included
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
