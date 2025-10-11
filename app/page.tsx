import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LiquidEther from "@/components/LiquidEther";
import LogoLoop from "@/components/LogoLoop";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { SiMongodb } from "react-icons/si";

export const metadata: Metadata = {
  title: "CoderzWeb | Custom Websites & Web Apps | Professional Web Development Services",
  description:
    "Award-winning web development company specializing in custom websites, web applications, e-commerce, and mobile apps. Transform your business with responsive design, SEO optimization, and 24/7 support. Get a free consultation today!",
  keywords:
    "web development services, custom website development, professional web design, web application development, e-commerce website development, responsive web design, mobile app development, website redesign services, business website development Krishnagiri, affordable web development Krishnagiri, React development services, Next.js development, full stack development, business website development, affordable web development, web development company, hire web developers, website maintenance services, SEO friendly web development, progressive web apps, API integration services, web developers near me Krishnagiri, best web development company Krishnagiri Tamil Nadu",
  authors: [{ name: "CoderzWeb", url: "https://coderzweb.vercel.app" }],
  creator: "Mohammed Junaith",
  publisher: "CoderzWeb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coderzweb.vercel.app",
    siteName: "CoderzWeb - Professional Web Development Services",
    title: "Expert Web Development Services | Custom Websites & Digital Solutions",
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
  metadataBase: new URL("https://coderzweb.vercel.app"),
  appleWebApp: {
    capable: true,
    title: "CoderzWeb",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "https://coderzweb.vercel.app",
    languages: {
      "en-US": "https://coderzweb.vercel.app",
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
      <AboutSectionOne />
      <AboutSectionTwo />
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
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
    </>
  );
}