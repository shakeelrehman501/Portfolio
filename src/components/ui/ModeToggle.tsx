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
    >
    
      <Moon className="text-[#F8FAFC] absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-120 dark:rotate-0" />
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
    </Button>
  );
}
