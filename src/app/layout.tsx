import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import ThemeButton from "@/components/ThemeButton/ThemeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego Simal",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      id="body"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className=""><ThemeButton/></div> */}
        {children}
      </body>
    </html>
  );
}
