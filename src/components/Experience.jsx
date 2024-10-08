import React from "react";

export const Experience = () => {
  return (
    <div className="flex flex-col items-center w-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-6 mx-4 my-16 md:p-4 md:gap-12  lg:w-[928px] ">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center menu-para rounded-xl w-[105px] h-[28px] bg-gray-200 dark:bg-gray-600 dark:text-gray-300">
            Experience
          </div>
          <p className=" text-center text-lg text-gray-600 font-sans font-light dark:text-gray-300	">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className="bg-white w-full drop-shadow-md rounded-xl dark:bg-gray-600">
          <div className="flex flex-col p-8 gap-4 md:flex-row md:justify-between">
            <img
              className="w-[102px] h-7 lg:mr-[104px]"
              src="/experience-logo/upwork.png"
              alt=""
            />
            <p className="menu-para md:hidden dark:text-gray-300">
              Nov 2021 - Present
            </p>

            <div className="flex flex-col gap-4 md:w-[384px]">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Sr. Frontend Developer
              </p>
              <ul className="menu-para list-outside gap-1 list-disc	pl-5 dark:text-gray-300">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div className="menu-para hidden md:w-[146px] md:flex dark:text-gray-300">
              Nov 2021 - Present
            </div>
          </div>
        </div>
        <div className="bg-white w-full drop-shadow-md rounded-xl dark:bg-gray-600">
          <div className="flex flex-col p-8 gap-4 md:flex-row md:justify-between">
            <img
              className="w-[102px] h-7 lg:mr-[104px]"
              src="/experience-logo/upwork.png"
              alt=""
            />
            <p className="menu-para md:hidden dark:text-gray-300">
              Jul 2017 - Oct 2021
            </p>

            <div className="flex flex-col gap-4 md:w-[384px]">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Team Lead
              </p>
              <ul className="menu-para list-outside gap-1 list-disc	pl-5 dark:text-gray-300">
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div className="menu-para hidden md:w-[146px] md:flex dark:text-gray-300">
              Nov 2021 - Present
            </div>
          </div>
        </div>
        <div className="bg-white w-full drop-shadow-md rounded-xl dark:bg-gray-600">
          <div className="flex flex-col p-8 gap-4 md:flex-row md:justify-between">
            <img
              className="w-[102px] h-7 lg:mr-[104px]"
              src="/experience-logo/upwork.png"
              alt=""
            />
            <p className="menu-para md:hidden dark:text-gray-300">
              Dec 2015 - May 2017
            </p>

            <div className="flex flex-col gap-4 md:w-[384px]">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Full Stack Developer
              </p>
              <ul className="menu-para list-outside gap-1 list-disc	pl-5 dark:text-gray-300">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div className="menu-para hidden md:w-[146px] md:flex dark:text-gray-300">
              Nov 2021 - Present
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
