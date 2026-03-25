"use client";

interface OrganizationSchemaProps {
  organizationName?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  priceRange?: string;
  openingHours?: string[];
}

const OrganizationSchema = ({
  organizationName = "CoderzWeb",
  url = "https://coderzweb.in",
  logo = "https://coderzweb.in/images/logo/logo.svg",
  description = "Professional web development and digital marketing agency in Krishnagiri, Tamil Nadu. We create responsive websites, web apps, e-commerce solutions, and provide SEO & performance marketing services.",
  telephone = "+918072770837",
  email = "coderzweb@gmail.com",
  address = {
    streetAddress: "Stadium 2nd gate, opposite building, 1st floor, Rajajinagar",
    addressLocality: "Krishnagiri",
    addressRegion: "Tamil Nadu",
    postalCode: "635001",
    addressCountry: "IN",
  },
  geo = {
    latitude: "12.530348124398172",
    longitude: "78.19866667537708",
  },
  priceRange = "₹₹",
  openingHours = ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebDevelopmentCompany",
    name: organizationName,
    url: url,
    logo: logo,
    description: description,
    telephone: telephone,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0],
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1],
    })),
    priceRange: priceRange,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Web Development",
      "E-commerce Development",
      "SEO Services",
      "Digital Marketing",
      "WhatsApp Business API",
      "Logo Design",
    ],
    sameAs: [
      "https://facebook.com/coderzweb",
      "https://www.instagram.com/coderzweb_official/",
      "https://wa.me/917904463409",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;