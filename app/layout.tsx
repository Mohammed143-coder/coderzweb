"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Specify weights you need
  variable: "--font-poppins", // Optional: CSS variable
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">

      <head /> <meta name="google-site-verification" content="FEFWA7kjSl3mGXEcGuoH8h2ztFi5P71PiAxvPBJW19c" />
      <link rel="canonical" href="https://coderzweb.vercel.app/" />
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black${poppins.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}


