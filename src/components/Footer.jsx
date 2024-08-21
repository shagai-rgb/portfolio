import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray-50 h-[68px]">
      <div className="flex gap-2 items-center justify-center">
        <img src="/footer/icon.png" className="w-4 h-4" alt="" />
        <p className="menu-para">
          2023 | Designed and coded with ❤️️ by Sagar Shah
        </p>
      </div>
    </div>
  );
};
