import { Testimonial } from "@/types/testimonial";
import { Quote } from "lucide-react";

const SingleTestimonial = ({ 
  testimonial, 
  isFeatured = false 
}: { 
  testimonial: Testimonial; 
  isFeatured?: boolean;
}) => {
  const { name, image, content, designation } = testimonial;

  return (
    <div className={`group relative h-full ${isFeatured ? "z-20" : "z-10"}`}>
      {/* Decorative background glow */}
      <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#4A6CF7]/20 to-[#9b51e0]/20 opacity-0 blur transition duration-500 group-hover:opacity-100 ${isFeatured ? "opacity-100" : ""}`} />
      
      {/* Animated Border Beam for Featured Card */}
      {isFeatured && (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
          <div className="absolute -inset-[500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,#4A6CF7_360deg)] opacity-40" />
        </div>
      )}

      <div className={`relative flex h-full flex-col justify-between rounded-2xl border border-gray-100 p-8 transition-all duration-500 dark:border-white/5 md:p-10 ${
        isFeatured 
          ? "bg-white/90 dark:bg-[#111322]/90 backdrop-blur-xl border-primary/20 shadow-2xl scale-[1.02]" 
          : "bg-white dark:bg-[#111322] hover:border-transparent"
      }`}>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#4A6CF7] dark:bg-blue-900/20">
              <Quote size={20} fill="currentColor" className="opacity-50" />
            </div>
            <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-600 dark:bg-green-900/20 dark:text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Verified Client
            </div>
          </div>

          <blockquote className={`mb-8 font-semibold leading-snug text-gray-900 dark:text-white ${
            isFeatured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          }`}>
            &ldquo;{content}&rdquo;
          </blockquote>
        </div>

        <div className="mt-auto flex items-center border-t border-gray-50 pt-8 dark:border-white/5">
          <div className={`relative mr-4 flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-[#4A6CF7] dark:from-blue-900/30 dark:to-blue-800/30 ${
            isFeatured ? "h-14 w-14" : "h-12 w-12"
          }`}>
            <span className={`${isFeatured ? "text-2xl" : "text-xl"} transition-transform duration-500 group-hover:scale-110`}>
              {image}
            </span>
          </div>
          <div>
            <h3 className={`font-bold text-gray-900 dark:text-white ${isFeatured ? "text-lg" : "text-base"}`}>
              {name}
            </h3>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
