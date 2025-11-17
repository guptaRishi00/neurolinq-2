"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 1. Container for the whole section (Controls the text entry)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between title, desc, and grid
      delayChildren: 0.1,
    },
  },
};

// 2. Text Animation (Fade up with a slight slide)
const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0], // Cubic-bezier for smooth motion
    },
  },
};

// 3. Grid Container (Specifically controls the staggering of cards)
const gridVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cards appear one after another quickly
    },
  },
};

// 4. Card Animation (Spring pop-up effect)
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9, // Start slightly smaller for a "pop" effect
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

export default function CareStandard({ data }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lowered slightly so it triggers sooner on mobile
    rootMargin: "-50px", // Triggers when element is slightly inside the viewport
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full p-6 flex flex-col items-center justify-center gap-6 lg:gap-10"
    >
      {/* Animate Title */}
      <motion.h2
        variants={textVariants}
        className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]"
      >
        {data?.title}
      </motion.h2>

      {/* Animate Description */}
      <motion.p
        variants={textVariants}
        className="text-center text-lg lg:text-2xl lg:max-w-xl text-[#4D5A51] lg:font-medium"
      >
        {data?.description}
      </motion.p>

      {/* Grid Container - Passes the stagger to children */}
      <motion.div
        variants={gridVariants} // Important: Apply grid-specific variants here
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-x-25 lg:gap-y-14 lg:w-full lg:px-20 mt-8"
      >
        {data?.cards.map((card: any, index: number) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            // 5. Add Hover Interaction
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
            // Add Tap interaction for mobile feel
            whileTap={{ scale: 0.98 }}
            className={`w-full h-[250px] bg-[#6E7D66] flex items-start flex-col gap-4 px-5 py-6 rounded-xl lg:gap-5 lg:col-span-2 cursor-pointer ${
              index === 3 ? "lg:col-start-2" : ""
            }`}
          >
            {card?.icon && (
              <Image
                src={`${card.icon.url}`}
                alt={card.title || "Icon"}
                width={500}
                height={500}
                className="w-8 h-8"
                unoptimized
              />
            )}

            <p className="text-xl lg:text-2xl text-white font-medium">
              {card.title}
            </p>
            <p className="text-base lg:text-xl text-white lg:max-w-md font-medium">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
