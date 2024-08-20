import React from "react";
import { Header } from "./Header";
import { AboutMeLayout } from "./AboutMeLayout";
import { SkillsLayout } from "./SkillsLayout";

export const PortfolioContainer = () => {
  return (
    <div>
      <Header />
      <AboutMeLayout />
      <SkillsLayout />
    </div>
  );
};
