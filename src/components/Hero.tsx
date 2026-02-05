import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
     <section className="relative bg-white dark:bg-[#0a0e1a] min-h-[calc(100vh-64px)] overflow-hidden transition-colors">
      {/* Gradient Blobs */}
      <div className="absolute bg-[rgba(89,22,139,0.2)] dark:bg-[rgba(168,85,247,0.15)] blur-[120px] left-[-145px] rounded-full w-[500px] h-[500px] top-[-170px] transition-all duration-700" />
      <div className="absolute bg-[rgba(28,57,142,0.2)] dark:bg-[rgba(59,130,246,0.12)] blur-[120px] right-[-100px] lg:left-[1024px] rounded-full w-[500px] h-[500px] top-[170px] transition-all duration-700" />

      <div className="relative max-w-350 mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 place-content-center text-center lg:text-left">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-12  flex flex-col justify-center">
            <div className='leading-10'>
              <p className="font-['Poppins'] font-normal text-[46px] lg:text-[46.093px]  text-[#272646] dark:text-gray-100 transition-colors">
              Hi, I am
            </p>
            <h1 
              className='font-poppins font-bold text-[56px] lg:text-[68px] leading-normal
               bg-gradient-to-r from-blue-600 to-pink-600
               bg-clip-text text-transparent'
            >
              Shakeel Rehman
            </h1>
            <p className="font-['Poppins'] font-bold text-[36px] lg:text-[42.481px]  text-[#272646] dark:text-white transition-colors">
              I am a <span className="text-[#0e82eb] dark:text-[#60a5fa]">front-end developer</span>
            </p>
            </div>

            {/* Description */}
            <div>
              <p className="font-['Poppins'] font-normal text-[18px] leading-normal text-[#4a5565] dark:text-gray-300 max-w-[648px] transition-colors">
              I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
            </p>
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <button 
                className="bg-gradient-to-r 
                from-blue-600 to-violet-700
                
                shadow-2xl


                text-white font-['Poppins'] font-bold text-[18px] px-[25px] py-[10px] h-[69px] w-[214px] rounded-full hover:shadow-xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                DOWNLOAD CV
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular border frame */}
              <div className="relative w-[400px] h-[550px] lg:w-[451px] lg:h-[640px]">
                {/* Glow effect behind image in dark mode */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[714px] blur-2xl opacity-0 dark:opacity-100 transition-opacity duration-700" />
                
                {/* Blue border circle */}
                <div className="absolute inset-0 border-[3px] border-[#0e82eb] dark:border-[#60a5fa] rounded-[714px] transition-colors shadow-lg dark:shadow-blue-500/20" />
                
                {/* Profile Image */}
                <div className="absolute inset-0 overflow-hidden rounded-[714px]">
                  <Image src={'/Image.png'} alt='' width={600} height={300}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
