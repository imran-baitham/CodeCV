import { useTheme } from "next-themes";
import React from "react";
import { ReactIcon } from "../index";

export function Theme() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="border border-1 dark:border-white border-black p-[6px]"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <ReactIcon icon="RiMoonFill" className="h-5 w-5" />
        ) : (
          <ReactIcon icon="RiSunFill" className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
