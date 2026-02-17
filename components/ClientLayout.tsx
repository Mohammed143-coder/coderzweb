"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "@/app/providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:rounded-lg focus:bg-primary focus:px-6 focus:py-3 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </Providers>
  );
}
