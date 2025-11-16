"use client"; // <-- 1. Mark as Client Component

import Button from "./Button";
import { motion, Variants } from "framer-motion"; // <-- 2. Import motion and Variants
import { useInView } from "react-intersection-observer"; // <-- 3. Import useInView

// 4. Define animation variants
// This container will fade in and stagger its children
const staggerContainer: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      staggerChildren: 0.1, // Stagger children's animation
    },
  },
};

// A simple slide-up and fade-in for child items
const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Cta({ data }: any) {
  // 5. Setup useInView hook
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    // 6. Apply ref and variants to the main component div
    <motion.div
      ref={ref} // Attach ref here
      variants={staggerContainer} // Use the container variant
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when in view
      className="relative z-10 bg-[#D4AF84] w-11/12 lg:w-[85%] rounded-xl mx-auto h-auto p-6 lg:px-10 lg:py-20 translate-y-12 lg:translate-y-16 gap-6 lg:gap-10 flex items-center justify-center flex-col"
    >
      {/* 7. Animate each child element */}
      <motion.p
        variants={itemFadeInUp}
        className="text-white text-2xl lg:text-5xl font-bold text-center"
      >
        {data?.title}
      </motion.p>
      <motion.p
        variants={itemFadeInUp}
        className="text-[#E2E4D6] text-base lg:text-2xl max-w-5xl text-center"
      >
        {data?.description}
      </motion.p>

      <motion.div
        variants={itemFadeInUp}
        className="flex flex-col sm:flex-row items-center gap-2 lg:flex lg:items-center lg:gap-2"
      >
        {data?.button?.map((item: any) => (
          <Button
            color={item.color}
            href={`/${item.href || "/"}`}
            key={item.id}
          >
            {item.text}
          </Button>
        ))}
      </motion.div>
    </motion.div>
  );
}
