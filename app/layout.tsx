import "./globals.css";
import React from "react";

export const metadata = {
  title: "Laboratory 4 - Tip Calculator",
  description: "Lacre Laboratory 4 - Tip Calculator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center p-6">
        <main className="w-full max-w-3xl">{children}</main>
      </body>
    </html>
  );
}
