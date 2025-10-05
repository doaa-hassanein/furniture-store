import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Home/Navbar/Navbar";
import ResponsiveNav from "./Home/Navbar/ResponsiveNav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FurniStore - Modern Furniture",
  description: "Discover premium modern furniture for your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* إضافة الـ Navbar هنا */}
          <ResponsiveNav />
        
        {/* المساحة علشان المحتوى ميختفي تحت النافبار */}
        <div className="pt-[12vh] min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}