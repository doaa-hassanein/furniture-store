"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const HeroWithSlider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

 
  const slides = [
    {
      id: 1,
      image: "/images/a5.jpg", 
      alt: "Modern Living Room",
    },
    {
      id: 2,
      image: "/images/a3jpg.jpg",
      alt: "Luxury Bedroom",
    },
    {
      id: 3,
      image: "/images/a2.jpg",
      alt: "Contemporary Dining Room",
    },
  ];

  // أوتوماتيك سلايدر
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // يغير الصورة كل 5 ثواني

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // bg-gradient-to-br from-amber-50 to-amber-100

  return (
    <motion.section
      ref={ref}
      className="min-h-screen  py-10 mt-0 px-4 flex items-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto w-full" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* النص على اليسار */}
          <motion.div className="space-y-8" variants={textVariants}>
            {/* العنوان الرئيسي */}
            <div className="space-y-4">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The Best Online{" "}
                <motion.span
                  className="text-amber-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Furniture Store
                </motion.span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl text-gray-700 font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore Our Modern Furniture Collection
              </motion.h2>
            </div>

            {/* الوصف */}
            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </motion.p>

            {/* الأزرار */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* الزر الأساسي */}
              <motion.button
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-2 transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#b45309", // 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Shop Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>

              {/* الزر الثانوي */}
              <motion.button
                className="border-2 border-amber-700 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#b45309",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View All Products
              </motion.button>
            </motion.div>
            {/* الإحصائيات */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {/* التقييم */}
              <motion.div
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-amber-700 mb-1">4.9+</div>
                <div className="text-sm text-gray-600">Ratings</div>
                <div className="text-xs text-gray-500 mt-1">
                  Trusted by 50k+ Customers
                </div>
              </motion.div>

              {/* غرفة المعيشة */}
              <motion.div
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  2,500+
                </div>
                <div className="text-sm text-gray-600">Living Room</div>
                <div className="text-xs text-gray-500 mt-1">
                  Items Available
                </div>
              </motion.div>

              {/* غرفة النوم */}
              <motion.div
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  1,500+
                </div>
                <div className="text-sm text-gray-600">Bed Room</div>
                <div className="text-xs text-gray-500 mt-1">
                  Items Available
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* السلايدر على اليمين */}
          <motion.div
            className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl"
            variants={imageVariants}
          >
            {/* السلايدر */}
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full ${
                    index === currentSlide ? "z-10" : "z-0"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {/* استخدام img مع تنسيق صحيح */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* أزرار التحكم */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Next slide"
            >
              →
            </button>

            {/* المؤشرات */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-white"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-0" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroWithSlider;
