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
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-60 max-w-full px-4 xl:mr-12 text-[#A9B8FB] text-lg md:text-2xl font-semibold hover:rotate-[-4deg] hover:scale-105 transition-all duration-200">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
              onClick={(e) => handleNavClick(e, "/")}
            >
              CoderzWeb
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* Mobile menu toggle */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>

              {/* Menu items */}
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white dark:bg-black/90 px-6 py-4 duration-300 dark:border-body-color/20 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.title && (
                        <Link
                          href={menuItem.path.startsWith("#") ? "/" : menuItem.path}
                          onClick={(e) => handleNavClick(e, menuItem.path)}
                          className={`flex py-2 text-base justify-center lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 transition-all duration-200 font-semibold ${
                            isActive(menuItem.path)
                              ? "text-primary dark:text-white  text-scale-105 text-rotate-[6deg]"
                              : "text-gray-400  hover:text-primary dark:text-[#A9B8FB]  border-b border-gray-400 lg:border-none hover:border-primary"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Theme toggler */}
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;