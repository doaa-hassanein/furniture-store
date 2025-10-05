"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(0); // الأول مفتوح افتراضياً

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // بيانات الأسئلة مع إجابات كاملة
  const faqItems = [
    {
      question: "What types of furniture do you offer?",
      answer:
        "We offer a wide range of furniture including living room sets, bedroom furniture, dining tables, chairs, office furniture, outdoor furniture, and custom pieces. Our collection features various styles from modern and contemporary to classic and traditional designs.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards (Visa, MasterCard, American Express), debit cards, PayPal, bank transfers, and installment payment plans. All transactions are secure and encrypted for your safety.",
    },
    {
      question: "Can I track my furniture delivery?",
      answer:
        "Yes, once your order is shipped, you'll receive a tracking number via email and SMS. You can monitor your delivery in real-time through our website or the carrier's tracking system. We provide regular updates on the delivery status.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all furniture items. Products must be in original condition with all tags attached. Custom-made items are non-returnable. Return shipping fees may apply depending on the reason for return.",
    },
    {
      question: "What materials are used in your furniture?",
      answer:
        "We use high-quality materials including solid wood (oak, walnut, teak), engineered wood, genuine leather, premium fabrics, tempered glass, and metal alloys. Each product description includes detailed material information for your reference.",
    },
    {
      question: "Are there any discounts or promotions available?",
      answer:
        "Yes, we regularly offer seasonal promotions, first-time buyer discounts, bundle deals, and clearance sales. Subscribe to our newsletter and follow our social media to stay updated on current promotions and exclusive offers.",
    },
  ];

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
    <section className="py-16 px-4" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Question? <span className="text-amber-600">Look here.</span>
          </h1>
        </motion.div>

        {/* Question List */}
        <motion.div
          ref={ref}
          className="space-y-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100"
              variants={itemVariants}
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-amber-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-amber-700 transition-colors">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <motion.svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </motion.svg>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className="border-t border-amber-200 pt-4">
                        <p className="text-gray-600 leading-relaxed text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QA;
