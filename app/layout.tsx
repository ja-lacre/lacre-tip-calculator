import { Space_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export const metadata = {
  title: "Laboratory 4 - Tip Calculator",
  description: "Lacre Laboratory 4 - Tip Calculator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} bg-[hsl(185,41%,84%)] min-h-screen flex flex-col items-center justify-center`}>
        {children}
      </body>
    </html>
  );
}