"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const AnimatedSection = ({ children, className, id }: AnimatedSectionProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};
