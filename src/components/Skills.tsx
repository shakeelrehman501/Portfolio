import React from 'react'
import { skills } from '@/constants'
import SkillsCard from './SkillsCard'
function Skills() {
  return (
     <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-[48px] font-bold font-['Poppins'] leading-[48px] text-gray-900 dark:text-gray-100">
            Skills & <span 
              className="bg-clip-text"
              style={{ 
                backgroundImage: "linear-gradient(rgb(34, 91, 251) 0%, rgb(228, 0, 123) 100%)", 
                WebkitTextFillColor: "transparent" 
              }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-base font-normal font-['Poppins'] text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
          <div className="mt-6 mx-auto w-24 h-2 rounded-full bg-gradient-to-b from-[#2957f7] to-[#9517fa]" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillsCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
