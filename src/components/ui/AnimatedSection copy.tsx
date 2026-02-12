"use client"

import { motion } from "framer-motion"
import {
  containerVariants,
  animationVariants,
  AnimationType,
} from "@/lib/animations"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
}

export default function AnimatedSection({
  children,
  className,
  animation = "slideUp",
}: AnimatedSectionProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={animationVariants[animation]}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div variants={animationVariants[animation]}>
            {children}
          </motion.div>
        )}
    </motion.section>
  )
}
