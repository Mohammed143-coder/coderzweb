import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Features from "@/components/Features";
import { Metadata } from "next";

// Lazy-load below-fold components for performance
const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-gradient-to-br from-[#5227FF]/20 via-[#FF9FFC]/10 to-[#B19EEF]/20 animate-pulse" />
  ),
});
const LogoLoop = dynamic(() => import("@/components/LogoLoop"), { ssr: false });
const Video = dynamic(() => import("@/components/Video"), { ssr: false });
const AboutSectionTwo = dynamic(() => import("@/components/About/AboutSectionTwo"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Blog = dynamic(() => import("@/components/Blog"));
const Contact = dynamic(() => import("@/components/Contact"));
const ModernFAQ = dynamic(() => import("@/components/Common/ModernFAQ"));
const TechLogos = dynamic(() => import("@/components/TechLogos"), { ssr: false });

export const metadata: Metadata = {
  title: "CoderzWeb | Professional Web Development & Digital marketing agency in Krishnagiri",
  description:
    "Award-winning web development and Best Digital Marketing services in Krishnagiri serving Pan India. We create responsive websites, web apps, Meta ads Google ads & SEO solutions. Get a free consultation today!",
  keywords:
    "Web development services, Custom website development, Best web development company Krishnagiri, Best digital marketing agency, Web design company India, Web application development, E-commerce website development, Responsive web design, Website redesign services, Business website development Krishnagiri, Affordable website development Krishnagiri, React development services, Next.js development India, Web development agency India, Hire web developers, Website maintenance services, SEO-friendly web development, Progressive web apps development, Web developers near me Krishnagiri, Full stack web development, Dynamic web solutions India, Professional website design Krishnagiri Tamil Nadu",
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
  return (
    <>
      <Hero />
      <AboutSectionOne />

      {/* Features section with LiquidEther background */}
      <div className="relative">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={30}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.35}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.2}
            autoIntensity={2.2}
            takeoverDuration={0.2}
            autoResumeDelay={4000}
            autoRampDuration={0.6}
          />
        </div>
        <div className="relative z-10">
          <Features />
        </div>
      </div>

      <Video />
      <AboutSectionTwo />
      <TechLogos />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <ModernFAQ />
    </>
  );
}