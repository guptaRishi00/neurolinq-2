"use client"; // <-- 1. Mark as Client Component

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- 2. Import motion and Variants
import { useInView } from "react-intersection-observer"; // <-- 3. Import useInView

// 4. Define animation variants
// A container that staggers its children
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger children's animation
    },
  },
};

// A simple slide-up and fade-in for items
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

// A scale-in for the decorative SVG
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function MeetOurFounder({ data }: any) {
  // 5. Setup useInView hook
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    // 6. Attach ref to the main component div
    <div
      ref={ref} // Attach ref here
      className="w-full p-6 lg:px-10 lg:py-20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0"
    >
      {/* 7. Animate the left column (text content) */}
      <motion.div
        variants={staggerContainer} // This will stagger its children
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate when in view
        className="w-full lg:w-1/2 flex flex-col items-start gap-8"
      >
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

      {/* 8. Animate the right column (image and profile) */}
      <motion.div
        variants={staggerContainer} // This will stagger its children
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delayChildren: 0.2 }} // Delay this column slightly
        className="relative w-full lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0"
      >
        {/* 9. Animate the decorative SVG */}
        <motion.div
          variants={scaleIn} // Use the scale-in variant
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

        {/* 10. Animate the profile image */}
        <motion.div
          variants={itemFadeInUp}
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

        {/* 11. Animate the profile name/designation */}
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
      </motion.div>
    </div>
  );
}
