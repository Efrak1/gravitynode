"use client"
import *as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/shared/ui/shadcn/button"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiSunflower } from "react-icons/gi";

export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <Button onClick={() => setTheme("light")} variant="toggle" className="2xl:text-xl">
        <GiSunflower className="h-[1.2rem] w-[1.2rem] 2xl:h-[30px] 2xl:w-[30px] text-white transition-all dark:scale-100" />
      </Button>
      <Button onClick={() => setTheme("dark")} variant="toggle" className="2xl:text-xl">
        <BsFillMoonStarsFill className="h-[20px] w-[20px] 2xl:h-[30px] 2xl:w-[30px] text-white transition-all dark:scale-100" />
      </Button>
    </div>
  )
}