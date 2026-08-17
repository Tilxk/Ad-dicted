import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ad-dicted | Digital Marketing & Ad Creative Studio",
  description: "Next-generation digital advertising, high-converting creative strategies, and data-driven performance growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
