"use client"
import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex items-center bg-[#4C7191] dark:bg-black p-1 dark:text-white text-black justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 w-10"
        >
            {theme === "light" ? <MoonIcon /> :  <SunIcon />}
        </button>
    );
};
