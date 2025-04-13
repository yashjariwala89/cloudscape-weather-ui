
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has dark mode preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    
    // Set initial theme
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "rounded-full w-9 h-9 transition-all",
        isDarkMode ? "bg-slate-800 text-yellow-400" : "bg-blue-100 text-blue-900"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun size={18} className="animate-pulse-slow" />
      ) : (
        <Moon size={18} />
      )}
    </Button>
  );
};

export default ThemeToggle;
