import { IconType } from "react-icons";
import { SiExpress, SiMongodb, SiSqlite, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
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
    proficiency: 70,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    proficiency: 40,
  },
  {
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
    proficiency: 60,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    proficiency: 50,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    proficiency: 50,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#A3A3A3",
    proficiency: 70,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    proficiency: 70,
  },
  {
    name: "SQL",
    icon: SiSqlite,
    color: "#336791",
    proficiency: 60,
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
    name: "Github",
    icon: FiGithub,
    href: "https://github.com/shakeelrehman501",
  },
  {
    name: "LinkedIn",
    icon: LuLinkedin,
    href: "https://www.linkedin.com/in/shakeel-rehman-332339251/",
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
    title: "MERN Stack E-Commerce",
    description:
      "A full-stack MERN e-commerce application featuring secure JWT authentication, protected routes, admin product management, RESTful APIs, product search and filtering, Redux Toolkit state management, image uploads with Cloudinary, and Zod validation.",
    image: "./e_commerce_img.JPG",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Redux Toolkit", "JWT", "Zod", ],
    liveUrl: "https://mern-ecommerce-4rgb.vercel.app",
    githubUrl: "https://github.com/shakeelrehman501/MERN-ecommerce",
  },
  {
    title: "Boxel Technology",
    description:
      "I built a complete website for Boxel Technology from scratch using Next.js, implementing page routing and core concepts. This project enhanced my understanding of Next.js fundamentals and real-world application structure.",
    image: "./boxel.png",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript ES6+",
    ],
    liveUrl: "https://www.boxeltechnology.com",
    githubUrl: "https://github.com/shakeelrehman501/boxel_technology",
  },
  {
    title: "Task Management System",
    description:
      "A full-stack task management application that allows users to create, edit, delete, filter and track tasks with status, priority, descriptions, and due dates, along with secure user authentication and a responsive dashboard.",
    image: "./task_management.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Tailwin CSS", ],
    liveUrl: "https://task-management-system-seven-weld.vercel.app",
    githubUrl: "https://github.com/shakeelrehman501/Task-Management-System",
  },
  
  {
    title: "Lahore Car Rental",
    description:
      "I developed a Lahore Car Rental website using Next.js. This project improved my frontend skills and strengthened my understanding of modern web development.",
    image: "./carrental.png",
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript ES6+",
    ],
    liveUrl: "https://www.lahorecarrent.com/",
    githubUrl: "https://github.com/shakeelrehman501/lahore_car_rental",
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
