"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Shop = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // بيانات المقالات
  const blogPosts = [
    {
      id: 1,
      date: "15 April 2024",
      title: "Furniture Trends 2024: What's Hot and What's Not",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/images/x1.jpg",
      category: "Trends"
    },
    {
      id: 2,
      date: "14 April 2024",
      title: "The Ultimate Guide to Choosing the Perfect Kitchen Cabinets",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/images/k1.jpg",
      category: "Guide"
    },
    {
      id: 3,
      date: "12 April 2024",
      title: "Choosing the Right Bed room for Your Lifestyle",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/images/x3.jpg",
      category: "Lifestyle"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-white" id="blog">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Latest<br />
              <span className="text-amber-600">News & Blogs</span>
            </h2>
          </div>
          
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
            View All Blogs
          </button>
        </motion.div>

        {/* شبكة المقالات */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* صورة المقال - المعدلة */}
              <div className="relative h-64 overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover  transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {post.category}
                    </span>
                  </div>
                )}
                
                {/* تاريخ المقال */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg z-10">
                  <span className="text-sm font-semibold text-amber-600">
                    {post.date}
                  </span>
                </div>

                {/* شريط التصنيف */}
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-lg z-10">
                  <span className="text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* محتوى المقال */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* زر Read More */}
                <button className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group">
                  Read More
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;