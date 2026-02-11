"use client";
import { useState, useEffect } from "react";
import { NavItems } from "@/Data/constants";
import { ModeToggle } from "./ui/ModeToggle";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { MenuIcon } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import {motion, AnimatePresence} from "framer-motion"


function MenuIcons (){
  return (
    <div className="flex items-center gap-2">
              <a
                href="https://github.com/shakeelrehman501/Portfolio"
                target="_blank"
                rel="noopener noreferer"
                className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <LuGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/shakeel-rehman-332339251/"
                target="_blank"
                rel="noopener noreferer"
                className="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
  )
}


function Navbar() {
  const [activeLink, setActiveLink] = useState("about");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleMenuItemClick = (sectionId:string)=>{
      setActiveLink(sectionId)
      setIsOpen(false)
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
  }
useEffect(() => {
  const sections = NavItems.map(item => document.getElementById(item.id));

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      if (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveLink(section.id);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <motion.header 
    initial={{opacity:0, y:-30}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.2, ease:"easeOut"}}
    className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="max-w-350 mx-auto px-6  lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 ">
            <div
              className="w-10 h-10 rounded-lg text-[20px] text-white font-roboto font-semibold p-5 flex justify-center items-center bg-gradient-to-t from-[#3B82F6] to-[#155DFC] 
        shadow-[0_10px_15px_-3px_rgba(59,130,246,0.2)]
        shadow-[0_4px_6px_-4px_rgba(59,130,246,0.2)]"
            >
              SR
            </div>
            <div>
              <h1 className="text-[20px] font-bold">
                Shakeel<span className="text-[#3B82F6]">.dev</span>{" "}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="bg-gray-50/50 dark:bg-gray-800/50 rounded-full px-2.5 py-2.5 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-1">
                {NavItems.map((item) => (
                  <a
                    key={item.id}
                    onClick={()=>handleMenuItemClick(item.id)}
                    className={`px-5 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                      activeLink === item.id
                        ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                        : "text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                  >
                    <span
                    className="font-medium text-sm "
                    >
                      
                    {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <MenuIcons/>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />

            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ModeToggle />
            <button className="p-2 text-gray-600 dark:text-gray-400">
              {isOpen ? (
                <RxCross2
                  size={26}
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 p-2  rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                />
              ) : (
                <MenuIcon
                  size={26}
                  onClick={() => setIsOpen(true)}
                  className="w-10 h-10 p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800
          `}
        >
          {isOpen && (
            <div className="flex flex-col gap-2 justify-center items-center">
              {NavItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => setActiveLink(item.label)}
                  className={`px-4 py-2 rounded-lg transition-colors  ${
                    activeLink === item.label
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-fit"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="font-medium text-sm ">{item.label}</span>
                </a>
              ))}
              <MenuIcons/>
            </div>
          )}
          
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
