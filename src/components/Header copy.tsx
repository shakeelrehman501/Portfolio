
"use client"
import React, { useState, useEffect } from 'react'
import { NavItems } from '@/constants'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { ModeToggle } from './ui/ModeToggle';
function Navbar() {

const [active, setActive] = useState('about')
const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
 useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full bg-background py-4 border-b border-b-[#E5E7EB] dark:border-b-white/10 ${isScrolled && ("shadow-lg backdrop-blur-lg bg-background/50") }`}>
    <div className='w-full max-w-350 mx-auto px-5 flex justify-between items-center '>
     {/* Logo */}
    <div className='flex items-center gap-2 '>
        <div className='w-10 h-10 rounded-lg text-[20px] text-white font-roboto font-semibold p-5 flex justify-center items-center bg-gradient-to-t from-[#3B82F6] to-[#155DFC] 
        shadow-[0_10px_15px_-3px_rgba(59,130,246,0.2)]
        shadow-[0_4px_6px_-4px_rgba(59,130,246,0.2)]'>
            SR
        </div>
        <div>
            <h1 className='text-[20px] font-bold'>Shakeel<span className='text-[#3B82F6]'>.dev</span> </h1>
        </div>
    </div> 
    
    {/* Nav items */}
        <ul className='hidden md:flex gap-0.5  bg-[#F1F5F9]/50 border border-[#E2E8F0]/50 dark:bg-[#1E293B]/50 dark:border-[#1E293B]/50 text-primary-foreground  rounded-full px-3 py-2  '>
        {
        NavItems.map((item)=>(
        <li key={item.id}>
            <button
            onClick={()=>setActive(item.id)}
            className={`
                rounded-full px-4 py-2 transition-all duration-500 ease-out font-medium
                ${active === item.id? "bg-background dark:bg-[#020617] text-primary shadow-md  " : ""}`}>
                {item.label}
            </button>
        </li>
        ))
    }
    </ul>
        <div className='hidden md:flex'>
            <ModeToggle/>
        </div>
        

    {/* Mobile */}
    <div className='flex justify-center items-center gap-6 md:hidden'>
        <ModeToggle/>
       <LuMenu size={26} onClick={()=>setIsOpen(true)}   />
      
       
    </div>
    
  <div className={`md:hidden
    fixed top-0 right-0 h-full w-full bg-background/50 border backdrop-blur-xl py-10
        shadow-lg max-w-2xl z-50 px-20 
      transform transition-all duration-600 ease-in-out 
      ${isOpen ? "translate-x-0 " : "translate-x-full "}`}
    
    >
      <div className='bg-primary flex justify-center items-center w-10 h-10  rounded-full'>
    <RxCross2 size={24} onClick={()=>setIsOpen(false)} className='text-white bg-primary/30 ' />
      </div>
    <ul className="flex flex-col items-center gap-4">
      {NavItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => {
              setActive(item.id)
              setIsOpen(false)
            }}
            className={`
              px-6 py-2 rounded-full font-medium
              transition-all duration-300
              ${
                active === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-muted/50"
              }
            `}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>

  </div>


    </div>
    </nav>
  )
}

export default Navbar
