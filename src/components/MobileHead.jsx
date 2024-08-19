import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

export const MobileHead = () => {
  return (
    <header className=" flex justify-between items-center md:px-8 md:my-4  xl:w-[1280px] xl:my-4 xl:mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">SS</h1>{" "}
      <IoMdMenu className="flex text-4xl content-center md:hidden" />
      <div className="menu hidden items-center md:flex gap-6">
        <p className="menu-para">About</p>
        <p className="menu-para">Work</p>
        <p className="menu-para">Testimonials</p>
        <p className="menu-para">Contact</p>
        <p className="text-gray-100"> | </p>
        <div className="right-side flex items-center gap-4 ">
          <IoSunnyOutline className="w-6 h-6" />
          <button className="bg-gray-900 rounded-xl h-9 w-[136px] text-white text-base">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};
