import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoderzWeb | Custom Websites & Web Apps | Professional Web Development Agency",
  description:
    "Award-winning web development company specializing in custom websites, web applications, e-commerce, and mobile apps, Meta ads, Google ads and Logo desiging. Transform your business with responsive design, SEO optimization, and 24/7 support. Get a free consultation today!",
  keywords:
    "web development services, custom website development, professional web design, web application development, Best digital marketing agency, e-commerce website development, responsive web design, mobile app development, website redesign services, business website development Krishnagiri, affordable web development Krishnagiri, React development services, Next.js development, full stack development, business website development, affordable web development, web development company, hire web developers, website maintenance services, SEO friendly web development, progressive web apps, API integration services, web developers near me Krishnagiri, best web development company Krishnagiri Tamil Nadu",
  authors: [{ name: "CoderzWeb", url: "https://coderzweb.in" }],
  creator: "Mohammed Junaith",
  publisher: "CoderzWeb",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
