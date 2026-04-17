
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
      date: "Dec 2025 - Feb 2026",
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
      href: "https://github.com/shakeelrehman501/Portfolio",
    },
    {
      name: "Github",
      icon: FiGithub,
      href: "https://github.com/shakeelrehman501/Portfolio",
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
      title: "Small projects",
      description:
        "I have created React apps like Todo List, Notes App, Shopping Cart, Counter, and Search Filter, learning how to manage state, reuse components, handle user interactions, and build responsive UI.",
      image: './smallProject.jpg',
      tags: ["Tailwind CSS", "React", "JavaScript conepts"],
      liveUrl: "https://smalprojacts.vercel.app/",
      githubUrl: "https://github.com/shakeelrehman501/smalprojacts/tree/main/src",
    },
    {
      title: "Boxel Technology",
      description:
        "I built a complete website for Boxel Technology from scratch using Next.js, implementing page routing and core concepts. This project enhanced my understanding of Next.js fundamentals and real-world application structure.",
      image: './boxel.png',
      tags: ["NextJs", "Tailwind CSS", "JavaScript Concepts"],
      liveUrl: "https://www.boxeltechnology.com/",
      githubUrl: "https://github.com/shakeelrehman501/boxel_technology",
    },
    {
      title: "E-commerce website",
      description:
        "I built a fully functional e-commerce website from scratch using React, applying core concepts and modern development practices.",
      image: './e_commerce_pic.jpg',
      tags: ["React", "Tailwind CSS", "TypeScript",],
      liveUrl: "https://e-commerce-project-omega-tawny-54.vercel.app/",
      githubUrl: "https://github.com/shakeelrehman501/e_commerce_project",
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