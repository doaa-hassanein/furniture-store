"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const CategoriesWithImages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // بيانات الفئات مع الصور
  const categories = [
    {
      id: 1,
      title: "Chairs",
      count: "1500+ Items",
      description: "Discover comfortable and stylish chairs for every space",
      image: "/images/a.jpg",
      subcategories: ["Gaming", "Office", "Dining", "Lounge"]
    },
    {
      id: 2,
      title: "Sofa",
      count: "750+ Items", 
      description: "Transform your living space with our sofa collection",
      image: "/images/f4.avif",
      subcategories: ["Sectional", "Reception", "Curved", "Armless"]
    },
    {
      id: 3,
      title: "Lighting",
      count: "450+ Items",
      description: "Illuminate your home with elegant lighting solutions",
      image: "/images/ejpg.jpg",
      subcategories: ["Table", "Floor", "Ceiling", "Wall"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* العنوان */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Shop By <span className="text-amber-600">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our carefully curated furniture categories
          </p>
        </motion.div>

        {/* الفئات مع تصميم مختلف */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ y: -10 }}
            >
              {/* كارد مع صورة */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg ">
                {/* الصورة */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover "
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* المحتوى على الصورة */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <span className="bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">
                      {category.description}
                    </p>
                    
                    {/* الساب كاتيجوريز */}
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.map((sub, subIndex) => (
                        <span 
                          key={subIndex}
                          className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs border border-white/30"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-300 hover:shadow-lg">
            Browse All Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesWithImages;