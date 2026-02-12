"use client";
import { motion } from "framer-motion";
import { containerVariants} from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?:string
}

export const AnimatedSection = ({ children, className, id }: AnimatedSectionProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      id={id}
      className={className}
    >
      {children}
    </motion.section>
  );
};
