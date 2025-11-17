"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// 1. Container Variants (Controls the Delay)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // 2. HERE IS THE DELAY:
      // Wait 0.4s after entering view before starting any children animations
      delayChildren: 0.4,
      staggerChildren: 0.2, // Then animate children one by one
    },
  },
};

// 3. Content Slide Up
const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80, // Slightly softer spring for a more relaxed feel
      damping: 15,
    },
  },
};

// 4. Decorative Background Pop-in
const bgScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "backOut", // "Overshoots" slightly for a fun pop effect
    },
  },
};

export default function MeetOurFounder({ data }: any) {
  return (
    <motion.div
      // 5. Native Viewport Detection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
      variants={containerVariants}
      className="w-full p-6 lg:px-10 lg:py-20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0"
    >
      {/* Left Column: Text Content */}
      <motion.div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
        <motion.p
          variants={itemFadeInUp}
          className="text-[#4D5A51] text-3xl lg:text-5xl font-medium"
        >
          {data?.title}
        </motion.p>
        <motion.p
          variants={itemFadeInUp}
          className="text-[#6E7D66] text-xl lg:text-3xl font-medium"
        >
          {data?.subtitle}
        </motion.p>

        <motion.div
          variants={itemFadeInUp}
          className="text-base lg:text-xl text-[#333] leading-relaxed space-y-4 font-medium"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {data?.description}
          </ReactMarkdown>
        </motion.div>
      </motion.div>

      {/* Right Column: Image & Founder Info */}
      <div className="relative w-full lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0">
        {/* Decorative Background SVG */}
        <motion.div
          variants={bgScaleIn}
          className="lg:w-90 lg:h-90 hidden lg:inline-block absolute top-0 left-50 lg:-translate-x-1/2 lg:-translate-y-10 z-0"
        >
          <Image
            src={"/founder.svg"}
            alt={"decorative background"}
            width={500}
            height={500}
            className="w-full h-full"
          />
        </motion.div>

        {/* Profile Image Container */}
        <motion.div
          variants={itemFadeInUp}
          // Add a subtle float animation while hovering
          whileHover={{ y: -10, transition: { duration: 0.4 } }}
          className="relative w-[320px] h-[420px] lg:w-[500px] lg:h-[480px] rounded-lg overflow-hidden shadow-lg z-10"
        >
          <Image
            src={`${data.profile?.image.url}`}
            alt={data?.profile?.name || "founder photo"}
            width={300}
            height={300}
            className="object-cover w-full h-full object-center"
            unoptimized
          />
        </motion.div>

        {/* Founder Name & Designation */}
        <motion.div
          variants={itemFadeInUp}
          className="text-center mt-6 space-y-1 z-10"
        >
          <p className="text-[#4D5A51] font-medium text-xl lg:text-4xl">
            {data?.profile?.name}
          </p>
          <p className="text-[#4D5A51] text-lg lg:text-2xl">
            {data?.profile?.designation}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
