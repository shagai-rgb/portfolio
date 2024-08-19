import React from "react";
import { MobileHead } from "./MobileHead";
import { MobileTop } from "./MobileTop";
import { WebTop } from "./WebTop";

export const Header = () => {
  return (
    <header>
      <MobileHead />
      <MobileTop />
      <WebTop />
    </header>
  );
};
