"use client";

import { motion } from "framer-motion";
import { animationVariants, AnimationType } from "@/lib/animations";

interface AnimatedItemProps {
  children: React.ReactNode;
  type?: AnimationType;
  className?: string;
  index?: number; // optional, for one-by-one delay
}

export const AnimatedItem = ({
  children,
  type = "fade",
  className,
  index = 0,
}: AnimatedItemProps) => {
  return (
    <motion.div
      variants={animationVariants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={index} // index used in animationVariants for delay
      className={className}
    >
      {children}
    </motion.div>
  );
};
