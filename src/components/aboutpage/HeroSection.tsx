"use client"; // <-- 1. Mark as Client Component

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- 2. Import motion and Variants
import { useScroll, useTransform } from "framer-motion"; // <-- 3. Import scroll hooks

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

const imageSlideIn: Variants = {
  hidden: { opacity: 0, x: 100, scale: 1.1 }, // Start off-screen right, slightly larger
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.5, // Delay image animation for impact
    },
  },
};

export default function HeroSection({ data }: any) {
  // 5. Setup useScroll for parallax effect on the image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Image moves 20% down as user scrolls

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

      {/* 8. Animate the image with slide-in and parallax */}
      <motion.div
        variants={imageSlideIn}
        style={{ y }} // Apply the parallax 'y' transform
        className="w-full h-auto max-w-sm lg:max-w-none relative z-10 translate-y-8 lg:w-150 lg:h-150 lg:translate-y-32"
      >
        <Image
          src={`${data.image.url}`}
          alt={data?.title || "Hero Image"}
          width={100}
          height={100}
          className="w-full h-auto object-cover" // Ensure image fills its motion.div
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
}
