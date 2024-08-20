import React from "react";

export const SkillsLayout = () => {
  const icon = [
    { icon: "/icons/icons1.png" },
    { icon: "/icons/icons2.png" },
    { icon: "/icons/icons3.png" },
    { icon: "/icons/icons4.png" },
    { icon: "/icons/icons5.png" },
    { icon: "/icons/icons6.png" },
    { icon: "/icons/icons7.png" },
    { icon: "/icons/icons8.png" },
    { icon: "/icons/icons9.png" },
    { icon: "/icons/icons10.png" },
    { icon: "/icons/icons11.png" },
    { icon: "/icons/icons12.png" },
    { icon: "/icons/icons13.png" },
    { icon: "/icons/icons14.png" },
    { icon: "/icons/icons15.png" },
    { icon: "/icons/icons16.png" },
  ];
  return (
    <div className="flex flex-col items-center w-screen">
      <div className="flex flex-col items-center px-4 my-16 mx-4 gap-6 md:gap-12 md:my-[96px] xl:w-[1280px] ">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center menu-para rounded-xl w-[105px] h-[28px] bg-gray-200">
            Skills
          </div>
          <p className=" text-center text-lg text-gray-600 font-sans font-light 	">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-[82px] gap-y-4 md:gap-y-12 flex-wrap justify-between items-start">
          {icon.map((el) => {
            return <img src={el.icon} className="w-auto h-[100px]" alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};
