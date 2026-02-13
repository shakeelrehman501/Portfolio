"use client";

import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

function Hero() {
  return (
    <AnimatedSection
      id="about"
      className="relative bg-white dark:bg-[#0a0e1a]  overflow-hidden transition-colors"
    >
      {/* Gradient Blobs */}
      <AnimatedItem type="fade" index={0}>
        <div className="absolute bg-[rgba(89,22,139,0.2)] dark:bg-[rgba(168,85,247,0.15)] blur-[120px] -left-36 rounded-full w-125 h-125 -top-40 transition-all duration-700" />
        <div className="absolute  bg-[rgba(28,57,142,0.2)] dark:bg-[rgba(59,130,246,0.12)] blur-[120px] right-25 lg:left-380 rounded-full w-125 h-125 top-80 transition-all duration-700" />
      </AnimatedItem>
      <div className="relative max-w-350 mx-auto px-6 lg:px-8 py-12 lg:py-20 2xl:pb-70">
        <div className="grid lg:grid-cols-2 gap-12 place-content-center text-center lg:text-left">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-12  flex flex-col justify-center">
            <div className="leading-20">
              <AnimatedItem type="slideLeft" index={1}>
                <p className="font-normal text-[46px] lg:text-[46.093px]  text-[#272646] dark:text-gray-100 transition-colors">
                  Hi, I am
                </p>
              </AnimatedItem>
              <AnimatedItem type="slideUp" index={2} >
                <h1
                  className=" font-bold text-[56px] lg:text-[68px] leading-[55px] sm:leading-normal
               bg-gradient-to-r from-blue-600 to-pink-600
               bg-clip-text text-transparent"
                >
                  Shakeel Rehman
                </h1>
                <p className="leading-tight sm:leading-normal font-bold text-[36px] lg:text-[42.481px]  text-[#272646] dark:text-white transition-colors pt-4 sm:pt-0">
                  I am a{" "}
                  <span className="text-[#0e82eb] dark:text-[#60a5fa]">
                    front-end developer
                  </span>
                </p>
              </AnimatedItem>
            </div>

            {/* Description */}
            <AnimatedItem type="slideLeft" index={3}>
              <p className="px-10 sm:px-0 text-[16px] sm:font-normal sm:text-[18px] leading-normal text-[#4a5565] dark:text-gray-300 max-w-[648px] transition-colors">
                I am a Front-End Developer with 6 months of professional
                experience at Boxel Technology. I specialize in building
                responsive and user-friendly web applications using modern
                front-end technologies. I focus on creating clean UI designs,
                smooth user experiences, and optimized performance OK.
              </p>
            </AnimatedItem>
            {/* Download CV Button */}
            <AnimatedItem type="slideUp" index={4}>
              <div>
                <a
                  href="https://drive.google.com/file/d/1bDHTzhDLJOayRDzP_ZEuLuPRau-8qM1O/view?usp=drive_open"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <button
                    className="bg-gradient-to-r 
                from-blue-600 to-violet-700 shadow-2xl text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:brightness-110"
                  >
                    DOWNLOAD CV
                  </button>
                </a>
              </div>
            </AnimatedItem>
          </div>

          {/* Right Content - Profile Image */}
          <AnimatedSection className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular border frame */}
              <div className="relative w-100 h-138 lg:w-113 lg:h-160">
                {/* Glow effect behind image in dark mode */}
                <AnimatedItem type="fade" index={0}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 dark:opacity-95 transition-opacity duration-700" />
                  {/* Blue border circle */}
                  <div className=" absolute mx-10 sm:mx-0 mb-24 sm:mb-0 inset-0 border-[3px] border-[#0e82eb] dark:border-[#60a5fa] rounded-full transition-colors shadow-lg dark:shadow-blue-500/20" />
                </AnimatedItem>
                {/* Profile Image */}
                <div className="px-10 sm:px-0 absolute inset-0 overflow-hidden rounded-full">
                  <AnimatedItem type="slideRight" index={1}>
                    <Tilt>
                      <Image
                        src={"/myImage.png"}
                        alt=""
                        width={600}
                        height={300}
                      />
                    </Tilt>
                  </AnimatedItem>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Hero;
