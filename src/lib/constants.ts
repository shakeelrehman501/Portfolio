import { IconType } from "react-icons";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin, LuFacebook } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export const NavItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export interface skillsCardType {
  name: string;
  icon: IconType;
  color?: string;
  proficiency: number;
}
export const skillsCardData: skillsCardType[] = [
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "#E6C200",
    proficiency: 75,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    proficiency: 50,
  },
  {
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
    proficiency: 75,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    proficiency: 65,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    proficiency: 60,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#A3A3A3",
    proficiency: 60,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    proficiency: 50,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    proficiency: 80,
  },
];


export interface Links {
  name: string;
  icon: IconType;
  href: string;
}
export const socialLinks: Links[] = [
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
    icon: LuLinkedin,
    href: "#",
  },
  {
    name: "Instagram",
    icon: GrInstagram,
    href: "https://www.linkedin.com/in/shakeel-rehman-332339251/",
  },
];

export interface projectsCardType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}
export const projectsCardData: projectsCardType[] = [
  {
    title: "Boxel Technology",
    description:
      "I built a complete website for Boxel Technology from scratch using Next.js, implementing page routing and core concepts. This project enhanced my understanding of Next.js fundamentals and real-world application structure.",
    image: "./boxel.png",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript ES6+"],
    liveUrl: "https://www.boxeltechnology.com/",
    githubUrl: "https://github.com/shakeelrehman501/boxel_technology",
  },
  {
    title: "E-commerce website",
    description:
      "I built a fully functional e-commerce website from scratch using React, applying core concepts and modern development practices.",
    image: "./e_commerce_img.JPG",
    tags: ["React", "TypeScript", "Tailwind CSS", "JavaScript ES6+"],
    liveUrl: "https://e-commerce-coral-chi-79.vercel.app/",
    githubUrl: "https://github.com/shakeelrehman501/e-commerce",
  },
  {
    title: "Lahore Car Rental",
    description:
      "I developed a Lahore Car Rental website using Next.js. This project improved my frontend skills and strengthened my understanding of modern web development.",
    image: "./carrental.png",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript ES6+"],
    liveUrl: "https://www.lahorecarrent.com/",
    githubUrl: "https://github.com/shakeelrehman501/lahorecarrent",
  },
];

export interface ContactCardType {
  icon: IconType;
  title: string;
  data: string;
}
export const contactCardData: ContactCardType[] = [
  {
    icon: HiOutlineMail,
    title: "Email",
    data: "shakeelrehman501@gmail.com",
  },
  {
    icon: FiPhoneCall,
    title: "Phone",
    data: "0300-0787595",
  },
  {
    icon: GrLocation,
    title: "Location",
    data: "Barkat Market, Lahore",
  },
];
