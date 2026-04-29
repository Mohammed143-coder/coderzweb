import { HiCheck, HiX } from "react-icons/hi";

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
        status === "active" 
          ? "border-primary/20 bg-primary/5 text-primary" 
          : "border-gray-200 bg-gray-100 text-gray-400 dark:border-white/5 dark:bg-white/5"
      }`}>
        {status === "active" ? <HiCheck className="text-xs" /> : <HiX className="text-xs" />}
      </div>
      <p className={`text-base font-medium leading-tight ${
        status === "active" ? "text-gray-700 dark:text-gray-300" : "text-gray-400 line-through"
      }`}>
        {text}
      </p>
    </div>
  );
};

export default OfferList;
