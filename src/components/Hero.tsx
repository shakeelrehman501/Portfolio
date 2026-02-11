"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'
import { easeOut, motion} from "motion/react"
function Hero() {

  const container = {
    hidden:{opacity:0},
    visible:{opacity:1, 
      transition:{staggerChildren:0.15, delayChildren:0.2}
  }}
  const fadeUp = {
    hidden:{opacity:0, y:40},
    visible:{opacity:1, y:0,
      transition:{duration:0.6, ease:easeOut}
  }}
  return (
     <section id='about' className="relative bg-white dark:bg-[#0a0e1a]  overflow-hidden transition-colors">
      {/* Gradient Blobs */}
      <motion.div 
      initial={{opacity:0}} 
      animate={{opacity:1}}
      transition={{duration:1}}
      
      className="absolute bg-[rgba(89,22,139,0.2)] dark:bg-[rgba(168,85,247,0.15)] blur-[120px] left-36 rounded-full w-125 h-125 top-42 transition-all duration-700" />
      <motion.div 
      initial={{opacity:0}} 
      animate={{opacity:1}}
      transition={{duration:1, delay:0.2}}
      className="absolute bg-[rgba(28,57,142,0.2)] dark:bg-[rgba(59,130,246,0.12)] blur-[120px] right-25 lg:left-256 rounded-full w-125 h-125 top-42.5 transition-all duration-700" />

      <div className="relative max-w-350 mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 place-content-center text-center lg:text-left">
          {/* Left Content */}
          <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-6 lg:space-y-12  flex flex-col justify-center">
            <div className='leading-10'>
              <motion.p
              variants={fadeUp}
              className="font-['Poppins'] font-normal text-[46px] lg:text-[46.093px]  text-[#272646] dark:text-gray-100 transition-colors">
              Hi, I am
            </motion.p>
            <motion.h1 
            variants={fadeUp}
              className='font-poppins font-bold text-[56px] lg:text-[68px] leading-normal
               bg-gradient-to-r from-blue-600 to-pink-600
               bg-clip-text text-transparent'
            >
              Shakeel Rehman
            </motion.h1>
            <motion.p 
            variants={fadeUp}
            className="font-['Poppins'] font-bold text-[36px] lg:text-[42.481px]  text-[#272646] dark:text-white transition-colors">
              I am a <span className="text-[#0e82eb] dark:text-[#60a5fa]">front-end developer</span>
            </motion.p>

            </div>

            {/* Description */}
            <div>
              <motion.p 
              variants={fadeUp}
              className="font-['Poppins'] font-normal text-[18px] leading-normal text-[#4a5565] dark:text-gray-300 max-w-[648px] transition-colors">
              I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
            </motion.p>
            </div>

            {/* Download CV Button */}
            <motion.div 
            variants={fadeUp}
            >
              <a 
              href="https://drive.google.com/file/d/1bDHTzhDLJOayRDzP_ZEuLuPRau-8qM1O/view?usp=drive_open"
                target="_blank"
                rel="noopener noreferer"
              >
              <motion.button
              whileHover={{scale:1.05}} 
              whileTap={{scale:0.95}}
              transition={{type:"spring", stiffness:400, damping:15}}
                className="bg-gradient-to-r 
                from-blue-600 to-violet-700 shadow-2xl text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                DOWNLOAD CV
              </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular border frame */}
             
              <div className="relative w-100 h-138 lg:w-113 lg:h-160">
                {/* Glow effect behind image in dark mode */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 dark:opacity-100 transition-opacity duration-700" />
                
                {/* Blue border circle */}
                <motion.div 
                initial={{opacity:0, scale:0.7, x:40}}
                animate={{opacity:1, scale:1, x:0}}
                transition={{duration:0.3, delay:0.2}}
                className="absolute inset-0 border-[3px] border-[#0e82eb] dark:border-[#60a5fa] rounded-full transition-colors shadow-lg dark:shadow-blue-500/20" />
                
                {/* Profile Image */}
                <motion.div 
                initial={{opacity:0, scale:0.85}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.8, delay:0.5}}
                className="absolute inset-0 overflow-hidden rounded-full">
              <Tilt>
                  <Image src={'/Image.png'} alt='' width={600} height={300}
                  />
              </Tilt>
                </motion.div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
