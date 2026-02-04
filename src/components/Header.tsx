
"use client"
import React, { useState } from 'react'
import { NavItems } from '@/constants'
import { FiGithub, FiLinkedin  } from "react-icons/fi";
import { ModeToggle } from './ui/ModeToggle';
function Navbar() {

const [active, setActive] = useState('about')
//   const [isScrolled, setIsScrolled] = useState(false);
//  useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  return (
    <nav className='fixed w-full bg-background py-4 border-b border-b-white/10  '>
    <div className='w-full max-w-350 mx-auto px-5 flex justify-between items-center '>
     {/* Logo */}
     <div className='flex items-center gap-2 '>
        <div className='w-10 h-10 rounded-lg text-[20px] font-roboto font-semibold p-5 flex justify-center items-center bg-gradient-to-t from-[#3B82F6] to-[#155DFC] 
        shadow-[0_10px_15px_-3px_rgba(59,130,246,0.4)]
        shadow-[0_4px_6px_-4px_rgba(59,130,246,0.5)]'>
            SR
        </div>
        <div>
            <h1 className='text-[20px] font-bold'>Shakeel<span className='text-[#3B82F6]'>.dev</span> </h1>
        </div>
    </div> 
    
    {/* Nav items */}
    <ul className='flex gap-0.5  bg-gray-400/50 rounded-full px-3 py-2  '>
        {
        NavItems.map((item)=>(
        <li key={item.id}>
            <button
            onClick={()=>setActive(item.id)}
            className={`
                rounded-full px-4 py-2
                ${active === item.id? "bg-red-400" : ""}`}>
                {item.label}
            </button>
        </li>
        ))
    }
    </ul>
    <div className='flex items-center gap-4'>
        <div className='flex gap-3'>
            <FiGithub size={24} className='text-[#94A3B8]' />
            <FiLinkedin size={24} className='text-[#94A3B8]'/>
        </div>
        <div className='w-0.5 h-8 bg-[#1E293B]'/>
        <ModeToggle/>
    </div>
    </div>
    </nav>
  )
}

export default Navbar
