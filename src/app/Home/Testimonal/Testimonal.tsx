"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  // بيانات العملاء مع صور حقيقية
  const testimonials = [
    {
      id: 1,
      name: "Leslie Alexander",
      profession: "Architect",
      rating: 5.0,
      avatar: "LA",
      image: "/images/t1.jpg",
      testimonial: "The service exceeded my expectations! Professional team with outstanding results.",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 2,
      name: "Jenny Wilson",
      profession: "Interior Designer",
      rating: 5.0,
      avatar: "JW", 
      image: "/images/t2.jpg",
      testimonial: "A game-changer for our projects. Their attention to detail is remarkable.",
      color: "from-amber-600 to-amber-800"
    },
    {
      id: 3,
      name: "Robert Fox",
      profession: "Home Owner",
      rating: 4.8,
      avatar: "RF",
      image: "/images/t5.jpg",
      testimonial: "Thrilled with the results! They understood my vision perfectly.",
      color: "from-amber-400 to-amber-600"
    },
    {
      id: 4,
      name: "Emily Davis",
      profession: "Business Owner",
      rating: 5.0,
      avatar: "ED",
      image: "/images/t6.jpg",
      testimonial: "Professional, punctual, and perfectionists! Highly recommended!",
      color: "from-orange-500 to-amber-600"
    }
  ];

  // التلقائي للسلايدر
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-amber-50/50 to-white" id="testimonials">
      <div className="max-w-4xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            💬 Client <span className="text-amber-600">Testimonials</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Discover why our clients love working with us
          </p>
        </motion.div>

        {/* السلايدر الرئيسي */}
        <motion.div
          ref={ref}
          className="relative mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* السلايدر */}
          <div className="relative h-[280px] md:h-[240px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-lg h-full flex flex-col md:flex-row overflow-hidden border border-amber-100">
                  {/* الجانب الأيسر - المعلومات */}
                  <div className={`md:w-2/5 bg-gradient-to-br ${testimonials[currentSlide].color} p-6 flex flex-col justify-center items-center text-white relative`}>
                    
                    {/* الصورة الرمزية - مع دعم الصور الحقيقية */}
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto border-2 border-white/30 overflow-hidden">
                      {testimonials[currentSlide].image ? (
                        <Image
                          src={testimonials[currentSlide].image}
                          alt={testimonials[currentSlide].name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xl font-bold text-white">
                          {testimonials[currentSlide].avatar}
                        </span>
                      )}
                    </div>
                    
                    {/* الاسم والمهنة */}
                    <h3 className="text-lg font-bold mb-1 text-center">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-amber-100 text-sm mb-3">
                      {testimonials[currentSlide].profession}
                    </p>

                    {/* التقييم */}
                    <div className="flex items-center gap-1 text-sm">
                      <div className="flex text-amber-200">
                        {"⭐".repeat(5)}
                      </div>
                      <span className="text-amber-50 font-semibold ml-1">
                        {testimonials[currentSlide].rating}
                      </span>
                    </div>
                  </div>

                  {/* الجانب الأيمن - نص التوصية */}
                  <div className="md:w-3/5 p-6 flex flex-col justify-center">
                    <div className="relative">
                      <div className="text-amber-400 text-4xl absolute -top-2 -left-2">&quot;</div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-4">
                        {testimonials[currentSlide].testimonial}
                      </p>
                      <div className="text-amber-400 text-4xl absolute -bottom-4 -right-2">&quot;</div>
                    </div>

                    {/* علامات التوثيق */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-6">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Verified Client
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* أزرار التنقل */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-amber-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-amber-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* النقاط الإرشادية */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-amber-600 w-6' 
                    : 'bg-amber-200 hover:bg-amber-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* إحصائيات مضغوطة */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-amber-100">
            <div className="text-lg font-bold text-amber-600 mb-1">500+</div>
            <div className="text-xs text-gray-600">Clients</div>
          </div>
          <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-amber-100">
            <div className="text-lg font-bold text-amber-600 mb-1">4.9</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
          <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-amber-100">
            <div className="text-lg font-bold text-amber-600 mb-1">98%</div>
            <div className="text-xs text-gray-600">Recommend</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;