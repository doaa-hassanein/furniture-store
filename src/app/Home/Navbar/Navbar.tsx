"use client";
import React, { useEffect, useState } from "react";
import { FaChair, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const FurnitureNavLinks = [
  { id: 1, label: "Home", url: "#hero" },
  { id: 2, label: "Shop", url: "#shop" },
  { id: 3, label: "Categories", url: "#categories" },
  { id: 4, label: "Blog", url: "#blog" },
  { id: 5, label: "Testimonials", url: "#testimonials" },
  { id: 6, label: "Q&A", url: "#faq" },
];

type Props = {
  openNav?: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavBg(scrollY > 90);
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinNow = () => {
    console.log("Join Now button clicked!");
  };

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-500 ${
        navBg
          ? "h-[10vh] bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg shadow-lg shadow-black/10 border-b border-gray-100"
          : "h-[12vh] bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg border-b border-gray-100/20"
      }`}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-105 ${
              navBg
                ? "bg-amber-500"
                : "bg-gradient-to-br from-amber-500 to-amber-600"
            }`}
          >
            <FaChair className="text-white text-xl" />
          </div>
          <h1
            className={`text-xl md:text-2xl font-bold font-serif transition-colors duration-500 ${
              navBg ? "text-gray-100" : "text-amber-400"
            }`}
          >
            FurniStore
          </h1>
        </Link>

        {/* Navlinks */}
        <div className="hidden lg:flex space-x-10 items-center">
          {FurnitureNavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`font-medium transition-all duration-300 relative group py-2 ${
                navBg
                  ? "text-gray-100 hover:text-amber-400"
                  : "text-gray-100 hover:text-amber-400"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  navBg ? "bg-amber-400" : "bg-amber-500"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Icons & Button */}
        <div className="flex items-center space-x-4">
          {/* User Icon */}
          <div
            className={`hidden md:flex items-center rounded-full p-2 transition-all duration-300 cursor-pointer ${
              navBg ? "hover:bg-gray-100" : "hover:bg-amber-50"
            }`}
          >
            <FaUser
              className={`text-lg ${
                navBg ? "text-amber-400" : "text-amber-400"
              }`}
            />
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleJoinNow}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg active:scale-95 border ${
              navBg
                ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-600 hover:border-amber-600 hover:shadow-amber-500/25"
                : "bg-white text-amber-700 border-amber-200 hover:bg-amber-50 hover:border-amber-300 hover:shadow-amber-200/50"
            }`}
          >
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <HiBars3BottomRight
            onClick={openNav}
            className={`text-2xl lg:hidden cursor-pointer transition-all duration-300 hover:scale-110 ${
              navBg
                ? "text-gray-700 hover:text-amber-600"
                : "text-amber-700 hover:text-amber-800"
            }`}
          />
        </div>
      </div>

      {/* Decorative Element */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-80"></div>
      )}
    </div>
  );
};

export default Navbar;
