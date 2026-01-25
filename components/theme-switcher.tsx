"use client";

import { cn } from "@/lib/utils";
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";

const themes = [
  {
    key: "light",
    icon: SunIcon,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: MoonIcon,
    label: "Dark theme",
  },
];

type Props = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useLayoutEffect(() => {
    // Prevent hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border",
        className
      )}
      id="theme-switcher"
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            aria-label={label}
            className="relative h-6 w-6 rounded-full"
            key={key}
            onClick={() => setTheme(key as "light" | "dark" | "system")}
            type="button"
          >
            {mounted && isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-secondary"
                layoutId="activeTheme"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto h-3 w-3",
                mounted && isActive
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
