import React, { useState } from "react";
import { MobileHead } from "./MobileHead";
import { MobileTop } from "./MobileTop";
import { WebTop } from "./WebTop";

export const Header = ({ themeToggle, sunToggle }) => {
  return (
    <header>
      <MobileHead themeToggle={themeToggle} sunToggle={sunToggle} />
      <MobileTop />
      <WebTop />
    </header>
  );
};
