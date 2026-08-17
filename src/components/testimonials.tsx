import React from "react";
import { Plus, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#1A1A1A] text-[#FEFFF9] py-24 px-6 sm:px-12 md:px-16 select-none">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section matching reference image */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#BFE93F] text-[#1A1A1A] flex items-center justify-center text-[10px] font-bold">
              ✓
            </div>
            <span
              className="text-xs font-semibold tracking-widest text-[#FEFFF9]/70"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              Testimonials
            </span>
          </div>

          <h2
            className="text-6xl sm:text-8xl lg:text-[7rem] font-black text-[#FEFFF9] tracking-tighter leading-none"
            style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
          >
            Experiences<span className="text-[#BFE93F]">.</span>
          </h2>

          <span
            className="text-xs font-bold text-[#FEFFF9]/40 tracking-wider pt-1"
            style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
          >
            ©2026
          </span>
        </div>

        {/* 4-Column Bento Card Grid matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 items-stretch">
          
          {/* CARD 1: Summary & Leave a Review Card */}
          <div className="rounded-3xl bg-[#FEFFF9] text-[#1A1A1A] p-8 flex flex-col justify-between h-auto min-h-[440px] shadow-xl">
            {/* Top Score */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-baseline">
                <span
                  className="text-5xl font-black text-[#1A1A1A]"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  4.9
                </span>
                <span className="text-sm font-bold text-[#1A1A1A]/50 ml-1">/5</span>
              </div>
              <p className="text-xs text-[#1A1A1A]/70 leading-snug font-medium max-w-[130px]">
                We've delivered 56+ projects that help companies generate real results.
              </p>
            </div>

            {/* Middle Brand & Social Proof */}
            <div className="my-auto py-6 space-y-4">
              <div
                className="text-xl font-extrabold tracking-tight text-[#1A1A1A]"
                style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
              >
                AD-DICTED®
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FEFFF9] bg-[#1A1A1A] text-[#BFE93F] font-bold text-xs flex items-center justify-center">
                    JC
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FEFFF9] bg-[#BFE93F] text-[#1A1A1A] font-bold text-xs flex items-center justify-center">
                    ED
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FEFFF9] bg-[#333333] text-[#FEFFF9] font-bold text-xs flex items-center justify-center">
                    AM
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FEFFF9] bg-[#1A1A1A] text-[#FEFFF9] text-[10px] font-bold flex items-center justify-center">
                    56+
                  </div>
                </div>
                <div className="text-[10px] font-bold text-[#1A1A1A]/70 leading-tight">
                  <div className="text-[#BFE93F] text-xs">★★★★★</div>
                  Trusted by clients worldwide
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <a
              href="#contact"
              className="w-full py-3.5 rounded-full bg-[#1A1A1A] text-[#FEFFF9] hover:bg-[#BFE93F] hover:text-[#1A1A1A] font-bold text-xs text-center transition-colors shadow-md"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              Leave a review
            </a>
          </div>

          {/* CARD 2: Split Review Card 2 */}
          <div className="flex flex-col space-y-4 justify-between h-auto min-h-[440px]">
            {/* Top User Box */}
            <div className="rounded-3xl bg-[#FEFFF9] text-[#1A1A1A] p-6 flex items-center space-x-4 shadow-xl">
              <div className="w-11 h-11 rounded-full bg-[#1A1A1A] text-[#BFE93F] font-bold text-sm flex items-center justify-center shrink-0">
                JC
              </div>
              <div>
                <h4
                  className="text-sm font-bold text-[#1A1A1A]"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  James Carter
                </h4>
                <p className="text-xs text-[#1A1A1A]/50 font-medium">Wilson & Co</p>
              </div>
            </div>

            {/* Bottom Quote Box */}
            <div className="rounded-3xl bg-[#FEFFF9] text-[#1A1A1A] p-8 flex-1 flex flex-col justify-between shadow-xl">
              <div className="flex items-center justify-between text-xs text-[#1A1A1A]/40">
                <span className="text-[#BFE93F] text-sm">★★★★★</span>
                <Plus className="w-4 h-4 text-[#1A1A1A]/40" />
              </div>
              <p
                className="text-sm sm:text-base font-semibold text-[#1A1A1A] leading-relaxed mt-auto pt-6"
                style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
              >
                Incredible team! They delivered exactly what we needed, on time and beyond expectations.
              </p>
            </div>
          </div>

          {/* CARD 3: Split Review Card 3 */}
          <div className="flex flex-col space-y-4 justify-between h-auto min-h-[440px]">
            {/* Top Quote Box */}
            <div className="rounded-3xl bg-[#FEFFF9] text-[#1A1A1A] p-8 flex-1 flex flex-col justify-between shadow-xl">
              <p
                className="text-sm sm:text-base font-semibold text-[#1A1A1A] leading-relaxed"
                style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
              >
                A smooth process from start to finish. Highly professional team!
              </p>
              <div className="flex items-center justify-between text-xs text-[#1A1A1A]/40 pt-6">
                <span className="text-[#BFE93F] text-sm">★★★★★</span>
                <Plus className="w-4 h-4 text-[#1A1A1A]/40" />
              </div>
            </div>

            {/* Bottom User Box */}
            <div className="rounded-3xl bg-[#FEFFF9] text-[#1A1A1A] p-6 flex items-center space-x-4 shadow-xl">
              <div className="w-11 h-11 rounded-full bg-[#BFE93F] text-[#1A1A1A] font-bold text-sm flex items-center justify-center shrink-0">
                ED
              </div>
              <div>
                <h4
                  className="text-sm font-bold text-[#1A1A1A]"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  Emily Davis
                </h4>
                <p className="text-xs text-[#1A1A1A]/50 font-medium">StartUp Hub</p>
              </div>
            </div>
          </div>

          {/* CARD 4: Split Review Card 4 */}
          <div className="flex flex-col space-y-4 justify-between h-auto min-h-[440px]">
            {/* Top User Box */}
            <div className="rounded-3xl bg-[#FEFFF9] text-[#1A1A1A] p-6 flex items-center space-x-4 shadow-xl">
              <div className="w-11 h-11 rounded-full bg-[#333333] text-[#FEFFF9] font-bold text-sm flex items-center justify-center shrink-0">
                AM
              </div>
              <div>
                <h4
                  className="text-sm font-bold text-[#1A1A1A]"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  Anna Martinez
                </h4>
                <p className="text-xs text-[#1A1A1A]/50 font-medium">Marketing Director</p>
              </div>
            </div>

            {/* Bottom Quote Box */}
            <div className="rounded-3xl bg-[#FEFFF9] text-[#1A1A1A] p-8 flex-1 flex flex-col justify-between shadow-xl">
              <div className="flex items-center justify-between text-xs text-[#1A1A1A]/40">
                <span className="text-[#BFE93F] text-sm">★★★★★</span>
                <Plus className="w-4 h-4 text-[#1A1A1A]/40" />
              </div>
              <p
                className="text-sm sm:text-base font-semibold text-[#1A1A1A] leading-relaxed mt-auto pt-6"
                style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
              >
                Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
