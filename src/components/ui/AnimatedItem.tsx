import { motion } from "framer-motion";
import { animationVariants, AnimationType } from "@/lib/animations";

interface AnimatedItemProps {
  children: React.ReactNode;
  type?: AnimationType;
  className?:string;
}

export const AnimatedItem = ({ children, type = "fade", className }: AnimatedItemProps) => {
  return (
    <motion.div
      variants={animationVariants[type]}
      
      className={className}
    >
      {children}
    </motion.div>
  );
};
