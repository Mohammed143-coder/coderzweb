import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full h-full">
      <div
        className="reveal-3d shadow-[var(--lux-shadow)] hover:shadow-[var(--lux-shadow-hover)] bg-white dark:bg-dark p-8 md:p-10 rounded-2xl h-full flex flex-col transition-all duration-500 hover:scale-[1.02] border border-gray-100 dark:border-white/5 group"
      >
        <div className="mb-6 flex items-center space-x-1 transition-transform duration-500 group-hover:translate-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-gray-100 dark:border-white/5 pb-8 text-lg font-medium leading-relaxed italic text-gray-700 dark:text-gray-300 flex-grow">
          &quot;{content}&quot;
        </p>
        <div className="flex items-center">
          <div className="flex items-center justify-center relative mr-5 h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-[#4A6CF7] shadow-inner">
            <span className="text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              {image}
            </span>
          </div>
          <div className="w-full">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
              {name}
            </h3>
            <p className="text-sm font-semibold text-[#4A6CF7] dark:text-gray-400 mt-1 uppercase tracking-wider">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
