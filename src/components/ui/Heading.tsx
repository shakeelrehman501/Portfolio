"use client";

import {AnimatedSection} from "@/components/ui/AnimatedSection"
import {AnimatedItem} from "@/components/ui/AnimatedItem"

type Props = {
  heading?: string;
  gradientHeading?: string;
  paragraph?: string;
  className?: string;
};

function Heading({ heading, gradientHeading, paragraph, className }: Props) {
  return (
    <AnimatedSection className="text-center mb-16">
      <AnimatedItem type="slideLeft">
      <div className="flex w-fit mx-auto gap-2.5 font-bold">
        <h1 className="text-4xl  leading-12 lg:text-[48px] text-foreground dark:text-gray-100 ">
          {heading}
        </h1>
              
        <h1
          className={`text-4xl lg:text-[48px] leading-12 
            bg-gradient-to-r from-blue-600 to-pink-600
            bg-clip-text text-transparent ${className}`}
        >
          {gradientHeading}
        </h1>
      </div>
        </AnimatedItem>
      <AnimatedItem type="slideUp">
      <p className="text-base font-normal font-['Poppins'] text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        {paragraph}
      </p>
      </AnimatedItem>

      <AnimatedItem type="scale">
      <div className="mt-6 mx-auto w-24 h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-500" />
      </AnimatedItem>

    </AnimatedSection>
  );
}

export default Heading;
