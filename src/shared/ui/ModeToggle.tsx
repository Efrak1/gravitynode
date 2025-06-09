"use client"
import *as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/shared/ui/button"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiSunflower } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="py-2 px-3 h-auto 2xl:text-xl 2xl:py-[22px] 2xl:px-8">
          <GiSunflower className="h-[1.2rem] w-[1.2rem] 2xl:h-[30px] 2xl:w-[30px] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <BsFillMoonStarsFill className="absolute h-[20px] w-[20px] 2xl:h-[30px] 2xl:w-[30px] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="2xl:text-xl 2xl:w-48">
        <DropdownMenuItem className="2xl:py-3 2xl:text-2xl" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="2xl:py-3 2xl:text-2xl" onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="2xl:py-3 2xl:text-2xl" onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}