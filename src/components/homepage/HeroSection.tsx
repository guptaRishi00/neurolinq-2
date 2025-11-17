"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { motion, Variants } from "framer-motion";

// Container animation with smoother timing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Refined item animations with softer spring
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// Image with scale and slide effect
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.8,
    },
  },
};

// Hover effect for buttons
const buttonContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function HeroSection({ data }: any) {
  return (
    <div className="">
      <motion.div
        className="relative w-full h-auto bg-[#6E7D66] p-6 lg:p-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image with hover effect */}
        <motion.div
          className="relative"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={`${data.image.url}`}
            alt={data?.title || "Hero Image"}
            width={500}
            height={500}
            className="w-full h-auto lg:w-full lg:h-full"
            unoptimized
          />
        </motion.div>

        {/* Text content block */}
        <div className="flex flex-col items-center text-center gap-6 lg:flex lg:flex-col lg:items-start lg:text-left lg:gap-10">
          {/* Title with gentle float effect */}
          <motion.h1
            className="text-3xl lg:text-5xl lg:max-w-2xl text-white font-bold lg:leading-16"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {data?.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[#E2E4D6] text-lg lg:text-2xl"
            variants={itemVariants}
          >
            {data?.subtitle}
          </motion.p>

          {/* Description with slight delay */}
          <motion.p
            className="text-[#E2E4D6] text-base lg:text-xl lg:max-w-xl"
            variants={itemVariants}
          >
            {data?.description}
          </motion.p>

          {/* Button group with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-2 lg:flex lg:items-center lg:gap-8"
            variants={buttonContainerVariants}
          >
            {data?.button?.map((item: any, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  color={item.color}
                  href={`/${item.href || "/"}`}
                  className="font-semibold"
                >
                  {item.text}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* SVG divider with smooth fade and slide up */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1], // Custom easing for smoothness
        }}
      >
        <Image
          src={"/herosection.svg"}
          alt={"Section divider"}
          width={500}
          height={500}
          className="w-full h-auto -mt-1 lg:w-full lg:h-full lg:-mt-1"
          unoptimized
        />
      </motion.div>
    </div>
  );
}
