import React from "react";

export const MobileTop = () => {
  return (
    <div className="flex flex-col mx-4 my-16 items-center justify-center md:hidden">
      <div className="img relative w-72 h-[300px]">
        <img
          src="/IMG_0034.jpg"
          className="absolute z-10 w-60 h-72 object-cover -translate-x-1/2 bg-white p-2 left-1/2 "
          alt=""
        />
        <div className="absolute z-0 img-bg w-[264px] h-[272px] left-1/2 -translate-x-1/2 bg-gray-200 top-7"></div>
      </div>
      <div className="title mt-12 items-left  w-full flex flex-col gap-12">
        <div className="title-top">
          {" "}
          <h1 className="text-3xl font-bold text-gray-900">
            Hi, I’m Shagai 👋
          </h1>
          <p className="menu-para">
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
    </div>
  );
};
