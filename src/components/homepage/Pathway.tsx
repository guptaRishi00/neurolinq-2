"use client"; // <-- 1. Mark as Client Component

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // <-- 2. Import motion and Variants
import { useInView } from "react-intersection-observer"; // <-- 3. Import useInView

// 4. Define animation variants
// Variant for the main container (fades in)
const mainFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Variant for staggering children (title/desc, and cards)
const staggerContainer: Variants = {
  hidden: {}, // No initial state needed for the container itself
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger children by 0.1s
    },
  },
};

// Variant for individual items (slide up and fade in)
const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Pathway({ data }: any) {
  // 5. Setup useInView hook to trigger animation
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.1, // Trigger when 10% is visible
  });

  return (
    // 6. Attach ref to the main wrapper
    <motion.div ref={ref} className="p-6 lg:py-16 lg:px-20 lg:mt-20">
      {/* 7. Animate the main content box with a simple fade-in */}
      <motion.div
        variants={mainFadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-[#E2E4D6] h-auto rounded-[25px] p-6 lg:p-16 flex flex-col items-center justify-center gap-6 lg:gap-10"
      >
        {/* 8. Create a stagger container for the title and description */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center justify-center gap-6 lg:gap-10"
        >
          <motion.p
            variants={itemFadeInUp}
            className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]"
          >
            {data?.title}
          </motion.p>
          <motion.p
            variants={itemFadeInUp}
            className="text-center text-lg lg:text-2xl text-[#4D5A51] font-medium"
          >
            {data?.description}
          </motion.p>
        </motion.div>

        {/* 9. Create a separate stagger container for the cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delayChildren: 0.2 }} // Delay card animation slightly
          className="w-full mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-start lg:justify-around gap-6 lg:gap-20 lg:px-10"
        >
          {data.cards &&
            data.cards?.map((card: any) => (
              // 10. Animate each card
              <motion.div
                key={card.id}
                variants={itemFadeInUp}
                className="border border-[#4D5A51] h-auto lg:h-[370px] rounded-xl bg-white px-6 py-5 flex flex-col items-center gap-4 lg:gap-3 lg:justify-around w-full"
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

                <p className="text-[#4D5A51] text-2xl lg:text-2xl text-center lg:text-center font-medium lg:font-medium">
                  {card?.title}
                </p>

                <p className="text-[#4D5A51] text-lg lg:text-md text-center lg:text-center">
                  {card?.description}
                </p>

                <Link
                  href={`/${card.button.href}`}
                  className="w-full lg:w-50 text-center text-lg text-[#4D5A51] bg-[#E2E4D6] border border-[#4D5A51] rounded-xl px-6 py-3 lg:px-0 lg:py-3"
                >
                  {card.button.text}
                </Link>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
