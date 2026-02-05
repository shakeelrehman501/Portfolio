import React from 'react'

interface Props {
  company: string;
  logo: React.ReactNode;
  position: string;
  type: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
}


function ExperienceCard({
  company,
  logo,
  position,
  type,
  date,
  location,
  description,
  tags,
}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md w-40 h-20 flex items-center justify-center">
            {logo}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-3xl lg:text-4xl font-bold font-['Poppins'] text-gray-900 dark:text-gray-100 mb-2">
            {position}
          </h3>
          <p className="text-xl font-normal font-['Poppins'] text-gray-600 dark:text-gray-400 mb-4">
            {type}
          </p>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span className="font-['Poppins']">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="font-['Poppins']">{location}</span>
            </div>
          </div>

          <p className="text-base font-normal font-['Poppins'] text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gradient-to-b from-[#2957f7] to-[#9517fa] text-white rounded-full text-sm font-medium font-['Poppins']"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
