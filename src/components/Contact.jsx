import React from "react";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center w-screen ">
      <div className="flex flex-col items-center gap-6 mx-4 my-16 md:p-4 md:gap-12  xl:w-[1184px] ">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center menu-para rounded-xl w-[105px] h-[28px] bg-gray-100 dark:bg-gray-600 dark:text-gray-300">
              Get in touch
            </div>
            <p className=" text-center text-lg text-gray-600 font-sans font-light dark:text-gray-300	">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-[350px] md:w-[610px]">
              <img className="w-6 h-6" src="/contact/image.png" alt="" />
              <p className="font-semibold text-lg md:text-4xl text-gray-900 dark:text-gray-50">
                dash.altanshagai48@gmail.com
              </p>
              <img className="w-6 h-6 " src="/contact/image1.png" alt="" />
            </div>
            <div className="flex justify-between items-center w-[220px] md:w-[370px]">
              <img className="w-6 h-6" src="/contact/image2.png" alt="" />
              <p className="font-semibold text-lg md:text-4xl text-gray-900 dark:text-gray-50">
                +976 80509830
              </p>
              <img className="w-6 h-6 " src="/contact/image1.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="menu-para dark:text-gray-300">
              You may also find me on these platforms!
            </p>
            <div className="flex justify-center gap-1">
              <img
                src="/icon1.png"
                className="w-9 h-9 dark:invert-[0.4]"
                alt=""
              />
              <img src="/icon2.png" className="w-9 h-9" alt="" />
              <img src="/icon3.png" className="w-9 h-9" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
