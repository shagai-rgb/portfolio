import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const MobileHead = ({ themeToggle, sunToggle }) => {
  const navs = ["About", "Work", "Testimonials", "Contact"];
  const [nav, setNav] = useState(false);

  const menuToggler = () => {
    setNav((prev) => !prev);
  };

  const variants = {
    open: { x: 0 },
    closed: { x: "150%" },
  };

  return (
    <div className="w-screen sticky top-0 z-100 h-[40px] bg-white dark:bg-black">
      <header className="  webtop z-101 flex justify-between mx-4 my-4 items-center md:px-4 md:my-4  xl:w-[1280px] xl:my-4 xl:mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {"<SS/>"}
        </h1>
        <IoMdMenu
          className="flex text-4xl content-center md:hidden"
          onClick={menuToggler}
        />
        <motion.div
          initial="closed"
          animate={nav ? "open" : "closed"}
          variants={variants}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.1 },
          }}
          className="fixed md:hidden flex flex-col drop-shadow-2xl dark:drop-shadow-dark2xl	w-[320px] top-0 z-30 right-0 bg-white dark:bg-black h-screen"
        >
          <div className="flex justify-between border-b-[1px] border-gray-100 p-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {"<SS/>"}
            </h1>
            <button onClick={menuToggler}>
              <img
                className="flex text-4xl content-center w-9 h-9  md:hidden"
                src="head/x-button.png"
                alt="button"
              />
            </button>
          </div>
          <div className=" flex flex-col border-b-[1px] border-gray-100  p-4 gap-4">
            {navs.map((item, index) => {
              return (
                <p
                  key={index}
                  className="menu-para font-medium dark:text-gray-50"
                >
                  {item}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col p-4 gap-4">
            <div className="flex justify-between">
              <p className="menu-para dark:text-gray-50">Switch Theme</p>
              <button onClick={themeToggle}>
                <img src={sunToggle()} className="w-9 h-9" alt="" />
              </button>
            </div>
            <button className="bg-gray-900 dark:bg-gray-50 rounded-xl h-9 w-auto text-white  dark:text-gray-900  text-base">
              Download CV
            </button>
          </div>
        </motion.div>
        <div className="menu hidden items-center md:flex gap-6">
          {navs.map((item, index) => (
            <p key={index} className="menu-para dark:text-gray-50">
              {item}
            </p>
          ))}
          <p className="text-gray-100"> | </p>
          <div className="right-side flex items-center gap-4 ">
            <button onClick={themeToggle}>
              <img src={sunToggle()} className="w-9 h-9" alt="" />
            </button>
            <button className="bg-gray-900 dark:bg-gray-50  rounded-xl h-9 w-[136px] text-white dark:text-gray-900  text-base">
              Download CV
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
