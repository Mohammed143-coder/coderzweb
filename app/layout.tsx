// app/layout.tsx
import ClientLayout from "@/components/ClientLayout";
import Gtag from "@/components/Analytics/gtag";
import OrganizationSchema from "@/components/StructuredData";
import FaqSchema from "@/components/FaqSchema";
import { Poppins } from "next/font/google";
import "@/styles/index.css";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CODERZWEB | Web Development & Digital Marketing Agency Krishnagiri & Hosur",
  description:
    "Top-rated web development, e-commerce, and digital marketing agency in Krishnagiri & Hosur. Custom Next.js web architecture, SEO & Meta Ads starting at ₹5,999. Call today for a free consultation!",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4A6CF7",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={poppins.variable}>
      <head>
        <link rel="canonical" href="https://coderzweb.in/" />
        <meta name="msvalidate.01" content="32C5DEAC9F08EA04B93087634246FECA" />
        <Gtag />
        <OrganizationSchema />
        <FaqSchema />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${poppins.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}