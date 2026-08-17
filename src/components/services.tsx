import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const servicesList = [
  {
    num: "01",
    tag: "Advantage",
    titleLine1: "Personalized",
    titleLine2: "Ad Campaigns",
  },
  {
    num: "02",
    tag: "Advantage",
    titleLine1: "Precision And",
    titleLine2: "Accuracy",
  },
  {
    num: "03",
    tag: "Advantage",
    titleLine1: "Creative Video",
    titleLine2: "Production",
  },
  {
    num: "04",
    tag: "Advantage",
    titleLine1: "Conversion Rate",
    titleLine2: "Optimization",
  },
  {
    num: "05",
    tag: "Advantage",
    titleLine1: "Omnichannel",
    titleLine2: "Brand Scaling",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-[#1A1A1A] text-[#FEFFF9] py-20 px-6 sm:px-12 md:px-16 select-none">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#333333] pb-8">
          <div>
            <span
              className="text-xs uppercase font-medium tracking-widest text-[#BFE93F]"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              Our Expertise, Your Growth
            </span>
          </div>

          <div>
            <h2
              className="text-4xl sm:text-6xl font-black text-[#FEFFF9] tracking-tight uppercase"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              Our Advantages
            </h2>
          </div>
        </div>

        {/* 5-Card Grid in Brand Color Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="rounded-[36px] bg-[#242424] text-[#FEFFF9] border border-[#333333] hover:border-[#BFE93F]/50 p-8 sm:p-10 flex flex-col justify-between h-[450px] sm:h-[500px] relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
            >
              {/* Radial glow accent in top right */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#BFE93F]/10 blur-3xl rounded-full pointer-events-none" />

              {/* TOP SECTION */}
              <div className="flex items-start justify-between z-10">
                {/* Top-Left Outlined Pill */}
                <span
                  className="px-4 py-1.5 rounded-full border border-[#FEFFF9]/30 text-xs font-semibold text-[#FEFFF9] tracking-wide group-hover:border-[#BFE93F] transition-colors"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  {service.tag}
                </span>

                {/* Top-Right Large Diagonal Arrow in Volt Lime #BFE93F */}
                <ArrowUpRight className="w-12 h-12 text-[#BFE93F] stroke-[2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* MAIN CONTENT SECTION - Medium size text */}
              <div className="my-auto py-2 z-10">
                <h3
                  className="text-xl sm:text-3xl font-medium text-[#FEFFF9] leading-[1.15] tracking-tight group-hover:text-[#FEFFF9] transition-colors"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  <span className="block">{service.titleLine1}</span>
                  <span className="block">{service.titleLine2}</span>
                </h3>
              </div>

              {/* BOTTOM SECTION - Number cut off at bottom edge by overflow-hidden */}
              <div className="flex items-end justify-between relative pt-4 z-10">
                {/* Bottom-Left Number cropped at bottom edge */}
                <span
                  className="text-8xl sm:text-[11rem] font-normal text-[#FEFFF9] tracking-tighter leading-none -mb-8 sm:-mb-12 translate-y-6 sm:translate-y-8 select-none pointer-events-none opacity-90"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  {service.num}
                </span>

                {/* Bottom-Right CTA: 'more  →' */}
                <a
                  href="#contact"
                  className="flex items-center space-x-2 group/btn pb-2 z-10"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  <span className="px-5 py-1.5 rounded-full border border-[#FEFFF9]/30 text-xs font-semibold text-[#FEFFF9] group-hover/btn:bg-[#BFE93F] group-hover/btn:border-[#BFE93F] group-hover/btn:text-[#1A1A1A] transition-colors">
                    more
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#FEFFF9]/30 flex items-center justify-center text-[#BFE93F] group-hover/btn:bg-[#BFE93F] group-hover/btn:border-[#BFE93F] group-hover/btn:text-[#1A1A1A] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
