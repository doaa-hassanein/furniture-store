"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("All Products");

  // بيانات التصنيفات
  const filters = [
    "All Products",
    "Latest Products",
    "Best Sellers",
    "Featured Products",
  ];

  // بيانات المنتجات - 8 منتجات مختلفين بصور مختلفة
  const allProducts = [
    {
      id: 1,
      name: "Modern Sofa Chair",
      category: "Chair",
      price: 120.0,
      originalPrice: 150.0,
      discount: 20,
      rating: 4.8,
      image: "/images/c1.jpg",
      isNew: true,
      isBestSeller: false,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      category: "Table",
      price: 450.0,
      originalPrice: 600.0,
      discount: 25,
      rating: 4.9,
      image: "/images/s9.jpg",
      isNew: false,
      isBestSeller: true,
      isFeatured: true,
    },
    {
      id: 3,
      name: "Minimalist Bookshelf",
      category: "Storage",
      price: 220.0,
      originalPrice: 275.0,
      discount: 20,
      rating: 4.7,
      image: "/images/c3jpg.jpg",
      isNew: true,
      isBestSeller: true,
      isFeatured: true,
    },
    {
      id: 4,
      name: "Glass Coffee Table",
      category: "Table",
      price: 180.0,
      originalPrice: 225.0,
      discount: 20,
      rating: 4.6,
      image: "/images/c9.jpg",
      isNew: true,
      isBestSeller: false,
      isFeatured: true,
    },
    {
      id: 5,
      name: "Ergonomic Office Chair",
      category: "Chair",
      price: 199.0,
      originalPrice: 249.0,
      discount: 20,
      rating: 4.8,
      image: "/images/Ergonomic Office Chairjpg.jpg",
      isNew: false,
      isBestSeller: true,
      isFeatured: false,
    },
    {
      id: 6,
      name: "Luxury Wardrobe",
      category: "Storage",
      price: 380.0,
      originalPrice: 475.0,
      discount: 20,
      rating: 4.9,
      image: "/images/Luxury Wardrobe.jpg",
      isNew: true,
      isBestSeller: false,
      isFeatured: true,
    },
    {
      id: 7,
      name: "Modern Floor Lamp",
      category: "Lighting",
      price: 120.0,
      originalPrice: 150.0,
      discount: 20,
      rating: 4.7,
      image: "/images/d9jpg.jpg",
      isNew: true,
      isBestSeller: false,
      isFeatured: true,
    },
    {
      id: 8,
      name: "Comfort Bean Bag",
      category: "Chair",
      price: 85.0,
      originalPrice: 110.0,
      discount: 23,
      rating: 4.5,
      image: "/images/c5.jpg", // الصورة الأصلية للـ Bean Bag
      isNew: false,
      isBestSeller: true,
      isFeatured: false,
    },
  ];

  // فلترة المنتجات حسب التصنيف المختار
  const filteredProducts = allProducts.filter((product) => {
    switch (activeFilter) {
      case "Latest Products":
        return product.isNew;
      case "Best Sellers":
        return product.isBestSeller;
      case "Featured Products":
        return product.isFeatured;
      default:
        return true; // All Products
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 px-4 bg-white min-h-screen flex items-center" id="products">
      <div className="max-w-7xl mx-auto w-full">
        {/* العنوان الرئيسي */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Discover Our Premium Collection
          </p>
        </motion.div>

        {/* أزرار التصفية */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* شبكة المنتجات */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          key={activeFilter}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              {/* صورة المنتج */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* الخصم */}
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {product.discount}% off
                </div>

                {/* التقييم */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  ⭐ {product.rating}
                </div>

                {/* Badge للمنتجات الجديدة */}
                {product.isNew && (
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                )}
              </div>

              {/* محتوى المنتج */}
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    {product.category}
                  </p>
                </div>

                {/* السعر */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* الزر */}
                <button className="w-full bg-amber-600 text-white py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-200 text-sm">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* زر عرض المزيد */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-all duration-300 text-sm">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
