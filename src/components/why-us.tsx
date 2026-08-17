import React from "react";

export function WhyUs() {
  return (
    <section id="why-us" className="w-full bg-[#242424] text-[#FEFFF9] py-16 sm:py-24 px-6 sm:px-12 md:px-16 relative overflow-hidden select-none">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BFE93F]/5 blur-[150px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col space-y-12 md:space-y-16">
        {/* Top Row: Rating Badge & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Top Left: Rating Badge */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#333333]">
              <div className="flex items-center text-[#BFE93F] text-sm space-x-1">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span
                className="text-xs font-bold text-[#FEFFF9] tracking-wide"
                style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
              >
                4.97/5 reviews
              </span>
            </div>
          </div>

          {/* Top Right: Mission Statement */}
          <div className="lg:col-span-8">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#FEFFF9] leading-[1.25] tracking-tight"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              We are passionate about empowering{" "}
              <span className="text-[#FEFFF9]">brands and businesses</span> to take{" "}
              <span className="text-[#FEFFF9]/50">
                control of their ad performance and achieve explosive revenue growth.
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom Row: 4 Metric Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-[#333333]">
          {/* Metric 1 */}
          <div className="flex flex-col space-y-2">
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#BFE93F] tracking-tight"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              95%
            </span>
            <p className="text-xs sm:text-sm text-[#FEFFF9]/60 leading-relaxed font-semibold">
              Customer satisfaction rate, reflecting our creative dedication
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col space-y-2">
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FEFFF9] tracking-tight"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              10+
            </span>
            <p className="text-xs sm:text-sm text-[#FEFFF9]/60 leading-relaxed font-semibold">
              Innovation and insight driving client growth journeys
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col space-y-2">
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FEFFF9] tracking-tight"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              $10m
            </span>
            <p className="text-xs sm:text-sm text-[#FEFFF9]/60 leading-relaxed font-semibold">
              Ad spend managed ensuring high ROAS and efficient ROI
            </p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col space-y-2">
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FEFFF9] tracking-tight"
              style={{ fontFamily: "'Zalando Sans', system-ui, sans-serif" }}
            >
              50m
            </span>
            <p className="text-xs sm:text-sm text-[#FEFFF9]/60 leading-relaxed font-semibold">
              Users reached worldwide with high-converting creative ads
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
