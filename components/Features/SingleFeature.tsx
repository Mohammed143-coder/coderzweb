import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp hover:scale-105 shadow-md lg:shadow-lg hover:shadow-[#A2B2FB] p-2 rounded-lg md:h-72 text-center duration-300" data-wow-delay=".15s">
       <div className="flex justify-center">
         <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
       </div>
        <h3 className="mb-5 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed px-1">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
