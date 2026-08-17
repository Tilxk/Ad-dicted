"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#FEFFF9] pt-12 pb-24 px-6 sm:px-12 md:px-16 select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8 relative z-10">
        
        {/* 1. TOP CTA BANNER CARD matching reference image */}
        <div className="w-full rounded-[36px] bg-[#242424] border border-[#333333] p-10 sm:p-16 md:p-20 text-center flex flex-col items-center justify-center space-y-6 shadow-2xl relative overflow-hidden">
          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#BFE93F]/10 blur-3xl rounded-full pointer-events-none" />

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#FEFFF9] tracking-tight max-w-2xl leading-tight relative z-10"
            style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
          >
            Turn your data into clarity
          </h2>

          <p className="text-sm sm:text-base text-[#FEFFF9]/70 max-w-md mx-auto leading-relaxed relative z-10 font-medium">
            Ad-dicted makes it effortless to uncover ad performance insights and share them with your team.
          </p>

          <div className="pt-2 relative z-10">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-2xl bg-[#FEFFF9] text-[#1A1A1A] hover:bg-[#BFE93F] font-bold text-sm sm:text-base transition-all duration-300 shadow-xl inline-block"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* 2. MAIN FOOTER CARD matching reference image layout */}
        <div className="w-full rounded-[36px] bg-[#FEFFF9] text-[#1A1A1A] p-10 sm:p-14 flex flex-col space-y-12 shadow-2xl relative z-10">
          
          {/* Top Row: Brand Info (Left) + 3 Sitemap Link Columns (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Brand Logo + Description */}
            <div className="lg:col-span-5 space-y-4">
              <a href="#" className="flex items-center space-x-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#1A1A1A] text-[#BFE93F] flex items-center justify-center font-black text-xl shadow-md">
                  A
                </div>
                <span
                  className="text-2xl font-black tracking-wider text-[#1A1A1A]"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  Ad-dicted
                </span>
              </a>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-semibold max-w-sm">
                Ad-dicted helps teams transform complex ad performance data into clear, engaging growth stories — everything you need in one place.
              </p>
            </div>

            {/* Right Columns: Product, Resources, Company */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs sm:text-sm">
              
              {/* Column 1: Product */}
              <div className="space-y-3">
                <h3
                  className="font-black text-[#1A1A1A] uppercase tracking-wider text-xs"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  Product
                </h3>
                <ul className="space-y-2 font-semibold text-[#1A1A1A]/70">
                  <li><a href="#features" className="hover:text-[#1A1A1A] transition-colors">Features</a></li>
                  <li><a href="#services" className="hover:text-[#1A1A1A] transition-colors">Pricing</a></li>
                  <li><a href="#work" className="hover:text-[#1A1A1A] transition-colors">Integrations</a></li>
                  <li><a href="#about" className="hover:text-[#1A1A1A] transition-colors">Updates</a></li>
                </ul>
              </div>

              {/* Column 2: Resources */}
              <div className="space-y-3">
                <h3
                  className="font-black text-[#1A1A1A] uppercase tracking-wider text-xs"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  Resources
                </h3>
                <ul className="space-y-2 font-semibold text-[#1A1A1A]/70">
                  <li><a href="#" className="hover:text-[#1A1A1A] transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-[#1A1A1A] transition-colors">Guides</a></li>
                  <li><a href="#" className="hover:text-[#1A1A1A] transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-[#1A1A1A] transition-colors">Support</a></li>
                </ul>
              </div>

              {/* Column 3: Company */}
              <div className="space-y-3">
                <h3
                  className="font-black text-[#1A1A1A] uppercase tracking-wider text-xs"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  Company
                </h3>
                <ul className="space-y-2 font-semibold text-[#1A1A1A]/70">
                  <li><a href="#about" className="hover:text-[#1A1A1A] transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-[#1A1A1A] transition-colors">Careers</a></li>
                  <li><a href="#contact" className="hover:text-[#1A1A1A] transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-[#1A1A1A] transition-colors">Partners</a></li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Line & Legal Row */}
          <div className="border-t border-[#1A1A1A]/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1A1A1A]/60 font-semibold gap-4">
            <p>© 2026 Ad-dicted. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Privacy Policy</a>
            </div>
          </div>

        </div>

      </div>

      {/* 3. BACKGROUND WATERMARK TEXT below Footer Card */}
      <div
        className="w-full text-center pt-8 sm:pt-12 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-4xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase text-[#FEFFF9]/5 leading-none inline-block tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
        >
          AD-DICTED
        </span>
      </div>
    </footer>
  );
}
