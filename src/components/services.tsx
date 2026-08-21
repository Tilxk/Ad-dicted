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
    <section id="services" className="w-full bg-[#F8F8FA] text-[#080808] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 select-none">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10 sm:space-y-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#080808]/10 pb-6 sm:pb-8">
          <div>
            <span
              className="text-xs uppercase font-medium tracking-widest text-[#080808]/70"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              Our Expertise, Your Growth
            </span>
          </div>

          <div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#080808] tracking-tight uppercase"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              Our Advantages
            </h2>
          </div>
        </div>

        {/* 5-Card Grid in White Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="rounded-[32px] sm:rounded-[36px] bg-[#FEFFF9] text-[#080808] border border-[#080808]/10 hover:border-[#080808]/30 p-6 sm:p-8 md:p-9 flex flex-col justify-between h-[380px] sm:h-[420px] lg:h-[440px] relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* TOP SECTION */}
              <div className="flex items-start justify-between z-10">
                {/* Top-Left Outlined Pill */}
                <span
                  className="px-3.5 py-1 rounded-full border border-[#080808] text-xs font-semibold text-[#080808] tracking-wide"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  {service.tag}
                </span>

                {/* Top-Right Large Diagonal Arrow */}
                <ArrowUpRight className="w-10 h-10 text-[#5533FF] stroke-[2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* MAIN CONTENT SECTION */}
              <div className="my-auto py-2 z-10">
                <h3
                  className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#080808] leading-[1.2] tracking-tight"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  <span className="block">{service.titleLine1}</span>
                  <span className="block">{service.titleLine2}</span>
                </h3>
              </div>

              {/* BOTTOM SECTION - Number cropped at bottom edge */}
              <div className="flex items-end justify-between relative z-10 pt-2">
                {/* Bottom-Left Number cropped at bottom edge */}
                <span
                  className="text-7xl sm:text-8xl md:text-9xl font-normal text-[#080808] tracking-tighter leading-none -mb-6 sm:-mb-8 translate-y-4 sm:translate-y-6 select-none pointer-events-none"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  {service.num}
                </span>

                {/* Bottom-Right CTA: 'more →' */}
                <a
                  href="#contact"
                  className="flex items-center space-x-2 group/btn pb-1 z-10"
                  style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
                >
                  <span className="px-4 py-1.5 rounded-full border border-[#080808] text-xs font-semibold text-[#080808] group-hover/btn:bg-[#080808] group-hover/btn:text-[#FEFFF9] transition-colors">
                    more
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#080808] flex items-center justify-center text-[#080808] group-hover/btn:bg-[#5533FF] group-hover/btn:border-[#5533FF] group-hover/btn:text-[#FEFFF9] transition-colors">
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
