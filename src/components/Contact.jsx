import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const Contact = () => {
  const [check, setCheck] = useState(true);
  const [check1, setCheck1] = useState(true);
  const email = "dash.altanshagai48@gmail.com";
  const phone = "+976 80509830";
  const handleCopyMail = async () => {
    setTimeout(() => {
      setCheck1(true);
    }, 300);
    setCheck1((prev) => !prev);
    await navigator.clipboard.writeText(email);
  };
  const handleCopyPhone = async () => {
    setTimeout(() => {
      setCheck(true);
    }, 300);
    setCheck((prev) => !prev);
    await navigator.clipboard.writeText(phone);
  };

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
                {email}
              </p>
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content={!check1 ? "copied " : "copy"}
                data-tooltip-place="top"
                onClick={handleCopyMail}
              >
                <img
                  className={!check1 ? "hidden " : "flex w-6 h-6"}
                  src="/contact/image1.png"
                  alt=""
                />
                <IoCheckmarkDoneSharp
                  className={check1 ? "hidden " : "flex w-6 h-6"}
                />
              </button>
              <Tooltip id="my-tooltip" />
            </div>
            <div className="flex justify-between items-center w-[220px] md:w-[370px]">
              <img className="w-6 h-6" src="/contact/image2.png" alt="" />
              <p className="font-semibold text-lg md:text-4xl text-gray-900 dark:text-gray-50">
                {phone}
              </p>
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content={!check ? "copied " : "copy"}
                data-tooltip-place="top"
                onClick={handleCopyPhone}
              >
                <img
                  className={!check ? "hidden " : "flex w-6 h-6"}
                  src="/contact/image1.png"
                  alt=""
                />
                <IoCheckmarkDoneSharp
                  className={check ? "hidden " : "flex w-6 h-6"}
                />
              </button>
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
