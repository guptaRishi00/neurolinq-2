"use client";

import Button from "./Button";
import { motion, Variants } from "framer-motion";

// 1. Container Variant: Adds a subtle scale-up effect ("Pop")
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delayChildren: 0.2, // Wait a moment before showing text
      staggerChildren: 0.1, // Cascade the text elements
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9], // Smooth "out" easing
    },
  },
};

// 2. Item Variant: Spring slide-up
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Cta({ data }: any) {
  return (
    <motion.div
      // 3. Native Viewport detection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible
      variants={containerVariants}
      className="relative z-10 bg-[#D4AF84] w-11/12 lg:w-[85%] rounded-xl mx-auto h-auto p-6 lg:px-10 lg:py-20 translate-y-12 lg:translate-y-16 gap-6 lg:gap-10 flex items-center justify-center flex-col shadow-2xl"
    >
      {/* Title */}
      <motion.p
        variants={itemVariants}
        className="text-white text-2xl lg:text-5xl font-bold text-center"
      >
        {data?.title}
      </motion.p>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-[#E2E4D6] text-base lg:text-2xl max-w-5xl text-center"
      >
        {data?.description}
      </motion.p>

      {/* Buttons Container */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center gap-2 lg:flex lg:items-center lg:gap-2"
      >
        {data?.button?.map((item: any) => (
          // 4. Button Wrapper for Interaction
          // We wrap the custom Button in a motion.div to add hover effects
          // without breaking the original component.
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button color={item.color} href={`/${item.href || "/"}`}>
              {item.text}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
