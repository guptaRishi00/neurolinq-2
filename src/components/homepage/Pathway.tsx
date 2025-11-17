"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
// 1. Removed "react-intersection-observer" (Framer Motion handles this natively now)

const MotionLink = motion(Link);

// 2. Stagger Container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Staggers the text and the card container
    },
  },
};

// 3. Text Animation
const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

// 4. Card Animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 }, // Increased y for more dramatic entry
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Pathway({ data }: any) {
  return (
    <div className="p-6 lg:py-16 lg:px-20 lg:mt-20">
      <motion.div
        // 5. Native In-View Handling
        initial="hidden"
        whileInView="visible" // Triggers the "visible" variant when in view
        viewport={{
          once: true, // true = animate once; false = replay every time it enters
          amount: 0.3, // 0.3 = Wait until 30% of the element is visible before triggering
        }}
        variants={containerVariants}
        className="bg-[#E2E4D6] h-auto rounded-[25px] p-6 lg:p-16 flex flex-col items-center justify-center gap-6 lg:gap-10"
      >
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10">
          <motion.p
            variants={textVariants}
            className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]"
          >
            {data?.title}
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-center text-lg lg:text-2xl text-[#4D5A51] font-medium"
          >
            {data?.description}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="w-full mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-start lg:justify-around gap-6 lg:gap-20 lg:px-10">
          {data.cards &&
            data.cards?.map((card: any) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="border border-[#4D5A51] h-auto lg:h-[370px] rounded-xl bg-white px-6 py-5 flex flex-col items-center gap-4 lg:gap-3 lg:justify-around w-full shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {card?.icon && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }} // Ensure icon pops even if parent animated earlier
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Image
                      src={`${card.icon.url}`}
                      alt={card.title || "Icon"}
                      width={500}
                      height={500}
                      className="w-8 h-8"
                      unoptimized
                    />
                  </motion.div>
                )}

                <p className="text-[#4D5A51] text-2xl lg:text-2xl text-center lg:text-center font-medium lg:font-medium">
                  {card?.title}
                </p>

                <p className="text-[#4D5A51] text-lg lg:text-md text-center lg:text-center">
                  {card?.description}
                </p>

                <MotionLink
                  href={`/${card.button.href}`}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#4D5A51",
                    color: "#FFFFFF",
                    borderColor: "#4D5A51",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full lg:w-50 text-center text-lg text-[#4D5A51] bg-[#E2E4D6] border border-[#4D5A51] rounded-xl px-6 py-3 lg:px-0 lg:py-3 block"
                >
                  {card.button.text}
                </MotionLink>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
