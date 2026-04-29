"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Submenu toggle (kept for future submenu use)
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  // Track active section for highlighting
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll + highlight on click
  const handleNavClick = (e: any, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    } else if (path === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    }
    setNavbarOpen(false); // Close mobile menu after click
  };

  // Scroll spy (auto highlight while scrolling)
  useEffect(() => {
    const sections = menuData
      .filter((item) => item.path.startsWith("#"))
      .map((item) => item.path.replace("#", ""));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // If near the top, set to home
      if (scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // Find which section is currently in view
      let current = "home";
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + el.offsetHeight;
          
          // Check if we've scrolled past the section's top
          if (scrollY >= elementTop - 100) {
            current = id;
          }
        }
      }
      
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to check if menu item is active
  const isActive = (menuPath: string) => {
    if (menuPath === "/") {
      return activeSection === "home";
    }
    if (menuPath.startsWith("#")) {
      return activeSection === menuPath.replace("#", "");
    }
    return false;
  };

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center transition-all duration-300 ${
        sticky
          ? "fixed z-[9999] bg-white/70 shadow-sticky backdrop-blur-xl dark:bg-black/70 dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-60 max-w-full px-4 text-[#4A6CF7] text-xl md:text-2xl font-black tracking-tighter">
            <Link
              href="/"
              className={`header-logo block w-full transition-transform duration-300 hover:scale-105 ${
                sticky ? "py-4" : "py-8"
              }`}
              onClick={(e) => handleNavClick(e, "/")}
            >
              CODERZWEB
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex w-full items-center justify-end px-4">
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 w-[250px] rounded-2xl border border-white/10 bg-white/90 px-6 py-4 backdrop-blur-xl duration-300 dark:bg-black/90 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100 shadow-2xl"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:items-center lg:space-x-10">
                {menuData.map((menuItem) => (
                  <li key={menuItem.id} className="group relative">
                    <Link
                      href={menuItem.path.startsWith("#") ? "/" : menuItem.path}
                      onClick={(e) => handleNavClick(e, menuItem.path)}
                      className={`flex py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 lg:inline-flex lg:px-0 lg:py-4 ${
                        isActive(menuItem.path)
                          ? "text-primary dark:text-white"
                          : "text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
                <li className="mt-4 lg:ml-4 lg:mt-0">
                  <ThemeToggler />
                </li>
              </ul>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="ml-4 rounded-xl border border-primary/20 bg-primary/5 p-2 lg:hidden"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${navbarOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${navbarOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${navbarOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;