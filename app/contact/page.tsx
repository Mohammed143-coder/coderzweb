import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CODERZWEB | Web Development & Marketing Agency Krishnagiri",
  description:
    "Get in touch with CODERZWEB. Visit our Rajaji Nagar, Krishnagiri office, call +91 80727 70837, or email info@coderzweb.in for a free web development & marketing quote.",

  alternates: {
    canonical: "/contact",
  },

  authors: [{ name: "CoderzWeb", url: "https://coderzweb.in" }],
  creator: "Mohammed Junaith",
  publisher: "CODERZWEB",

  keywords: [
    "contact CoderzWeb",
    "CoderzWeb Krishnagiri address",
    "CoderzWeb phone number",
    "web development consultation Krishnagiri",
    "hire web developers Hosur",
    "website designers contact number Krishnagiri",
    "digital marketing agency Krishnagiri",
    "performance marketing services Hosur",
    "performance marketing agency near me Krishnagiri",
    "web design office near me Krishnagiri",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://coderzweb.in/contact",
    siteName: "CODERZWEB",
    title: "Contact CODERZWEB | Web Development & Digital Marketing Agency",
    description:
      "Ready to build your next high-performance digital project? Reach out to our strategy team in Krishnagiri. Call or WhatsApp +91 80727 70837.",
    images: [
      {
        url: "/_next/image/?url=%2Fimages%2Fblog%2Fcoderzweb-blog3.webp&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "Contact CODERZWEB - Krishnagiri Office",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact CODERZWEB | Krishnagiri Office",
    description:
      "Connect with CODERZWEB for website development, e-commerce stores, and Meta Ads campaigns. Phone: +91 80727 70837.",
    images: ["/_next/image/?url=%2Fimages%2Fblog%2Fcoderzweb-blog3.webp&w=1200&q=75"],
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our team is ready to provide the answers and support you need. Let’s make things happen together!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
