import React from "react";

export const Work = () => {
  const apps = [
    "React",
    "Next.js",
    "Typescript",
    "Nest.js",
    "PostgreSQL",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  return (
    <div className="flex flex-col items-center w-screen ">
      <div className="flex flex-col items-center gap-6 mx-4 my-16 md:p-4 md:gap-12  xl:w-[1184px] ">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center menu-para rounded-xl w-[105px] h-[28px] bg-gray-200 dark:bg-gray-600 dark:text-gray-300">
            Work
          </div>
          <p className=" text-center text-lg text-gray-600 font-sans font-light dark:text-gray-300	">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="bg-white w-full drop-shadow-md rounded-xl dark:bg-gray-900">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="p-8 bg-gray-100 rounded-t-xl lg:w-1/2 lg:rounded-r-none lg:rounded-l-xl dark:bg-gray-600">
              <img className="rounded-xl" src="/work/work1.png" alt="" />
            </div>
            <div className="flex flex-col gap-6 p-8 lg:w-1/2">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Fiskil
              </p>
              <p className="menu-para dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2">
                {apps.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 px-5 rounded-xl bg-gray-200 font-normal text-sm text-gray-600 dark:text-gray-300 dark:bg-gray-600"
                    >
                      {el}
                    </div>
                  );
                })}
              </div>

              <img className="w-9 h-9" src="/work/work-button.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white w-full drop-shadow-md rounded-xl dark:bg-gray-900">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="p-8 bg-gray-100 rounded-t-xl lg:hidden dark:bg-gray-600">
              <img className="rounded-xl" src="/work/work1.png" alt="" />
            </div>
            <div className="flex flex-col gap-6 p-8 lg:w-1/2">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Fiskil
              </p>
              <p className="menu-para dark:text-gray-300 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2">
                {apps.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 px-5 rounded-xl bg-gray-200 font-normal text-sm text-gray-600 dark:text-gray-300 dark:bg-gray-600"
                    >
                      {el}
                    </div>
                  );
                })}
              </div>

              <img className="w-9 h-9" src="/work/work-button.png" alt="" />
            </div>
            <div className="p-8 bg-gray-100 rounded-t-xl hidden lg:flex lg:w-1/2 lg:rounded-r-none lg:rounded-l-xl dark:bg-gray-600">
              <img className="rounded-xl" src="/work/work1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white w-full drop-shadow-md rounded-xl dark:bg-gray-900">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="p-8 bg-gray-100 rounded-t-xl lg:w-1/2 lg:rounded-r-none lg:rounded-l-xl dark:bg-gray-600">
              <img className="rounded-xl" src="/work/work1.png" alt="" />
            </div>
            <div className="flex flex-col gap-6 p-8 lg:w-1/2">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Fiskil
              </p>
              <p className="menu-para dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="flex flex-wrap gap-2">
                {apps.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 px-5 rounded-xl bg-gray-200 font-normal text-sm text-gray-600 dark:text-gray-300 dark:bg-gray-600"
                    >
                      {el}
                    </div>
                  );
                })}
              </div>

              <img className="w-9 h-9" src="/work/work-button.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
