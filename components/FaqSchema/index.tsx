// components/FaqSchema.tsx

const FaqSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to build a website with CODERZWEB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website development packages start at ₹13,999 for our Essential business package, which includes responsive landing page architecture, SSL security, and core SEO. Our Advanced animation and AI-enabled tier is ₹23,999, and full-scale e-commerce stores start at ₹33,999.",
        },
      },
      {
        "@type": "Question",
        name: "Can CODERZWEB build custom web applications for startups and businesses in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CODERZWEB builds modern Next.js web applications, e-commerce systems, and AI automations for startups, D2C brands, and tech enterprises in Bangalore and the Electronic City corridor. Clients receive metro-grade engineering at up to 40% lower costs compared to central Bangalore agency rates.",
        },
      },
      {
        "@type": "Question",
        name: "Which web development company is best for manufacturing and industrial firms in Hosur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CODERZWEB provides dedicated B2B web development for manufacturing, engineering, and granite enterprises across Hosur's SIPCOT industrial belts. We build product inquiry catalogs with direct WhatsApp integration to generate domestic and export B2B leads.",
        },
      },
      {
        "@type": "Question",
        name: "In which locations does CODERZWEB provide services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our physical office is located in Rajaji Nagar, Krishnagiri, and we provide on-site and remote web development across Krishnagiri, Hosur, Bangalore, Dharmapuri, Tirupattur, Bargur, Shoolagiri, and pan-India.",
        },
      },
      {
        "@type": "Question",
        name: "What web development and performance marketing services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We deliver custom business websites, web applications, e-commerce storefronts, Meta and Google Ads campaigns, SEO optimization, brand identity design, and official WhatsApp Business API automations.",
        },
      },
      {
        "@type": "Question",
        name: "What is the ROI of professional website design for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professionally engineered, SEO-optimized website acts as a 24/7 lead capture engine. CODERZWEB clients typically achieve up to 3x higher lead volumes and 40% faster load speeds within 6 months of launching on Next.js architecture.",
        },
      },
      {
        "@type": "Question",
        name: "Do your websites support mobile apps or PWA functionality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we build Progressive Web Apps (PWAs) that install directly on iOS and Android devices, keeping your web and mobile customer touchpoints fully synchronized.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default FaqSchema;