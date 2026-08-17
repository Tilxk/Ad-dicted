import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ad-dicted | Digital Marketing & Ad Creative Studio",
  description: "Next-generation digital advertising, high-converting creative strategies, and data-driven growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Zalando+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#1A1A1A] text-[#FEFFF9] selection:bg-[#BFE93F] selection:text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
