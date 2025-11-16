"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { motion, Variants } from "framer-motion";

// 2. Define animation Variants for the container and its children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the children's animations
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
  visible: {
    opacity: 1,
    y: 0, // Animate to visible and original position
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -20 }, // Start invisible and 20px to the left
  visible: {
    opacity: 1,
    x: 0, // Animate to visible and original position
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function HeroSection({ data }: any) {
  return (
    <div className="">
      {/* 3. Convert the main div to motion.div and apply Variants */}
      <motion.div
        className="relative w-full h-auto bg-[#6E7D66] p-6 lg:p-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8"
        variants={containerVariants} // <-- Corrected
        initial="hidden"
        animate="visible" // Animate to 'visible' state on mount
      >
        {/* 4. Animate the image wrapper */}
        <motion.div className="relative" variants={imageVariants}>
          {" "}
          {/* <-- Corrected */}
          <Image
            src={`${data.image.url}`}
            alt={data?.title || "Hero Image"}
            width={500}
            height={500}
            className="w-full h-auto lg:w-full lg:h-full"
            unoptimized
          />
        </motion.div>

        {/* 5. Animate the text content block */}
        <div className="flex flex-col items-center text-center gap-6 lg:flex lg:flex-col lg:items-start lg:text-left lg:gap-10">
          {/* 6. Animate each text element individually */}
          <motion.h1
            className="text-3xl lg:text-5xl lg:max-w-2xl text-white font-bold lg:leading-16"
            variants={itemVariants} // <-- Corrected
          >
            {data?.title}
          </motion.h1>
          <motion.p
            className="text-[#E2E4D6] text-lg lg:text-2xl"
            variants={itemVariants} // <-- Corrected
          >
            {data?.subtitle}
          </motion.p>
          <motion.p
            className="text-[#E2E4D6] text-base lg:text-xl lg:max-w-xl"
            variants={itemVariants} // <-- Corrected
          >
            {data?.description}
          </motion.p>

          {/* 7. Animate the button group */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-2 lg:flex lg:items-center lg:gap-8"
            variants={itemVariants} // <-- Corrected
          >
            {data?.button?.map((item: any) => (
              <Button
                color={item.color}
                href={`/${item.href || "/"}`}
                key={item.id}
                className="font-semibold"
              >
                {item.text}
              </Button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 8. Bonus: Animate the SVG divider to fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
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
