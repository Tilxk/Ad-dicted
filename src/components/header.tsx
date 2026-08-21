"use client";

import React, { useState, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Scroll listener for translucent glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Fixed Overlay Header Bar with 24px Frosted Glassmorphism Blur */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/10 border-b border-black/5 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Brand Logo in Zalando Sans */}
        <a
          href="#"
          className="text-lg sm:text-xl md:text-2xl font-black tracking-wider text-[#1A1A1A] hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
        >
          AD-DICTED
        </a>

        {/* Right Actions: Glass Pill Button + Animated Hamburger Menu Icon */}
        <div className="flex items-center space-x-3 sm:space-x-6 z-50">
          {/* Glassmorphism Responsive Pill CTA Button with 24px Blur */}
          <a
            href="#contact"
            className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#1A1A1A]/40 text-[#1A1A1A] bg-white/20 hover:bg-[#1A1A1A] hover:text-[#BFE93F] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-sm min-h-[38px] sm:min-h-[42px] flex items-center justify-center whitespace-nowrap"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            Get Started
          </a>

          {/* Smooth Morphing Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-[#1A1A1A] hover:opacity-75 transition-opacity focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center group"
            aria-label="Toggle menu navigation"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-4 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 transform origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-200 ${
                  menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 transform origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fully Responsive Slide-in Overlay Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1A1A]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto max-h-screen transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full pt-16 sm:pt-20 flex flex-col space-y-6 sm:space-y-8">
          <nav className="flex flex-col space-y-3 sm:space-y-5 text-2xl sm:text-4xl md:text-6xl font-extrabold text-[#FEFFF9]">
            {[
              { num: "01", label: "Home", href: "#" },
              { num: "02", label: "Services", href: "#services" },
              { num: "03", label: "Showcase", href: "#work" },
              { num: "04", label: "About", href: "#about" },
              { num: "05", label: "Contact", href: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group inline-flex items-center space-x-3 sm:space-x-4 hover:text-[#BFE93F] transition-all duration-300 w-fit"
              >
                <span className="text-xs sm:text-sm font-semibold text-[#BFE93F] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  {item.num}.
                </span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer links inside responsive drawer */}
        <div className="max-w-7xl mx-auto w-full border-t border-[#333333] pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FEFFF9]/50 gap-4">
          <p>© {new Date().getFullYear()} AD-DICTED Studio. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[#FEFFF9]/70 font-semibold">
            <a href="#" className="hover:text-[#BFE93F] transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-[#BFE93F] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#BFE93F] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}
