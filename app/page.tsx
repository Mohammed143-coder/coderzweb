
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("@/components/LiquidEther"), { ssr: false });
const LogoLoop = dynamic(() => import("@/components/LogoLoop"), { ssr: false });
const ScrollUp = dynamic(() => import("@/components/Common/ScrollUp"), { ssr: false });
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { SiMongodb } from "react-icons/si";
import ModernFAQ from "@/components/Common/ModernFAQ";

export const metadata: Metadata = {
  title: "CoderzWeb | Professional Web Development agency in Krishnagiri",
  description:"Award-winning web development and Best Digital Marketing services in Krishnagiri serving Pan India. We create responsive websites, web apps, Meta ads Google ads & SEO solutions. Get a free consultation today!",
  keywords:"Web development services, Custom website development, Best web development company Krishnagiri, Best digital marketing agency, Web design company India, Web application development, E-commerce website development, Responsive web design, Website redesign services, Business website development Krishnagiri, Affordable website development Krishnagiri, React development services, Next.js development India, Web development agency India, Hire web developers, Website maintenance services, SEO-friendly web development, Progressive web apps development, Web developers near me Krishnagiri, Full stack web development, Dynamic web solutions India, Professional website design Krishnagiri Tamil Nadu",
  authors: [{ name: "CoderzWeb", url: "https://coderzweb.in" }],
  creator: "Mohammed Junaith",
  publisher: "CoderzWeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coderzweb.in",
    siteName: "CoderzWeb - Professional Web Development agency in Krishnagiri",
    title: "Expert In Custom Websites & Digital Marketing",
    description:
      "Leading web development company delivering custom websites, web apps, and e-commerce solutions. 500+ projects completed. Fast turnaround. Free consultation. Transform your digital presence today!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  metadataBase: new URL("https://coderzweb.in"),
  appleWebApp: {
    capable: true,
    title: "CoderzWeb",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "https://coderzweb.in",
    languages: {
      "en-US": "https://coderzweb.in",
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function Home() {
  const techLogos = [
    { node: <TiHtml5 />, title: "React", },
    { node: <TbBrandTailwind />, title: "Tailwind CSS",  },
    { node: <FaNode />, title: "React",  },
    { node: <FaJava />, title: "React",  },
    { node: <IoLogoJavascript />, title: "React",  },

    { node: <FaReact />, title: "React",  },
    { node: <TbBrandNextjs />, title: "Next.js",  },
    { node: <TbBrandTypescript />, title: "TypeScript",  },
    { node: <SiMongodb />, title: "Tailwind CSS",  },
    
  ];

  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      {/* Hero section with LiquidEther background */}
      <div className="relative">
        {/* LiquidEther as background - positioned absolutely */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={30}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.2}
            autoIntensity={2.2}
            takeoverDuration={0.2}
            autoResumeDelay={4000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Hero content - positioned relatively to appear above background */}
        <div className="relative z-10">
          <Features />
        </div>
      </div>

      <Video />
      
      <AboutSectionTwo />
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }} className="text-[#99ABFB] dark:text-black">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>

      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <ModernFAQ />
    </>
  );
}