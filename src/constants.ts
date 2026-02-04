
import { TfiHtml5 } from "react-icons/tfi";
import { IconType } from "react-icons";

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
      icon: TfiHtml5,
      proficiency: 90,
    },
    {
      name: "Tailwind CSS",
      icon: TfiHtml5,
      proficiency: 92,
    },
    {
      name: "JavaScript",
      icon: TfiHtml5,
      proficiency: 88,
    },
    {
      name: "React",
      icon: TfiHtml5,
      proficiency: 85,
    },
    {
      name: "Node.js",
      icon: TfiHtml5,
      proficiency: 80,
    },
    {
      name: "TypeScript",
      icon: TfiHtml5,
      proficiency: 82,
    },
  ];

export const NavItems = [
    {id:"about", label:"About"},
    {id:"experience", label:"Experience"},
    {id:"skills", label:"Skills"},
    {id:"projects", label:"Projects"},
    {id:"contact", label:"Contact"}
]