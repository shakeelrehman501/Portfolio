'use client';
import {easeInOut, easeOut, motion} from "framer-motion"
type Props = {
  heading?: string;
  gradientHeading?: string;
  paragraph?: string;
  className?: string;
  animateOnLoad?:boolean;
};

const container = {
  hidden:{},
  visible:{transition:{staggerChildren:0.15, delayChildren:0.2}}
}
const fadeUp = {
  hidden:{opacity:0, y:40},
  visible:{opacity:1, y:0,
    transition:{duration:0.5, ease:easeOut}
  }
}
const underline = {
  hidden:{opacity:0, scaleX:0},
  visible:{opacity:1, scaleX:1,
    transition:{duration:0.6, ease:easeOut}
  }
}

function Heading({ heading, gradientHeading, paragraph, className, animateOnLoad=false }: Props) {

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible" 
      className="text-center mb-16">
      <motion.div
      variants={fadeUp}
      className="flex w-fit mx-auto gap-2.5 font-bold">
        <h1 
        className="text-4xl  leading-12 lg:text-[48px] text-foreground dark:text-gray-100 ">
          {heading}
        </h1>
        <h1
          className={`text-4xl lg:text-[48px] leading-12 
            bg-gradient-to-r from-blue-600 to-pink-600
            bg-clip-text text-transparent ${className}`}
        >
          {gradientHeading}
        </h1>
      </motion.div>
      <motion.p 
      variants={fadeUp}
      className="text-base font-normal font-['Poppins'] text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        {paragraph}
      </motion.p>
      <motion.div
      variants={underline}
      className="mt-6 mx-auto w-24 h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-500" />
    </motion.div>
  );
}

export default Heading;
