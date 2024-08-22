import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { AboutMeLayout } from "./AboutMeLayout";
import { SkillsLayout } from "./SkillsLayout";
import { Experience } from "./Experience";
import { Work } from "./Work";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useTheme } from "next-themes";

export const PortfolioContainer = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [isDark, setIsDark] = useState(systemTheme === "light" ? false : true);

  const sunToggle = () => {
    return isDark ? "/moon.png" : "/sun.png";
  };
  const themeToggle = () => {
    setIsDark((prev) => !prev);
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  return (
    <div>
      <Header themeToggle={themeToggle} sunToggle={sunToggle} />
      <AboutMeLayout />
      <SkillsLayout />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};
