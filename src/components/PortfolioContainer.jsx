import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { AboutMeLayout } from "./AboutMeLayout";
import { SkillsLayout } from "./SkillsLayout";
import { Experience } from "./Experience";
import { Work } from "./Work";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useTheme } from "next-themes";
import { MobileHead } from "./MobileHead";

export const PortfolioContainer = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [isDark, setIsDark] = useState(systemTheme === "light" ? true : false);

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
      <MobileHead themeToggle={themeToggle} sunToggle={sunToggle} />
      <Header />
      <AboutMeLayout />
      <SkillsLayout />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};
