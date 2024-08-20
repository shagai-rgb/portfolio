import React from "react";
import { Header } from "./Header";
import { AboutMeLayout } from "./AboutMeLayout";
import { SkillsLayout } from "./SkillsLayout";
import { Experience } from "./Experience";
import { Work } from "./Work";

export const PortfolioContainer = () => {
  return (
    <div>
      <Header />
      <AboutMeLayout />
      <SkillsLayout />
      <Experience />
      <Work />
    </div>
  );
};
