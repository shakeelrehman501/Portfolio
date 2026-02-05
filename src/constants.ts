
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io";
import { IconType } from "react-icons";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import Image from "next/image";
export interface Skill {
  name: string;
  icon: IconType;
  color?:string;
  proficiency: number;
}

export const skills:Skill[] = [
    {
      name: "HTML",
      icon: TfiHtml5,
      color: "#E34F26",
      proficiency: 95,
    },
    {
      name: "CSS",
      icon: IoLogoCss3,
      color: "#1572B6",
      proficiency: 90,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#38BDF8",
      proficiency: 92,
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      color: "#E6C200",
      proficiency: 88,
    },
    {
      name: "React",
      icon: FaReact ,
      color: "#61DAFB",
      proficiency: 85,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      proficiency: 80,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      proficiency: 82,
    },
  ];


export const  experienceData = [
    {
      company: "Lintent",
      logo:"Logo",
      // logo: (
      //   <div className="flex items-center">
      //     {/* <svg className="w-7 h-9" fill="none" viewBox="0 0 28.1069 36.9919">
      //       <path d={svgPaths.p20b6b800} fill="#0461F2" />
      //     </svg> */}
      //     <span className="ml-1 text-2xl font-bold font-['Inter'] text-[#0461f2]">oxel</span>
      //   </div>
      // ),
      position: "Frontend Developer",
      type: "Internship Hunt",
      date: "Dec 2025 - Jan 2026",
      location: "Remote",
      description:
        "Gaining valuable experience in frontend development, worked on building responsive web applications and modern user interfaces. Collaborated with teams to develop scalable solutions using modern technologies and best practices. Focused on writing clean, maintainable code and improving user experience through innovative design patterns.",
      tags: ["HTML", "JavaScript", "Tailwind CSS", "React", "Next.js", "TypeScript"],
    },
  ]

export const NavItems = [
    {id:"about", label:"About"},
    {id:"experience", label:"Experience"},
    {id:"skills", label:"Skills"},
    {id:"projects", label:"Projects"},
    {id:"contact", label:"Contact"}
]
export interface Links {
  name: string;
  icon:IconType;
  href:string
}
export const socialLinks:Links[] = [
    {
      name: "Facebook",
      icon: TfiHtml5,
      href: "#",
    },
    {
      name: "Twitter",
      icon: TfiHtml5,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: TfiHtml5,
      href: "#",
    },
    {
      name: "Instagram",
      icon: TfiHtml5,
      href: "#",
    },
  ];

export const projectsData = [
    {
      title: "To do List",
      description:
        "A simple yet powerful to-do list application built with modern web technologies. Features include task creation, editing, deletion, and status tracking with a clean and intuitive user interface.",
      image: '/Todo.jpg',
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "To do List",
      description:
        "A simple yet powerful to-do list application built with modern web technologies. Features include task creation, editing, deletion, and status tracking with a clean and intuitive user interface.",
      image: '/Todo.jpg',
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "To do List",
      description:
        "A simple yet powerful to-do list application built with modern web technologies. Features include task creation, editing, deletion, and status tracking with a clean and intuitive user interface.",
      image: '/Todo.jpg',
      tags: ["HTML", "CSS", "JavaScript", "React",],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];