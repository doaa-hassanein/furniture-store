"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Sale = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // عروض اليوم
  const dailyDeals = [
    {
      id: 1,
      name: "Recliner Chair Wood",
      category: "Chair",
      price: 105.0,
      originalPrice: 450.0,
      discount: 70,
      rating: 5.0,
      image: "/images/c1.jpg",
      tag: "Deal of the Day",
      timeLeft: "6:24:32",
    },
    {
      id: 2,
      name: "Recliner Chair Steel",
      category: "Chair",
      price: 80.0,
      originalPrice: 490.0,
      discount: 84,
      rating: 4.9,
      image: "/images/s2.jpg",
      tag: "Limited Offer",
      timeLeft: "8:15:45",
    },
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
    <section className="py-10 px-4 " id="sale">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎯 Flash <span className="text-amber-600">Sale</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Limited time offers! Don&apos;t miss out on these amazing deals
          </p>
        </motion.div>

        {/* عروض اليوم */}
        <motion.div
          ref={ref}
          className="mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dailyDeals.map((deal) => (
              <motion.div
                key={deal.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* الصورة */}
                  <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* التاج */}
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {deal.tag}
                    </div>

                    {/* الخصم الكبير */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-2xl font-bold text-amber-600">
                        {deal.discount}% OFF
                      </span>
                    </div>
                  </div>

                  {/* المحتوى */}
                  <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {deal.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{deal.category}</p>

                      {/* التقييم */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-amber-400">
                          {"⭐".repeat(5)}
                        </div>
                        <span className="text-gray-600 font-semibold">
                          {deal.rating}
                        </span>
                      </div>

                      {/* السعر */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-gray-900">
                          ${deal.price.toFixed(2)}
                        </span>
                        <span className="text-xl text-gray-500 line-through">
                          ${deal.originalPrice.toFixed(2)}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                          Save ${(deal.originalPrice - deal.price).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* الوقت المتبقي */}
                    <div className="bg-gray-100 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-600 mb-2">
                        Offer ends in:
                      </p>
                      <div className="flex gap-4 justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-amber-600">
                            06
                          </div>
                          <div className="text-xs text-gray-600">Hours</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-amber-600">
                            24
                          </div>
                          <div className="text-xs text-gray-600">Minutes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-amber-600">
                            32
                          </div>
                          <div className="text-xs text-gray-600">Seconds</div>
                        </div>
                      </div>
                    </div>

                    {/* الأزرار */}
                    <div className="flex gap-4">
                      <button className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
                        Buy Now
                      </button>
                      <button className="flex-1 border border-amber-600 text-amber-600 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sale;
