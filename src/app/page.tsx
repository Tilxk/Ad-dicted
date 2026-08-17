import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/why-us";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#FEFFF9] selection:bg-[#BFE93F] selection:text-[#1A1A1A]">
      {/* Complete Landing Page Flow */}
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
