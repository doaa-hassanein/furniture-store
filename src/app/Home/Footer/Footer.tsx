"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* القسم العلوي */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* social media */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center gap-3 mb-6"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  FurniCraft
                </span>
              </motion.div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Transform your space with our exquisite furniture collection. We
                bring quality, style, and comfort to every home and office.
              </p>
              {/* social media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12  rounded-xl flex items-center justify-center bg-blue-400 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-600 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12  rounded-xl flex items-center justify-center bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </div>

            {/* العمود الثاني - روابط سريعة */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-amber-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Shop",
                  "About",
                  "Collections",
                  "Blog",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 "
                      whileHover={{ x: 5 }}  // slight move to the right on hover
                    >
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-amber-400">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">123 Furniture Street</p>
                    <p className="text-sm">Design District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">+1 (555) 123-4567</p>
                    <p className="text-sm">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">info@furnicraft.com</p>
                    <p className="text-sm">support@furnicraft.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* القسم السفلي */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 FurniCraft. All rights reserved. Crafted with ❤️ for
            beautiful spaces.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <motion.a
              href="#"
              className="hover:text-amber-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-amber-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-amber-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
