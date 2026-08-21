"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [isSplit, setIsSplit] = useState(false);

  useEffect(() => {
    // Automatically trigger 50/50 split after 5000ms (5 seconds)
    const timer = setTimeout(() => {
      setIsSplit(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row select-none relative overflow-hidden bg-[#1A1A1A]">
      {/* LEFT COLUMN: Volt Lime #BFE93F background blending seamlessly to top */}
      <motion.div
        className="bg-[#BFE93F] text-[#1A1A1A] flex flex-col justify-between p-6 sm:p-12 md:p-16 pt-24 sm:pt-28 md:pt-32 z-20 relative"
        initial={{ width: "100%" }}
        animate={{ width: isSplit ? "50%" : "100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Headline: "WE CREATE THE HYPE" */}
        <div className="flex-1 flex flex-col justify-center my-auto py-8 md:py-16">
          <motion.div
            layout
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className={`w-full flex flex-col ${
              isSplit ? "items-start text-left" : "items-center text-center"
            }`}
          >
            <h1
              className={`font-black tracking-tighter leading-[0.88] uppercase text-[#1A1A1A] transition-all duration-1000 ${
                isSplit
                  ? "text-5xl sm:text-7xl lg:text-[7.5rem]"
                  : "text-6xl sm:text-8xl lg:text-[11rem]"
              }`}
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              <span className="block">WE CREATE</span>
              <span className="block">THE HYPE</span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Metadata Footer with Chennai Location */}
        <div
          className="w-full border-t border-[#1A1A1A]/20 pt-6 flex items-center justify-between text-xs sm:text-sm font-bold tracking-wider text-[#1A1A1A] uppercase"
          style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
        >
          <span>BASED IN CHENNAI, INDIA</span>
          <span>EST. 2024</span>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: Image Text Placeholder Panel */}
      <motion.div
        className="bg-[#FEFFF9] text-[#1A1A1A] flex flex-col justify-between z-10 border-l border-[#1A1A1A]/10 overflow-hidden pt-24 sm:pt-28 md:pt-32"
        initial={{ width: "0%", opacity: 0 }}
        animate={{
          width: isSplit ? "50%" : "0%",
          opacity: isSplit ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="p-6 sm:p-12 md:p-16 h-full flex flex-col justify-between w-full min-w-[320px]">
          {/* Image Text Placeholder Box */}
          <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-[#1A1A1A]/30 rounded-3xl p-8 sm:p-12 my-auto bg-[#1A1A1A]/5 text-center group hover:border-[#1A1A1A]/60 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] text-[#FEFFF9] flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
              📷
            </div>
            <span
              className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#1A1A1A] mb-2"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              [ IMAGE PLACEHOLDER ]
            </span>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/60 font-semibold max-w-xs leading-relaxed">
              High-resolution brand campaign visual or video asset container
            </p>
          </div>

          {/* Right Panel Subtext with Chennai Agency Info */}
          <div
            className="w-full border-t border-[#1A1A1A]/10 pt-6 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1A1A1A]/70 uppercase"
            style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
          >
            <span>A BOUTIQUE MARKETING + CREATIVE AGENCY • CHENNAI</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
