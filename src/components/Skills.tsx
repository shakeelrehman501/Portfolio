import React from 'react'
import { skills } from '@/constants'
import SkillsCard from './SkillsCard'
import Heading from './ui/Heading'
function Skills() {
  return (
     <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Heading heading='Skills &' gradientHeading='Expertise' paragraph='A collection of my technical skills and expertise honed through various projects and experiences'/>

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
