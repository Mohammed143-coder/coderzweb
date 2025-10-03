import { FaWhatsapp } from "react-icons/fa";

const WhatAppIcon = () => {
  const msg = `Hi, I'm planning to build website for my business, Checking from your website ?`;
  return (
    <a
      href={`https://wa.me/918072770837?text=${msg}`} // your number with country code
      target="_blank"
     
      className="fixed bottom-20  right-6 z-50 bg-green-500 text-white p-6 rounded-full shadow-lg hover:bg-green-400 transition-all duration-300 animate-bounce"
    >
      <FaWhatsapp className="w-12 h-12"/>
    </a>
  );
};

export default WhatAppIcon;