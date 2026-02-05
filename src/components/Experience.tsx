import React from 'react'
import Heading from './ui/Heading'
import ExperienceCard from './ExperienceCard'
import { experienceData } from '@/constants'



function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-[#0d1117] py-16 lg:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Heading gradientHeading='Experience' paragraph='A collection of my work experience and the roles I have taken in this organization'/>
        

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Experience
