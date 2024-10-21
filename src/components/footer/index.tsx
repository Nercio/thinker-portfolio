"use client";

import { Home, User } from "lucide-react";
import AnimatedBackground from "../common/animated-background";
import { useState, useTransition } from "react";
import ModeToggle from "./mode-toggle";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

export function AnimatedTabs() {
  const [language, setLanguage] = useState("en");
  const [isPending, startTransition] = useTransition(); // Destructure correctly

  const onChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "en" ? "pt" : "en";
      onChange(newLanguage);
      return newLanguage;
    });
  };

  const TABS = [
    {
      label: "Home",
      icon: <Home className="h-5 w-5" />,
    },
    // {
    //   label: "About",
    //   icon: <User className="h-5 w-5" />,
    // },
    {
      label: "Language",
      icon: (
        <div
          onClick={toggleLanguage}
          className="flex flex-col h-9 w-9 items-center justify-center"
        >
          <span className="text-sm font-medium uppercase">{language}</span>
        </div>
      ),
    },
    {
      label: "Mode",
      icon: <ModeToggle />,
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex w-full space-x-2 rounded-xl border border-zinc-950/10 dark:border-zinc-50/10 bg-white dark:bg-background p-2">
        <AnimatedBackground
          defaultValue={TABS[0].label}
          className="rounded-lg bg-zinc-100 dark:bg-zinc-900"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.label}
              data-id={tab.label}
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center text-zinc-500 dark:text-zinc-400 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:data-[checked=true]:text-white"
            >
              {tab.icon}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
}
