"use client"; // <-- 1. Mark as Client Component for Framer Motion

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- 2. Import motion and Variants
import { useInView } from "react-intersection-observer"; // <-- 3. Import useInView hook

// 4. Define animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1, // Stagger children for a nice sequence
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function CareStrandard({ data }: any) {
  // 5. Use useInView hook to detect when the section enters the viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will only play once when it enters view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    // 6. Attach the ref to the main div and use motion.div
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate only when in view
      variants={sectionVariants} // Apply the main section variants
      className="w-full p-6 flex flex-col items-center justify-center gap-6 lg:gap-10"
    >
      {/* 7. Animate title and description using textItemVariants */}
      <motion.h2
        variants={textItemVariants}
        className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]"
      >
        {data?.title}
      </motion.h2>
      <motion.p
        variants={textItemVariants}
        className="text-center text-lg lg:text-2xl lg:max-w-xl text-[#4D5A51] lg:font-medium"
      >
        {data?.description}
      </motion.p>

      {/* 8. Animate the grid container, which will stagger its children */}
      <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-x-25 lg:gap-y-14 lg:w-full lg:px-20 mt-8">
        {data?.cards.map((card: any, index: number) => (
          // 9. Animate each card with cardItemVariants
          <motion.div
            variants={cardItemVariants} // Apply variants for individual cards
            className={`w-full h-[250px] bg-[#6E7D66] flex items-start flex-col gap-4 px-5 py-6 rounded-xl lg:gap-5 lg:col-span-2 ${
              index === 3 ? "lg:col-start-2" : ""
            }`}
            key={card.id}
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
