"use client"
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaChair } from "react-icons/fa";
import Link from "next/link";

const FurnitureNavLinks = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "Shop", url: "/shop" },
  { id: 3, label: "Collections", url: "/collections" },
  { id: 4, label: "About", url: "/about" },
  { id: 5, label: "Contact", url: "/contact" },
];

interface Props {
  closeNav: () => void;
  showNav: boolean;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ${
      showNav ? "opacity-100 visible" : "opacity-0 invisible"
    }`}>
      
      {/* Overlay with blur */}
      <div 
        onClick={closeNav}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 ${
          showNav ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* Elegant Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-neutral-900 shadow-xl transform transition-transform duration-500 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          
          {/* Elegant Header */}
          <div className="flex items-center justify-between pb-8 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <FaChair className="text-gray-900 text-xl" />
              </div>
              <div>
                <span className="text-white text-xl font-bold block">FurniStore</span>
                <span className="text-amber-500 text-xs">Premium Furniture</span>
              </div>
            </div>
            
            {/* Close Button */}
            <CgClose
              onClick={closeNav}
              className="text-gray-400 text-2xl cursor-pointer hover:text-amber-500 transition-colors hover:rotate-90 duration-300"
            />
          </div>
          
          {/* Elegant Navigation Links */}
          <div className="flex-1 py-8 space-y-2">
            {FurnitureNavLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={closeNav}
                className="flex items-center text-gray-300 text-lg font-medium py-4 px-4 rounded-lg hover:bg-amber-900/30 hover:text-amber-500 transition-all duration-300 group"
              >
                <span className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500 text-sm mr-3 group-hover:bg-amber-500/30 transition-colors">
                  {index + 1}
                </span>
                {link.label}
                <span className="ml-auto text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </Link>
            ))}
          </div>

          {/* Elegant Footer */}
          <div className="border-t border-gray-700 pt-6">
            <button 
              className="w-full bg-amber-600 text-gray-900 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 mb-3"
            >
              Sign In
            </button>
            <p className="text-gray-500 text-xs text-center">
              Quality Furniture for Every Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;