"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const {theme, setTheme } = useTheme();

  return (
    <Button variant="outline" size="icon"
    onClick={()=>setTheme(theme==="dark" ? "light" : "dark")}
    className="bg-[#F1F5F9]  text-[#0F172A] hover:bg-[#e8ecf0] hover:text-[#131c31]  dark:bg-[#1E293B] hover:dark:bg-[#293952] dark:text-[#F8FAFC]  shadow p-5 rounded-full md:rounded-md  "
    >
    
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-130  rotate-360 transition-all dark:scale-0 dark:rotate-0" />
      <Sun className="h-[1.2rem] w-[1.2rem] scale-0 rotate-0 transition-all dark:scale-120" />
    </Button>
  );
}
