import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="group relative h-full">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
      
      <div className="relative flex h-full flex-col items-start rounded-xl border border-gray-100 bg-white p-8 transition-all duration-300 group-hover:border-transparent dark:border-white/5 dark:bg-[#111322] md:p-10">
        <div className="mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
