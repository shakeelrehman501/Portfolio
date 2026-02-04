import React from 'react'

function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-[#0d1117] py-16 lg:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-[48px] font-bold font-['Poppins'] leading-[48px] bg-clip-text"
            style={{ 
              backgroundImage: "linear-gradient(rgb(34, 91, 251) 0%, rgb(228, 0, 123) 100%)", 
              WebkitTextFillColor: "transparent" 
            }}
          >
            Experience
          </h2>
          <p className="text-base font-normal font-['Poppins'] text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my work experience and the roles I have taken in this organization
          </p>
          <div className="mt-6 mx-auto w-24 h-2 rounded-full bg-gradient-to-b from-[#2957f7] to-[#9517fa]" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {/* {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))} */}
        </div>
      </div>
    </section>
  )
}

export default Experience
