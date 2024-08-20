import React from "react";

export const WebTop = () => {
  return (
    <div className=" hidden md:flex  md:h-[360px] px-8 md:my-24 xl:w-[1280px] xl:px-4 xl:mx-auto">
      <div className="head-container flex  lg:gap-12 ">
        <div className="title items-left flex flex-col h-auto w-auto md:gap-3.5 lg:gap-12">
          <div className="title-top">
            {" "}
            <h1 className="text-3xl font-bold text-gray-900">
              Hi, I’m Shagai 👋
            </h1>
            <p className="menu-para w-auto">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className="title-location">
            <p className="menu-para items-center flex gap-2">
              <img src="/img-loc1.png" className="w-6 h-6" alt="" />
              Ulaanbaatar, Mongolia
            </p>
            <p className="menu-para flex gap-2 items-center">
              <img src="/img-loc2.png" className="w-6 h-6" alt="" />
              Available for new projects
            </p>
          </div>
          <div className="title-icons flex gap-1">
            <img src="icon1.png" className="w-9 h-9" alt="" />
            <img src="icon2.png" className="w-9 h-9" alt="" />
            <img src="icon3.png" className="w-9 h-9" alt="" />
          </div>
        </div>
        <div className=" md:w-[320px] lg:w-[320px]   xl:w-[400px] h-[360px]">
          <div className="flex relative  w-[320px] h-[360px] xl:ml-20 xl:mr-10">
            <img
              src="/IMG_0034.jpg"
              className="absolute z-10 w-[280px] h-[320px] object-cover bg-white p-2 "
              alt=""
            />
            <div className="absolute z-0 top-8 left-8  w-[280px] h-[320px] bg-gray-200 p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
