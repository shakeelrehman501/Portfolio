
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io";
import { IconType } from "react-icons";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin, LuFacebook  } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export const NavItems = [
    {id:"about", label:"About"},
    {id:"skills", label:"Skills"},
    {id:"experience", label:"Experience"},
    {id:"projects", label:"Projects"},
    {id:"contact", label:"Contact"}
]

export interface skillsCardType {
  name: string;
  icon: IconType;
  color?:string;
  proficiency: number;
}
export const skillsCardData:skillsCardType[] = [
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

export interface experienceCardType {
  company: string;
    logo: React.ReactNode;
    position: string;
    type: string;
    date: string;
    location: string;
    description: string;
    tags: string[];
}
export const  experienceCardData:experienceCardType[] = [
    {
      company: "Lintent",
      logo:"Boxel",
      position: "Frontend Developer",
      type: "Internship Hunt",
      date: "Dec 2025 - Jan 2026",
      location: "Remote",
      description:
        "Gaining valuable experience in frontend development, worked on building responsive web applications and modern user interfaces. Collaborated with teams to develop scalable solutions using modern technologies and best practices. Focused on writing clean, maintainable code and improving user experience through innovative design patterns.",
      tags: ["HTML", "JavaScript", "Tailwind CSS", "React", "Next.js", "TypeScript"],
    },
]

export interface Links {
  name: string;
  icon:IconType;
  href:string
}
export const socialLinks:Links[] = [
    {
      name: "Facebook",
      icon: LuFacebook,
      href: "https://github.com/dashboard",
    },
    {
      name: "Github",
      icon: FiGithub,
      href: "https://github.com/dashboard",
    },
    {
      name: "https://www.linkedin.com/in/shakeel-rehman-332339251/",
      icon: LuLinkedin ,
      href: "#",
    },
    {
      name: "Instagram",
      icon: GrInstagram ,
      href: "https://www.linkedin.com/in/shakeel-rehman-332339251/",
    },
];

export interface projectsCardType {
  title:string;
  description:string;
  image:string;
  tags:string[];
  liveUrl:string;
  githubUrl:string
}
export const projectsCardData:projectsCardType[] = [
    {
      title: "To do List",
      description:
        "A simple yet powerful to-do list application built with modern web technologies. Features include task creation, editing, deletion, and status tracking with a clean and intuitive user interface.",
      image: './Todo.jpg',
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://boxeltechnology.com/",
      githubUrl: "https://github.com/shakeelrehman501/Portfolio",
    },
    {
      title: "To do List",
      description:
        "A simple yet powerful to-do list application built with modern web technologies. Features include task creation, editing, deletion, and status tracking with a clean and intuitive user interface.",
      image: './Todo.jpg',
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "To do List",
      description:
        "A simple yet powerful to-do list application built with modern web technologies. Features include task creation, editing, deletion, and status tracking with a clean and intuitive user interface.",
      image: './Todo.jpg',
      tags: ["HTML", "CSS", "JavaScript", "React",],
      liveUrl: "#",
      githubUrl: "#",
    },
];  

export interface ContactCardType {
  icon:IconType,
  title:string,
  data:string
}
export const contactCardData:ContactCardType[] = [
  {
    icon:HiOutlineMail, 
    title:"Email",
    data:"shakeelrehman501@gmail.com"
  },
  {
    icon:FiPhoneCall, 
    title:"Phone",
    data:"0300-0787595"
  },
  {
    icon:GrLocation, 
    title:"Location",
    data:"Barkat Market, Lahore"
  },
]