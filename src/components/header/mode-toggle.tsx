import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const style = "h-[1.2rem] w-[1.2rem]";

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="w-9 h-9 flex items-center justify-center"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon className={style} />
      ) : (
        <Sun className={style} />
      )}
    </div>
  );
}
