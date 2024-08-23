import React, { useState } from "react";
import { MobileHead } from "./MobileHead";
import { MobileTop } from "./MobileTop";
import { WebTop } from "./WebTop";

export const Header = () => {
  return (
    <header>
      <MobileTop />
      <WebTop />
    </header>
  );
};
