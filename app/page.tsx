import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

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
 
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />

      
     
    </>
  );
}
