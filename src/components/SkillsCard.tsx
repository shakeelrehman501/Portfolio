import React from 'react'
import { IconType } from 'react-icons';

interface SkillCardProps {
  icon: IconType;
  name: string;
  color?:string;
  proficiency: number;
}

function SkillsCard({ icon:Icon, color, name, proficiency }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <Icon style={{color}} size={40} className='text-[#E44F26]'/>
        </div>
        <h3 className="text-xl font-bold  text-gray-900 dark:text-gray-100">{name}</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold  text-gray-600 dark:text-gray-400">Proficiency</p>
          <p 
            className="text-sm font-semibold  bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 text-transparent"
            
          >
            {proficiency}%
          </p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${proficiency}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default SkillsCard
