"use client"; // <-- 1. Mark as Client Component

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- 2. Import motion and Variants
// Removed useScroll and useTransform as they were only used for the image parallax

// 4. Define animation variants
const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren", // Animate parent first, then children
    },
  },
};

const textStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Stagger children for text
      delayChildren: 0.3, // Delay text animation slightly after section reveal
    },
  },
};

const textItemSlideIn: Variants = {
  hidden: { opacity: 0, x: -50 }, // Start off-screen left
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

// Removed imageSlideIn variant

export default function HeroSection({ data }: any) {
  // Removed scroll hooks setup

  return (
    // 6. Apply variants to the main section div
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      animate="visible" // Animate on mount
      className="bg-[#6E7D66] w-full h-auto lg:h-[500px] p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between relative gap-8 lg:gap-0"
    >
      {/* 7. Animate the text content column */}
      <motion.div
        variants={textStaggerContainer}
        className="flex flex-col items-start gap-6 lg:gap-8 relative"
      >
        <motion.p
          variants={textItemSlideIn}
          className="text-white text-lg lg:text-2xl lg:tracking-[10px] w-full font-medium"
        >
          {data?.tag}
        </motion.p>
        <motion.h1
          variants={textItemSlideIn}
          className="text-white text-4xl lg:text-6xl font-bold"
        >
          {data?.title}
        </motion.h1>
        <motion.p
          variants={textItemSlideIn}
          className="text-white text-lg lg:text-2xl lg:max-w-2xl"
        >
          {data?.description}
        </motion.p>
      </motion.div>

      {/* 8. Image Container - Animation Removed (Converted to standard div) */}
      <div
        // Removed variants={imageSlideIn} and style={{ y }}
        className="w-full h-auto max-w-sm lg:max-w-none relative z-10 translate-y-8 lg:w-150 lg:h-150 lg:translate-y-32"
      >
        <Image
          src={`${data.image.url}`}
          alt={data?.title || "Hero Image"}
          width={100}
          height={100}
          className="w-full h-auto object-cover" // Ensure image fills its container
          unoptimized
        />
      </div>
    </motion.div>
  );
}
